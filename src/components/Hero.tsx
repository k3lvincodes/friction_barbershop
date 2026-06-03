import { useEffect, useRef } from 'react'
import TickerTape from './TickerTape'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const children = el.querySelectorAll('.hero-animate')
    children.forEach((child, i) => {
      const html = child as HTMLElement
      html.style.opacity = '0'
      html.style.transform = 'translateY(40px)'
      setTimeout(() => {
        html.style.transition = 'all 0.8s ease'
        html.style.opacity = '1'
        html.style.transform = 'translateY(0)'
      }, 300 + i * 200)
    })
  }, [])

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at center, #1a1410 0%, #0D0D0D 70%)',
      }}
    >
      {/* Hero background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/hero_img.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(26,20,16,0.85) 0%, rgba(13,13,13,0.92) 70%)',
          zIndex: 1,
        }}
      />

      {/* Grain overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '256px 256px',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      <div
        ref={ref}
        style={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          padding: '0 24px',
          maxWidth: 900,
        }}
      >
        <p
          className="hero-animate"
          style={{
            fontFamily: 'var(--font-accent)',
            fontSize: 14,
            letterSpacing: 6,
            color: 'var(--gold)',
            marginBottom: 24,
            textTransform: 'uppercase',
          }}
        >
          Premium Grooming
        </p>

        <h1
          className="hero-animate"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontStyle: 'italic',
            fontSize: 'clamp(48px, 10vw, 90px)',
            lineHeight: 1.1,
            color: 'var(--ivory)',
            marginBottom: 32,
          }}
        >
          Where Every Cut<br />
          Tells A <span style={{ color: 'var(--gold)' }}>Story.</span>
        </h1>

        <p
          className="hero-animate"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(14px, 2vw, 18px)',
            color: 'var(--text-muted)',
            letterSpacing: 4,
            marginBottom: 48,
            textTransform: 'uppercase',
          }}
        >
          Premium grooming experience in the heart of Warri.
        </p>

        <div
          className="hero-animate"
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a href="https://wa.me/2347010636025" className="btn-gold">Book Appointment</a>
          <a href="#services" className="btn-outline">Our Services</a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 4,
        }}
      >
        <TickerTape />
      </div>
    </section>
  )
}
