export default function LiveProjectButton({ href, label = 'Live Project' }: { href?: string; label?: string }) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-4 py-2 sm:px-8 sm:py-3 md:px-10 md:py-3.5 text-xs sm:text-sm md:text-base hover:bg-[#D7E2EA]/10 transition-colors whitespace-nowrap"
      >
        {label}
      </a>
    )
  }
  return (
    <button className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-4 py-2 sm:px-8 sm:py-3 md:px-10 md:py-3.5 text-xs sm:text-sm md:text-base hover:bg-[#D7E2EA]/10 transition-colors whitespace-nowrap">
      {label}
    </button>
  )
}
