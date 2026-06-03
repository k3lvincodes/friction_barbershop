import { useEffect, useRef, useState } from 'react'

const gallery = [
  { src: '/images/img_001.jpg', alt: 'Bar area' },
  { src: '/images/img_002.jpg', alt: 'Snooker table' },
  { src: '/images/img_003.jpg', alt: 'Pool table' },
  { src: '/images/img_004.jpg', alt: 'Bar counter' },
  { src: '/images/img_005.jpg', alt: 'Lounge interior' },
]

export default function BarSnooker() {
  const [activeIndex, setActiveIndex] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % gallery.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [visible])

  return (
    <section
      id="the-spot"
      style={{
        position: 'relative',
        padding: '120px 0',
        background: 'var(--bg-secondary)',
      }}
    >
      <div className="container" style={{ position: 'relative' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 48,
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
          }}
          className="bar-snooker-grid"
        >
          {/* Left: Gallery */}
          <div ref={ref} style={{ position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                paddingBottom: '75%',
                overflow: 'hidden',
                border: '1px solid var(--border)',
              }}
            >
              {gallery.map((img, i) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: activeIndex === i ? 1 : 0,
                    transition: 'opacity 0.8s ease',
                  }}
                />
              ))}
            </div>

            {/* Dots */}
            <div
              style={{
                display: 'flex',
                gap: 10,
                justifyContent: 'center',
                marginTop: 20,
              }}
            >
              {gallery.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    border: '1px solid var(--gold)',
                    background: activeIndex === i ? 'var(--gold)' : 'transparent',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-accent)',
                fontSize: 14,
                letterSpacing: 6,
                color: 'var(--gold)',
                marginBottom: 16,
              }}
            >
              THE SPOT
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(32px, 5vw, 52px)',
                fontWeight: 700,
                fontStyle: 'italic',
                color: 'var(--ivory)',
                lineHeight: 1.2,
                marginBottom: 24,
              }}
            >
              Cuts, Cues &amp;<br />
              <span style={{ color: 'var(--gold)' }}>Cold Ones.</span>
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 15,
                lineHeight: 1.8,
                color: 'var(--text-muted)',
                marginBottom: 24,
              }}
            >
              Step off the chair and into the vibe. Friction isn&rsquo;t just a
              barbershop&mdash;it&rsquo;s a full experience. Pull up to the bar for a
              drink, rack &rsquo;em up on the snooker table, and stay a while.
              Good cuts, good company, good energy.
            </p>
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  letterSpacing: 1,
                  color: 'var(--ivory)',
                  textTransform: 'uppercase',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 8h2a2 2 0 012 2v4a2 2 0 01-2 2h-2" />
                  <path d="M7 8H5a2 2 0 00-2 2v4a2 2 0 002 2h2" />
                  <path d="M12 2v20" />
                  <path d="M8 12h8" />
                </svg>
                Full Bar
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  letterSpacing: 1,
                  color: 'var(--ivory)',
                  textTransform: 'uppercase',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="3" fill="var(--gold)" stroke="none" />
                  <path d="M12 2v5" />
                  <path d="M12 17v5" />
                  <path d="M2 12h5" />
                  <path d="M17 12h5" />
                </svg>
                Snooker &amp; Pool
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  letterSpacing: 1,
                  color: 'var(--ivory)',
                  textTransform: 'uppercase',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
                Good Vibes
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .bar-snooker-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  )
}
