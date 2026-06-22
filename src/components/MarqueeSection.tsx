import { useEffect, useRef, useState } from 'react'

const row1 = [
  'Windows Server', 'Active Directory', 'DNS & DHCP', 'GPO',
  'VMware', 'Linux Server', 'IT-sikkerhed', 'Backup & Recovery',
  'Netværk I · II · III', 'Cloudteknologi', 'Serverautomatisering',
]

const row2 = [
  'Hardware Support', 'Fejlfinding', 'Brugersupport', 'Helpdesk',
  'React', 'TypeScript', 'Tailwind CSS', 'Web Design',
  'Windows 10/11', 'VPN', 'LAN · WLAN', 'IT-service Management',
]

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current
      if (!el) return
      const sectionTop = el.getBoundingClientRect().top + window.scrollY
      const raw = (window.scrollY - sectionTop + window.innerHeight) * 0.15
      setOffset(raw)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const tripled = (arr: string[]) => [...arr, ...arr, ...arr]

  const Tag = ({ text }: { text: string }) => (
    <span
      className="flex-shrink-0 px-5 py-2.5 rounded-full border border-[#D7E2EA]/25 text-[#D7E2EA]/60 uppercase tracking-widest whitespace-nowrap"
      style={{ fontSize: 'clamp(0.7rem, 1.2vw, 0.95rem)' }}
    >
      {text}
    </span>
  )

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
      style={{ background: '#0C0C0C' }}
    >
      {/* Row 1 — moves right */}
      <div
        className="flex gap-3 mb-4"
        style={{ transform: `translateX(${offset - 100}px)`, willChange: 'transform' }}
      >
        {tripled(row1).map((text, i) => (
          <Tag key={i} text={text} />
        ))}
      </div>

      {/* Row 2 — moves left */}
      <div
        className="flex gap-3"
        style={{ transform: `translateX(${-(offset - 100)}px)`, willChange: 'transform' }}
      >
        {tripled(row2).map((text, i) => (
          <Tag key={i} text={text} />
        ))}
      </div>
    </section>
  )
}
