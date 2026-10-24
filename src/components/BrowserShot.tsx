type Props = {
  src: string
  alt: string
  /** Address shown in the fake browser bar, e.g. "kestro.dk". */
  url: string
  className?: string
}

/**
 * A real screenshot of a finished site inside a quiet browser frame: three
 * dots and an address pill. Reads as "this is the live site" at a glance.
 */
export default function BrowserShot({ src, alt, url, className = '' }: Props) {
  return (
    <div className={`flex flex-col ${className}`} style={{ background: '#0F0E0C' }}>
      <div
        className="flex items-center gap-3 px-3 flex-shrink-0"
        style={{ height: '26px', borderBottom: '1px solid rgba(232,224,213,0.08)', background: '#171512' }}
        aria-hidden="true"
      >
        <span className="flex gap-1.5">
          <i className="block w-2 h-2 rounded-full" style={{ background: 'rgba(232,224,213,0.18)' }} />
          <i className="block w-2 h-2 rounded-full" style={{ background: 'rgba(232,224,213,0.18)' }} />
          <i className="block w-2 h-2 rounded-full" style={{ background: 'rgba(232,224,213,0.18)' }} />
        </span>
        <span
          className="flex-1 max-w-[260px] mx-auto text-center rounded-full"
          style={{ background: 'rgba(232,224,213,0.06)', color: 'rgba(232,224,213,0.7)', fontSize: '10px', letterSpacing: '0.04em', lineHeight: '16px' }}
        >
          {url}
        </span>
        <span className="w-[42px]" />
      </div>
      <img src={src} alt={alt} loading="lazy" className="w-full flex-1 min-h-0 object-cover object-top" />
    </div>
  )
}
