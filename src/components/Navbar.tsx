import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Hours', href: '#hours' },
    { label: 'Find Us', href: '#location' },
  ]

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.3s ease',
          background: scrolled
            ? 'rgba(13, 13, 13, 0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        }}
      >
        <a href="#hero" style={{ textDecoration: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <img
            src="/images/Friction_Logo.png"
            alt="Friction Barbershop"
            className="nav-logo"
          />
          <div style={{
            fontFamily: 'var(--font-body)',
            fontSize: 9,
            letterSpacing: 6,
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
          }}>
            Barbershop
          </div>
        </a>

        <div className="nav-desktop">
          <div className="nav-links">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  letterSpacing: 1.5,
                  textTransform: 'uppercase',
                  color: 'var(--ivory)',
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ivory)')}
              >
                {link.label}
              </a>
            ))}
          </div>
           <a href="https://wa.me/2347010636025" className="btn-gold nav-cta">
            Book Now
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger-btn"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile drawer overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999,
          background: 'rgba(0,0,0,0.7)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            width: '280px',
            height: '100vh',
            background: 'var(--bg-secondary)',
            padding: '100px 32px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
            borderLeft: '1px solid var(--border)',
            transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.3s ease',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, marginBottom: 32 }}>
            <img
              src="/images/Friction_Logo.png"
              alt="Friction Barbershop"
              style={{ height: 40, width: 'auto' }}
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
          </div>
          {[...links, { label: 'Book Now', href: 'https://wa.me/2347010636025' }].map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-accent)',
                fontSize: 28,
                letterSpacing: 3,
                color: 'var(--ivory)',
                textDecoration: 'none',
                padding: '8px 0',
                borderBottom: '1px solid var(--border)',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ivory)')}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .nav-logo { height: 52px; width: auto; }
        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }
        .nav-cta {
          padding: 10px 24px;
          font-size: 13px;
        }
        .hamburger-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--gold);
          font-size: 28px;
          padding: 4px 8px;
          z-index: 1001;
        }
        @media (max-width: 1024px) {
          .nav-desktop { display: none; }
          .hamburger-btn { display: block; }
          .nav-logo { height: 36px; }
        }
      `}</style>
    </>
  )
}
