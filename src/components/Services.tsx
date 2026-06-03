import ServiceCard from './ServiceCard'

const services = [
  { img: '/images/classic_cut.jpg', name: 'Classic Cut', description: 'Precision scissor work, tailored to your shape.' },
  { img: '/images/fade_taper.jpg', name: 'Fade & Taper', description: 'Smooth gradients, sharp lines.' },
  { img: '/images/beard_sculpt.webp', name: 'Beard Sculpt', description: 'Shape, trim, and define.' },
  { img: '/images/hot_towel_shave.jpg', name: 'Hot Towel Shave', description: 'Traditional ritual, premium finish.' },
  { img: '/images/hair_design.jpg', name: 'Hair Design', description: 'Patterns, logos, freestyle art.' },
  { img: '/images/kids_cut.jpg', name: 'Kids Cut', description: 'Gentle hands, great results.' },
]

export default function Services() {
  return (
    <section id="services" style={{ position: 'relative', padding: '120px 0' }}>
      <div className="container" style={{ position: 'relative' }}>
        <div className="section-number">02</div>

        <div style={{ position: 'relative', zIndex: 1, marginBottom: 64 }}>
          <p
            style={{
              fontFamily: 'var(--font-accent)',
              fontSize: 14,
              letterSpacing: 6,
              color: 'var(--gold)',
              marginBottom: 8,
            }}
          >
            OUR CRAFT
          </p>
          <p
            style={{
              fontFamily: 'var(--font-sub)',
              fontSize: 'clamp(20px, 3vw, 28px)',
              fontStyle: 'italic',
              color: 'var(--text-muted)',
            }}
          >
            From the classic to the contemporary
          </p>
        </div>

        <div
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
            position: 'relative',
            zIndex: 1,
          }}
        >
          {services.map((service, i) => (
            <ServiceCard key={service.name} {...service} index={i} />
          ))}
        </div>

        <style>{`
          @media (max-width: 1024px) {
            .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 768px) {
            .services-grid { grid-template-columns: 1fr !important; }
          }
          .service-card:hover {
            transform: translateY(-4px) !important;
            border-left: 2px solid var(--gold);
            border-top-color: var(--gold) !important;
            box-shadow: 0 8px 32px rgba(201, 168, 76, 0.1);
          }
        `}</style>
      </div>
    </section>
  )
}
