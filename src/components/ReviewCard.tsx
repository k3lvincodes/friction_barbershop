interface Props {
  stars: number
  quote: string
  name: string
}

export default function ReviewCard({ stars, quote, name }: Props) {
  return (
    <div
      style={{
        minWidth: 320,
        maxWidth: 360,
        padding: 32,
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        flexShrink: 0,
      }}
    >
      <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill={i < stars ? '#C9A84C' : 'rgba(201,168,76,0.15)'}
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <p
        style={{
          fontFamily: 'var(--font-sub)',
          fontSize: 18,
          fontStyle: 'italic',
          color: 'var(--ivory)',
          lineHeight: 1.5,
          marginBottom: 16,
        }}
      >
        &ldquo;{quote}&rdquo;
      </p>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 13,
          fontWeight: 500,
          color: 'var(--gold)',
          letterSpacing: 1,
        }}
      >
        — {name}
      </p>
    </div>
  )
}
