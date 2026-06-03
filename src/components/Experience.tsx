export default function Experience() {
  return (
    <section
      style={{
        position: 'relative',
        padding: '100px 0',
        background: 'var(--bg-secondary)',
        clipPath: 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)',
        margin: '40px 0',
      }}
    >
      <div className="container" style={{ textAlign: 'center' }}>
        <blockquote
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontStyle: 'italic',
            fontWeight: 700,
            color: 'var(--ivory)',
            lineHeight: 1.2,
            marginBottom: 16,
          }}
        >
          &ldquo;The chair doesn&rsquo;t lie.&rdquo;
        </blockquote>
        <p
          style={{
            fontFamily: 'var(--font-sub)',
            fontSize: 'clamp(16px, 2vw, 22px)',
            fontStyle: 'italic',
            color: 'var(--text-muted)',
            marginBottom: 48,
          }}
        >
          Every client walks out sharper than they walked in.
        </p>

        <div
          className="feature-pills"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 24,
            flexWrap: 'wrap',
          }}
        >
          {['Expert Barbers', 'Premium Tools', 'Hygienic Space'].map((pill) => (
            <div
              key={pill}
              style={{
                padding: '12px 32px',
                border: '1px solid var(--border)',
                fontFamily: 'var(--font-accent)',
                fontSize: 16,
                letterSpacing: 3,
                color: 'var(--gold)',
              }}
            >
              {pill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
