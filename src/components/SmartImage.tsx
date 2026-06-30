import { useState } from 'react'

type Props = {
  src: string
  alt?: string
  label?: string
  accent?: string
  className?: string
  imgClassName?: string
  style?: React.CSSProperties
}

/**
 * Image with a loading shimmer and a branded fallback.
 * Used for external/live-screenshot images (e.g. thum.io) that may be
 * slow or fail — so a card never renders blank or broken.
 */
export default function SmartImage({
  src, alt = '', label, accent = '#C9A96E', className = '', imgClassName = '', style,
}: Props) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading')

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: '#121110', ...style }}>
      {/* Shimmer while loading */}
      {status === 'loading' && (
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(100deg, #141210 30%, #1e1b17 50%, #141210 70%)',
            backgroundSize: '200% 100%',
            animation: 'smartShimmer 1.4s ease-in-out infinite',
          }}
        />
      )}

      {/* Branded fallback on error */}
      {status === 'error' && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3"
          style={{ background: `linear-gradient(150deg, ${accent}1F 0%, #121110 60%)` }}
        >
          {label && (
            <span style={{ color: '#E8DDD0', opacity: 0.85, fontSize: '15px', fontWeight: 700, letterSpacing: '0.04em' }}>
              {label}
            </span>
          )}
          <span className="w-8 h-px" style={{ background: accent, opacity: 0.6 }} />
        </div>
      )}

      {status !== 'error' && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          className={imgClassName}
          style={{ opacity: status === 'loaded' ? 1 : 0, transition: 'opacity 0.5s ease' }}
        />
      )}
    </div>
  )
}
