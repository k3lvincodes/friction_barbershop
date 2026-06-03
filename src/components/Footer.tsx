export default function Footer() {
  return (
    <section style={{ padding: 0 }}>
      {/* CTA Banner */}
      <div
        style={{
          padding: '100px 24px',
          textAlign: 'center',
          background: 'radial-gradient(ellipse at center, #1a1410 0%, #0D0D0D 70%)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 6vw, 64px)',
            fontWeight: 700,
            fontStyle: 'italic',
            color: 'var(--ivory)',
            marginBottom: 32,
          }}
        >
          Ready for your next look?
        </h2>
        <a
          href="tel:+2347010636025"
          className="btn-gold"
          style={{ fontSize: 14, padding: '16px 48px' }}
        >
          Book Now
        </a>
      </div>

      {/* Footer */}
      <footer
        style={{
          padding: '48px 24px 24px',
          background: 'var(--bg-primary)',
        }}
      >
        <div
          className="footer-grid"
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: 32,
            borderBottom: '1px solid var(--border)',
            flexWrap: 'wrap',
            gap: 24,
          }}
        >
          {/* Logo */}
          <a href="#hero" className="footer-logo">
            <img
              src="/images/Friction_Logo.png"
              alt="Friction Barbershop"
              style={{ height: 44, width: 'auto' }}
            />
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: 8,
              letterSpacing: 6,
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
            }}>
              Barbershop
            </div>
          </a>

          {/* Nav links */}
          <div className="footer-links">
            {['Services', 'Hours', 'Find Us', 'Reviews'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s/, '')}`}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 12,
                  letterSpacing: 1.5,
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="footer-social" style={{ display: 'flex', gap: 16 }}>
            <a
              href="https://instagram.com/frictionbarbershop"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--border)',
                color: 'var(--ivory)',
                transition: 'all 0.3s',
                fontSize: 18,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--gold)'
                e.currentTarget.style.color = 'var(--gold)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.color = 'var(--ivory)'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://wa.me/2347010636025"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--border)',
                color: 'var(--ivory)',
                transition: 'all 0.3s',
                fontSize: 18,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--gold)'
                e.currentTarget.style.color = 'var(--gold)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.color = 'var(--ivory)'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>

        <div
          className="footer-bar"
          style={{
            maxWidth: 1200,
            margin: '16px auto 0',
            textAlign: 'center',
            fontFamily: 'var(--font-body)',
            fontSize: 12,
            color: 'var(--text-muted)',
            letterSpacing: 1,
          }}
        >
          &copy; 2025 Friction Barbershop &middot; Warri, Nigeria
        </div>
      </footer>

      <style>{`
        .footer-logo {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          text-decoration: none;
        }
        .footer-links {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }
        @media (max-width: 768px) {
          .footer-grid {
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            text-align: center !important;
            gap: 28px !important;
          }
          .footer-links {
            justify-content: center;
            gap: 16px 24px;
          }
          .footer-social {
            gap: 12px !important;
          }
        }
      `}</style>
    </section>
  )
}
