import ReviewCard from './ReviewCard'

const reviews = [
  { stars: 5, quote: 'Best fade in Warri, period. Oga no gree carry last.', name: 'Chidi Okonkwo' },
  { stars: 5, quote: 'The hot towel shave is something else. Made me feel like a don.', name: 'Emeka Okafor' },
  { stars: 4, quote: 'Sharp cuts, clean shop. My barber for life.', name: 'Tunde Balogun' },
  { stars: 5, quote: 'From Lagos to Warri — this place na different level.', name: 'Kunle Adeyemi' },
  { stars: 4, quote: 'My son loved his first cut here. Gentle and professional.', name: 'Ngozi Obi' },
]

export default function Reviews() {
  return (
    <section id="reviews" style={{ position: 'relative', padding: '120px 0' }}>
      <div className="container" style={{ position: 'relative' }}>
        <div className="section-number">04</div>

        <p
          style={{
            fontFamily: 'var(--font-accent)',
            fontSize: 14,
            letterSpacing: 6,
            color: 'var(--gold)',
            marginBottom: 48,
            position: 'relative',
            zIndex: 1,
          }}
        >
          WHAT THEY SAY
        </p>

        <div
          className="reviews-scroll"
          style={{
            display: 'flex',
            gap: 24,
            overflowX: 'auto',
            paddingBottom: 24,
            position: 'relative',
            zIndex: 1,
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {reviews.map((review) => (
            <div key={review.name} style={{ scrollSnapAlign: 'start' }}>
              <ReviewCard {...review} />
            </div>
          ))}
        </div>

        <style>{`
          .reviews-scroll::-webkit-scrollbar {
            height: 4px;
          }
          .reviews-scroll::-webkit-scrollbar-track {
            background: var(--bg-primary);
          }
          .reviews-scroll::-webkit-scrollbar-thumb {
            background: var(--gold);
            border-radius: 2px;
          }
        `}</style>
      </div>
    </section>
  )
}
