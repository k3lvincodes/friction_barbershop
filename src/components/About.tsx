export default function About() {
  return (
    <section style={{ position: 'relative', padding: '120px 0' }}>
      <div className="container" style={{ position: 'relative' }}>
        <div className="section-number">01</div>

        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            gap: 0,
            alignItems: 'start',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Left: Text */}
          <div style={{ paddingRight: 48 }}>
            <blockquote
              style={{
                fontFamily: 'var(--font-sub)',
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontStyle: 'italic',
                fontWeight: 600,
                color: 'var(--ivory)',
                lineHeight: 1.3,
                marginBottom: 32,
              }}
            >
              &ldquo;Not just a haircut.<br />A transformation.&rdquo;
            </blockquote>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 15,
                lineHeight: 1.8,
                color: 'var(--text-muted)',
                maxWidth: 480,
              }}
            >
              Born in the heart of Warri, Friction Barbershop is where heritage meets
              edge. Every pair of scissors tells a story of craft. Every fade is a
              statement. We don&rsquo;t just cut hair — we build confidence, one client at a
              time. Rooted in community, driven by precision.
            </p>
          </div>

          {/* Divider */}
          <div
            className="about-divider"
            style={{
              width: 1,
              height: 200,
              background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)',
              margin: '0 48px',
            }}
          />

          {/* Right: Stat Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <StatCard number="4.2" suffix="★" label="Google Rating" />
            <StatCard number="Mon–Sat" suffix="" label="8AM – 9PM" />
            <StatCard number="Sun" suffix="" label="1PM – 9PM" />
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .about-grid {
              grid-template-columns: 1fr !important;
            }
            .about-divider {
              display: none !important;
            }
            .about-grid > div:first-child {
              padding-right: 0 !important;
            }
          }
        `}</style>
      </div>
    </section>
  )
}

function StatCard({ number, suffix, label }: { number: string; suffix: string; label: string }) {
  return (
    <div
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        padding: '20px 28px',
        display: 'flex',
        alignItems: 'center',
        gap: 20,
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-number)',
          fontSize: 36,
          fontWeight: 700,
          color: 'var(--gold)',
          lineHeight: 1,
        }}
      >
        {number}{suffix}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 12,
          letterSpacing: 2,
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </span>
    </div>
  )
}
