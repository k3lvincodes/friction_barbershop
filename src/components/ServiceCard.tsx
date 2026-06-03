import { useEffect, useRef, useState } from 'react'

interface Props {
  img: string
  name: string
  description: string
  index: number
}

export default function ServiceCard({ img, name, description, index }: Props) {
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

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        minHeight: 320,
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderTop: '2px solid var(--border)',
        cursor: 'default',
        overflow: 'hidden',
        transition: 'all 0.4s ease',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${index * 100}ms`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
      className="service-card"
    >
      <img
        src={img}
        alt={name}
        loading="lazy"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          padding: '32px 24px',
          background: 'linear-gradient(to top, rgba(13,13,13,0.95) 0%, rgba(13,13,13,0.4) 60%, transparent 100%)',
        }}
      >
        <h3
          style={{
            fontFamily: 'var(--font-sub)',
            fontSize: 24,
            fontWeight: 600,
            color: 'var(--ivory)',
            marginBottom: 8,
          }}
        >
          {name}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 14,
            lineHeight: 1.7,
            color: 'var(--text-muted)',
          }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}
