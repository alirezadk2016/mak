function scrollToContact() {
  const el = document.getElementById('contact')
  if (!el) {
    // Not on the home page — navigate home and jump to contact
    window.location.href = '/#contact'
    return
  }
  const top = el.getBoundingClientRect().top + window.scrollY - 80
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function ContactButton({ label = 'Contact Me' }: { label?: string }) {
  return (
    <a
      href="#contact"
      onClick={(e) => { e.preventDefault(); scrollToContact() }}
      style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
        boxShadow: '0 0 0 1px rgba(215,226,234,0.25), 0 4px 24px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)',
        borderRadius: '9999px',
        border: 'none',
        cursor: 'pointer',
      }}
      className="px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base text-white font-medium uppercase tracking-widest"
    >
      {label}
    </a>
  )
}
