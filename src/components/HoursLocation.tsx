const hours = [
  { day: 'Monday – Friday', time: '8AM – 9PM' },
  { day: 'Saturday', time: '8AM – 9PM', highlight: true },
  { day: 'Sunday', time: '1PM – 9PM', highlight: true },
]

export default function HoursLocation() {
  return (
    <section id="hours" style={{ position: 'relative', padding: '120px 0' }}>
      <div className="container" style={{ position: 'relative' }}>
        <div className="section-number">03</div>

        <div
          className="hours-location-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 64,
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Hours */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-accent)',
                fontSize: 14,
                letterSpacing: 6,
                color: 'var(--gold)',
                marginBottom: 32,
              }}
            >
              OPENING HOURS
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {hours.map((h) => (
                <div
                  key={h.day}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px 0',
                    borderBottom: '1px solid var(--border)',
                    background: h.highlight ? 'rgba(201, 168, 76, 0.04)' : 'transparent',
                    paddingLeft: h.highlight ? 16 : 0,
                    paddingRight: h.highlight ? 16 : 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 14,
                      fontWeight: h.highlight ? 500 : 400,
                      color: 'var(--ivory)',
                      letterSpacing: 1,
                    }}
                  >
                    {h.day}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 14,
                      fontWeight: h.highlight ? 600 : 400,
                      color: h.highlight ? 'var(--gold)' : 'var(--text-muted)',
                    }}
                  >
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-accent)',
                fontSize: 14,
                letterSpacing: 6,
                color: 'var(--gold)',
                marginBottom: 32,
              }}
            >
              FIND US
            </p>
            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                padding: 32,
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-sub)',
                  fontSize: 20,
                  fontWeight: 600,
                  color: 'var(--ivory)',
                  marginBottom: 16,
                }}
              >
                Ooom Plaza, Airport Road, Edjeba
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  color: 'var(--text-muted)',
                  lineHeight: 1.8,
                  marginBottom: 8,
                }}
              >
                Warri, Delta State, Nigeria
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  color: 'var(--gold)',
                  marginBottom: 24,
                }}
              >
                +234 701 063 6025
              </p>

              {/* Google Maps embed */}
              <div
                style={{
                  width: '100%',
                  height: 220,
                  border: '1px solid var(--border)',
                  marginBottom: 24,
                  overflow: 'hidden',
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.718769675801!2d5.812292274482191!3d5.573521534509167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1041b6ef1d41e105%3A0x2f5c4e5b5f5b5f5b!2sOoom%20Plaza!5e0!3m2!1sen!2sng!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) saturate(0.5)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Friction Barbershop location"
                />
              </div>

              <a
                href="https://maps.google.com/?q=Ooom+Plaza+Airport+Road+Edjeba+Warri+Delta+State+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{ width: '100%', fontSize: 13, padding: '12px 24px' }}
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .hours-location-grid {
              grid-template-columns: 1fr !important;
              gap: 48px !important;
            }
          }
        `}</style>
      </div>
    </section>
  )
}
