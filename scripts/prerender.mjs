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
    title: 'Alireza Makvandi – IT-supporter i Aarhus',
    description: 'Uddannet IT-supporter fra Aarhus Tech med erfaring fra YouSee og Fourcom. Baseret i Aarhus, klar til nyt job.',
  },
  {
    path: '/about',
    title: 'Om mig – Alireza Makvandi | IT-supporter',
    description: 'Lær Alireza Makvandi at kende: uddannet IT-supporter fra Aarhus Tech, 10 år i Danmark, erfaring fra YouSee og Fourcom. Kompetencer, rejse, sprog og interesser.',
  },
  {
    path: '/recommendations',
    title: 'Anbefalinger – Alireza Makvandi | IT-supporter',
    description: 'Officielle anbefalinger fra virksomheder, jeg har arbejdet for, bl.a. YouSee. Ord fra ledere, der har set min indsats på tæt hold.',
  },
  {
    path: '/projects/elite-vask',
    title: 'Elite Vask – Alireza Makvandi | IT-supporter',
    description: 'Webløsning for Elite Vask, moderne hjemmeside med online booking. Design og udvikling af Alireza Makvandi.',
  },
  {
    path: '/projects/svendeproeve',
    title: 'Svendeprøve – Alireza Makvandi | IT-supporter',
    description: 'Afsluttende svendeprøve på IT-supporteruddannelsen: opsætning af komplet netværksinfrastruktur med servere, brugere og afdelinger.',
  },
  {
    path: '/projects/mak-painting',
    title: 'MAK Painting – Alireza Makvandi | IT-supporter',
    description: 'To-sproget hjemmeside og admin-panel til malervirksomheden MAK Painting i Melbourne: booking, galleri, priser og indhold.',
  },
  {
    path: '/projects/gaming-pc',
    title: 'Gaming PC Build – Alireza Makvandi | IT-supporter',
    description: 'Selvbygget gaming-PC fra bunden, research, kompatibilitet, samling og konfiguration. Et bevis på indgående hardwareforståelse.',
  },
  {
    path: '/experience/yousee',
    title: 'YouSee – Alireza Makvandi | IT-supporter',
    description: 'Erfaring fra YouSee: kundeservice, drift og administration. Officiel anbefaling fra butikschefen.',
  },
  {
    path: '/experience/fourcom',
    title: 'Fourcom – Alireza Makvandi | IT-supporter',
    description: 'IT-support praktik hos Fourcom: opsætning af Windows, hardware, fejlfinding og brugersupport.',
  },
  {
    path: '/experience/folkehuse',
    title: 'Folkehuse Aarhus – Alireza Makvandi | IT-supporter',
    description: 'Frivilligt IT-arbejde i Folkehuse Aarhus, brugersupport, især for ældre borgere.',
  },
  {
    path: '/kolofon',
    title: 'Om dette website – Alireza Makvandi',
    description: 'Hvordan makvandi.dk er bygget: React, TypeScript og Vite, med fokus på SEO, sikkerhed og performance. Mit indhold, mine beslutninger.',
  },
  {
    path: '/viden',
    title: 'IT-ordbog – teknik forklaret enkelt | Alireza Makvandi',
    description: 'DHCP, DNS, Active Directory og flere IT-begreber forklaret enkelt og uden jargon, af Alireza Makvandi, IT-supporter i Aarhus.',
  },
  {
    path: '/viden/dhcp',
    title: 'Hvad er DHCP? – forklaret enkelt | Alireza Makvandi',
    description: 'DHCP er den service, der automatisk giver hver enhed på et netværk en IP-adresse, så den kan kommunikere med andre.',
  },
  {
    path: '/viden/dns',
    title: 'Hvad er DNS? – forklaret enkelt | Alireza Makvandi',
    description: 'DNS oversætter navne, mennesker kan huske (som yousee.dk), til IP-adresser, computere bruger.',
  },
  {
    path: '/viden/active-directory',
    title: 'Hvad er Active Directory? – forklaret enkelt | Alireza Makvandi',
    description: 'Active Directory er Microsofts system til at styre brugere, computere og rettigheder centralt i en virksomhed.',
  },
  {
    path: '/viden/windows-server',
    title: 'Hvad er Windows Server? – forklaret enkelt | Alireza Makvandi',
    description: 'Windows Server er Microsofts styresystem til servere, de maskiner, der leverer services som login, filer, print og netværksstyring til alle virksomhedens ...',
  },
  {
    path: '/viden/gpo',
    title: 'Hvad er GPO? – forklaret enkelt | Alireza Makvandi',
    description: 'GPO\'er er regler, man sætter centralt i Active Directory, som automatisk gælder for brugere og computere.',
  },
  {
    path: '/viden/vlan',
    title: 'Hvad er VLAN? – forklaret enkelt | Alireza Makvandi',
    description: 'Et VLAN opdeler ét fysisk netværk i flere adskilte, logiske netværk.',
  },
  {
    path: '/viden/vpn',
    title: 'Hvad er VPN? – forklaret enkelt | Alireza Makvandi',
    description: 'En VPN skaber en krypteret "tunnel" mellem din enhed og et andet netværk, fx virksomhedens.',
  },
  {
    path: '/viden/firewall',
    title: 'Hvad er Firewall? – forklaret enkelt | Alireza Makvandi',
    description: 'En firewall er netværkets dørmand: Den kigger på al trafik, der vil ind eller ud, og tillader kun det, reglerne siger god for.',
  },
  {
    path: '/viden/backup',
    title: 'Hvad er Backup? – forklaret enkelt | Alireza Makvandi',
    description: 'Backup er en ekstra kopi af data, gemt et andet sted, så intet går tabt, hvis en disk dør, en fil slettes ved en fejl, eller virksomheden rammes af ransom...',
  },
  {
    path: '/viden/virtualisering',
    title: 'Hvad er Virtualisering? – forklaret enkelt | Alireza Makvandi',
    description: 'Virtualisering lader én fysisk server køre mange "virtuelle" maskiner på samme tid.',
  },
  {
    path: '/viden/lan-wlan',
    title: 'Hvad er LAN & WLAN? – forklaret enkelt | Alireza Makvandi',
    description: 'LAN er det kablede netværk i en bygning, computere forbundet via netværkskabler og switches.',
  },
  {
    path: '/viden/pc-hardware',
    title: 'Hvad er PC-hardware? – forklaret enkelt | Alireza Makvandi',
    description: 'PC-hardware er computerens fysiske dele: CPU (hjernen), RAM (korttidshukommelsen), SSD (lageret), bundkort, strømforsyning og grafikkort.',
  },
  {
    path: '/experience/aarhustech',
    title: 'Aarhus Tech – Alireza Makvandi | IT-supporter',
    description: 'Skolepraktik og IT-supporteruddannelsen på Aarhus Tech, netværk, servere, sikkerhed og support.',
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

      // Structured data
      const addLd = (obj) => {
        const s = document.createElement('script')
        s.type = 'application/ld+json'
        s.textContent = JSON.stringify(obj)
        document.head.appendChild(s)
      }

      // BreadcrumbList on every inner page (3 levels for glossary terms)
      if (route.path !== '/') {
        const crumbs = [{ '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.makvandi.dk/' }]
        if (route.path.startsWith('/viden/')) {
          const termName = route.title.replace(/^Hvad er /, '').replace(/\?.*$/, '')
          crumbs.push({ '@type': 'ListItem', position: 2, name: 'IT-ordbog', item: 'https://www.makvandi.dk/viden' })
          crumbs.push({ '@type': 'ListItem', position: 3, name: termName, item: url })
        } else {
          const pageName = route.title.split(/\s+[–|]\s+/)[0]
          crumbs.push({ '@type': 'ListItem', position: 2, name: pageName, item: url })
        }
        addLd({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: crumbs })
      }

      // Glossary articles: TechArticle + FAQPage (built from the rendered Q&A sections)
      if (route.path.startsWith('/viden/')) {
        const termName = route.title.replace(/^Hvad er /, '').replace(/\?.*$/, '')
        addLd({
          '@context': 'https://schema.org',
          '@type': 'TechArticle',
          headline: `Hvad er ${termName}?`,
          description: route.description,
          inLanguage: 'da',
          url,
          author: { '@type': 'Person', name: 'Alireza Makvandi', url: 'https://www.makvandi.dk', jobTitle: 'IT-supporter' },
        })
        const qa = []
        document.querySelectorAll('section').forEach((sec) => {
          const h = sec.querySelector('h2')
          const p = sec.querySelector('p')
          if (h && p && p.textContent.trim().length > 40) {
            const q = h.textContent.trim().replace(/det\??$/i, `${termName}?`).replace(/\?\?$/, '?')
            qa.push({
              '@type': 'Question',
              name: q,
              acceptedAnswer: { '@type': 'Answer', text: p.textContent.trim() },
            })
          }
        })
        if (qa.length >= 2) {
          addLd({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: qa })
        }
      }
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
