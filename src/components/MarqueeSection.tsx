import { useEffect, useRef, useState } from 'react'

const row1 = [
  'https://image.thum.io/get/width/840/crop/540/https://www.elite-vask.dk/',
  'https://image.thum.io/get/width/840/crop/540/https://yousee.dk/',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://image.thum.io/get/width/840/crop/540/https://en.fourcom.dk/',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
]

const row2 = [
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://image.thum.io/get/width/840/crop/540/https://folkehuse.aarhus.dk/',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://image.thum.io/get/width/840/crop/540/https://www.aarhustech.dk/',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
]

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(200)

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current
      if (!el) return
      const sectionTop = el.getBoundingClientRect().top + window.scrollY
      const raw = (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(raw)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const tripled = (arr: string[]) => [...arr, ...arr, ...arr]

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
      style={{ background: '#0C0C0C' }}
    >
      <div
        className="flex gap-3 mb-3"
        style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}
      >
        {tripled(row1).map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            loading="lazy"
            className="rounded-2xl object-cover flex-shrink-0"
            style={{ width: 420, height: 270 }}
          />
        ))}
      </div>
      <div
        className="flex gap-3"
        style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform' }}
      >
        {tripled(row2).map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            loading="lazy"
            className="rounded-2xl object-cover flex-shrink-0"
            style={{ width: 420, height: 270 }}
          />
        ))}
      </div>
    </section>
  )
}
