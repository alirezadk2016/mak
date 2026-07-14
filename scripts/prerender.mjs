/**
 * Static pre-render (SSG) for the Vite SPA.
 *
 * After `vite build`, this serves the built `dist/` in a headless browser,
 * captures the fully-rendered HTML of every route, injects per-route
 * <title>/description/canonical/OG meta, and writes each route to its own
 * `dist/<route>/index.html`.
 *
 * Result: raw HTML (View Source) contains all visible text + correct meta,
 * so crawlers and link-preview bots see the content. No visual change for
 * users — the same SPA JS still boots and takes over.
 *
 * Output is committed as SOURCE so the host builds normally (no browser
 * needed at deploy time):
 *   - every route -> prerendered/<route>/index.html
 *   - sitemap.xml / robots.txt -> public/
 * A tiny Vite plugin (see vite.config.ts) copies prerendered/* into dist/*
 * at the end of `vite build`, overwriting the empty-SPA HTML. Dev is left
 * untouched (prerendered/ is not served by the dev server).
 * Asset filenames are stable (see vite.config.ts) so these files keep
 * referencing valid /assets/* after every rebuild.
 */
import { createServer } from 'node:http'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join, extname, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const DIST = join(ROOT, 'dist')
const PUBLIC = join(ROOT, 'public')
const PRERENDERED = join(ROOT, 'prerendered')
const ORIGIN = 'https://www.makvandi.dk'
const PORT = 5099

const SITE = 'Alireza Makvandi'

// Per-route metadata (Danish — primary audience). title/description/og.
const routes = [
  {
    path: '/',
    title: 'Alireza Makvandi — IT-supporter | Aarhus',
    description: 'Uddannet IT-supporter fra Aarhus Tech, klar til nyt job. Erfaring med Windows, hardware, netværk, servere og brugersupport — fra bl.a. YouSee og Fourcom. Baseret i Aarhus, Danmark.',
  },
  {
    path: '/about',
    title: 'Om mig — Alireza Makvandi | IT-supporter i Aarhus',
    description: 'Lær Alireza Makvandi at kende: uddannet IT-supporter fra Aarhus Tech, 10 år i Danmark, erfaring fra YouSee og Fourcom. Kompetencer, rejse, sprog og interesser.',
  },
  {
    path: '/recommendations',
    title: 'Anbefalinger — Alireza Makvandi',
    description: 'Officielle anbefalinger fra virksomheder, jeg har arbejdet for — bl.a. YouSee. Ord fra ledere, der har set min indsats på tæt hold.',
  },
  {
    path: '/projects/elite-vask',
    title: 'Elite Vask — Projekt | Alireza Makvandi',
    description: 'Webløsning for Elite Vask — moderne hjemmeside med online booking. Design og udvikling af Alireza Makvandi.',
  },
  {
    path: '/projects/svendeproeve',
    title: 'Svendeprøve — Aarhus Tech | Alireza Makvandi',
    description: 'Afsluttende svendeprøve på IT-supporteruddannelsen: opsætning af komplet netværksinfrastruktur med servere, brugere og afdelinger.',
  },
  {
    path: '/projects/mak-painting',
    title: 'MAK Painting — Projekt | Alireza Makvandi',
    description: 'To-sproget hjemmeside og admin-panel til malervirksomheden MAK Painting i Melbourne: booking, galleri, priser og indhold.',
  },
  {
    path: '/projects/gaming-pc',
    title: 'Gaming PC Build — Projekt | Alireza Makvandi',
    description: 'Selvbygget gaming-PC fra bunden — research, kompatibilitet, samling og konfiguration. Et bevis på indgående hardwareforståelse.',
  },
  {
    path: '/experience/yousee',
    title: 'YouSee — Erfaring | Alireza Makvandi',
    description: 'Erfaring fra YouSee: kundeservice, drift og administration. Officiel anbefaling fra butikschefen.',
  },
  {
    path: '/experience/fourcom',
    title: 'Fourcom — Erfaring | Alireza Makvandi',
    description: 'IT-support praktik hos Fourcom: opsætning af Windows, hardware, fejlfinding og brugersupport.',
  },
  {
    path: '/experience/folkehuse',
    title: 'Folkehuse Aarhus — Erfaring | Alireza Makvandi',
    description: 'Frivilligt IT-arbejde i Folkehuse Aarhus — brugersupport, især for ældre borgere.',
  },
  {
    path: '/experience/aarhustech',
    title: 'Aarhus Tech — Erfaring | Alireza Makvandi',
    description: 'Skolepraktik og IT-supporteruddannelsen på Aarhus Tech — netværk, servere, sikkerhed og support.',
  },
]

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.json': 'application/json', '.woff': 'font/woff',
  '.woff2': 'font/woff2', '.pdf': 'application/pdf', '.ico': 'image/x-icon',
  '.xml': 'application/xml', '.txt': 'text/plain',
}

// Static file server with SPA fallback to index.html.
function startServer() {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      try {
        const urlPath = decodeURIComponent(req.url.split('?')[0])
        let filePath = join(DIST, urlPath)
        if (urlPath.endsWith('/')) filePath = join(filePath, 'index.html')
        if (!existsSync(filePath) || !extname(filePath)) {
          // route or missing file -> SPA fallback
          filePath = join(DIST, 'index.html')
        }
        const data = await readFile(filePath)
        res.setHeader('Content-Type', MIME[extname(filePath)] || 'application/octet-stream')
        res.end(data)
      } catch {
        res.statusCode = 404
        res.end('not found')
      }
    })
    server.listen(PORT, () => resolve(server))
  })
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

async function run() {
  const server = await startServer()
  // Use an explicit path if given, else the pre-installed browser in this
  // sandbox, else let Playwright pick its own (e.g. GitHub Actions / CI).
  const preinstalled = '/opt/pw-browsers/chromium'
  const executablePath =
    process.env.PLAYWRIGHT_EXECUTABLE_PATH || (existsSync(preinstalled) ? preinstalled : undefined)
  const browser = await chromium.launch({ executablePath })
  const context = await browser.newContext({ locale: 'da-DK', viewport: { width: 1440, height: 900 } })

  for (const route of routes) {
    const page = await context.newPage()
    await page.goto(`http://localhost:${PORT}${route.path}`, { waitUntil: 'networkidle' })
    // Reveal all in-view animations so every text node is present & visible.
    await page.evaluate(async () => {
      await new Promise((r) => setTimeout(r, 400))
      const h = document.body.scrollHeight
      for (let y = 0; y <= h; y += 500) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)) }
      window.scrollTo(0, 0)
      await new Promise((r) => setTimeout(r, 300))
    })

    const url = ORIGIN + (route.path === '/' ? '/' : route.path)
    // Inject per-route meta into the live DOM before snapshotting.
    await page.evaluate(({ route, url, SITE }) => {
      document.title = route.title
      const set = (sel, attr, val) => {
        let el = document.head.querySelector(sel)
        if (!el) {
          el = document.createElement('meta')
          const m = sel.match(/\[(name|property)="([^"]+)"\]/)
          if (m) el.setAttribute(m[1], m[2])
          document.head.appendChild(el)
        }
        el.setAttribute(attr, val)
      }
      set('meta[name="description"]', 'content', route.description)
      set('meta[property="og:title"]', 'content', route.title)
      set('meta[property="og:description"]', 'content', route.description)
      set('meta[property="og:url"]', 'content', url)
      set('meta[name="twitter:title"]', 'content', route.title)
      set('meta[name="twitter:description"]', 'content', route.description)
      let link = document.head.querySelector('link[rel="canonical"]')
      if (!link) { link = document.createElement('link'); link.setAttribute('rel', 'canonical'); document.head.appendChild(link) }
      link.setAttribute('href', url)
      void SITE
    }, { route, url, SITE })

    const html = '<!doctype html>\n' + await page.evaluate(() => document.documentElement.outerHTML)
    await page.close()

    const outDir = route.path === '/' ? PRERENDERED : join(PRERENDERED, route.path)
    await mkdir(outDir, { recursive: true })
    await writeFile(join(outDir, 'index.html'), html, 'utf8')
    console.log('prerendered', route.path, `(${(html.length / 1024).toFixed(0)} kB)`)
  }

  // sitemap.xml -> public/
  const today = new Date().toISOString().slice(0, 10)
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
    .map((r) => `  <url><loc>${esc(ORIGIN + (r.path === '/' ? '/' : r.path))}</loc><lastmod>${today}</lastmod></url>`)
    .join('\n')}\n</urlset>\n`
  await writeFile(join(PUBLIC, 'sitemap.xml'), sitemap, 'utf8')

  // robots.txt -> public/
  await writeFile(join(PUBLIC, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${ORIGIN}/sitemap.xml\n`, 'utf8')

  await browser.close()
  server.close()
  console.log('\n✓ Pre-render complete —', routes.length, 'routes + sitemap + robots')
}

run().catch((e) => { console.error(e); process.exit(1) })
