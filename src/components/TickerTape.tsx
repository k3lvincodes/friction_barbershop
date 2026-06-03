export default function TickerTape() {
  const items = [
    'PRECISION CUTS', 'FRESH FADES', 'BEARD GROOMING',
    "WARRI'S FINEST", 'EST. IN WARRI', 'PREMIUM SERVICE',
  ]

  const content = (
    <span style={{ display: 'flex', gap: 48, alignItems: 'center', whiteSpace: 'nowrap' }}>
      {items.map((item, i) => (
        <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 48 }}>
          <span style={{
            fontFamily: 'var(--font-accent)',
            fontSize: 14,
            letterSpacing: 4,
            color: 'var(--gold)',
          }}>
            {item}
          </span>
          <span style={{
            width: 6,
            height: 6,
            background: 'var(--gold)',
            borderRadius: '50%',
            opacity: 0.5,
          }} />
        </span>
      ))}
    </span>
  )

  return (
    <div style={{
      width: '100%',
      overflow: 'hidden',
      padding: '12px 0',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      background: 'var(--bg-secondary)',
    }}>
      <div className="ticker-track" style={{ display: 'flex' }}>
        {content}
        {content}
      </div>
      <style>{`
        .ticker-track {
          animation: scroll 40s linear infinite;
          will-change: transform;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
