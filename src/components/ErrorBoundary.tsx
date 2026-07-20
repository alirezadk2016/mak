import { Component, ReactNode } from 'react'

type Props = { children: ReactNode }
type State = { hasError: boolean }

/** Catches runtime errors so users never see a blank screen. */
export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh', background: '#0A0908', color: '#E8DDD0',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', gap: '18px', padding: '24px', textAlign: 'center',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          <span style={{ fontSize: '44px', fontWeight: 900, fontFamily: 'Kanit, sans-serif' }}>Ups.</span>
          <p style={{ opacity: 0.55, maxWidth: '380px', lineHeight: 1.7, fontWeight: 300 }}>
            Noget gik galt. Prøv at genindlæse siden.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              color: '#E8DDD0', padding: '12px 26px', borderRadius: '100px',
              border: '1px solid rgba(201,169,110,0.5)', background: 'rgba(201,169,110,0.1)',
              fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer',
            }}
          >
            Genindlæs
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
