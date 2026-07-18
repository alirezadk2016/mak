type Props = {
  name: string
  sub?: string
  accent: string
  className?: string
  /** Smaller lockup for narrow covers (e.g. mobile list cards). */
  compact?: boolean
}

/**
 * Deliberate, deterministic card cover — an editorial brand lockup instead
 * of a flaky external screenshot. Renders instantly, works offline, and
 * matches the site's old-money aesthetic.
 */
export default function BrandCover({ name, sub, accent, className = '', compact = false }: Props) {
  const initial = name.charAt(0).toUpperCase()

  return (
    <div
      className={`relative overflow-hidden flex items-center justify-center ${className}`}
      style={{
        background: `
          radial-gradient(ellipse 90% 70% at 75% 15%, ${accent}24 0%, transparent 55%),
          radial-gradient(ellipse 70% 60% at 20% 90%, ${accent}10 0%, transparent 50%),
          linear-gradient(160deg, #16130F 0%, #0D0B09 100%)
        `,
      }}
    >
      {/* Fine dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(232,221,208,0.055) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />

      {/* Ghost monogram */}
      <span
        aria-hidden="true"
        className="absolute font-black leading-none select-none pointer-events-none"
        style={{
          color: accent,
          opacity: 0.07,
          fontSize: compact ? '130px' : '260px',
          fontFamily: 'Kanit, sans-serif',
          right: compact ? '-16px' : '-30px',
          bottom: compact ? '-36px' : '-70px',
        }}
      >
        {initial}
      </span>

      {/* Lockup */}
      <div className={`relative flex flex-col items-center ${compact ? 'gap-2 px-3' : 'gap-3 px-6'}`}>
        <div
          className={`rounded-full flex items-center justify-center ${compact ? 'w-10 h-10' : 'w-14 h-14'}`}
          style={{ border: `1px solid ${accent}66`, background: `${accent}14` }}
        >
          <span style={{ color: accent, fontSize: compact ? '16px' : '22px', fontWeight: 600, fontFamily: 'Kanit, sans-serif' }}>
            {initial}
          </span>
        </div>
        <span
          className="text-center"
          style={{ color: '#E8DDD0', opacity: 0.92, fontSize: compact ? '11px' : '15px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}
        >
          {name}
        </span>
        {sub && !compact && (
          <span
            className="text-center"
            style={{ color: '#E8DDD0', opacity: 0.35, fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase' }}
          >
            {sub}
          </span>
        )}
        <span className={compact ? 'w-7 h-px' : 'w-10 h-px mt-1'} style={{ background: `linear-gradient(to right, transparent, ${accent}AA, transparent)` }} />
      </div>
    </div>
  )
}
