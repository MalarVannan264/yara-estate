import { useLayoutEffect, useRef, useState } from 'react'
import { animate, motion, useMotionValue } from 'framer-motion'
import './avanteGallery.css'

const SLIDE_GAP = 20
const tabs = ['ARCHITECTURE', 'RESIDENCES', 'AMENITIES']

const gallerySets = {
  ARCHITECTURE: [
    {
      image:
        'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80',
      alt: 'Minimal architectural detail',
    },
    {
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      alt: 'Soft bedroom architecture',
    },
    {
      image:
        'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
      alt: 'Bright lounge architecture',
    },
    {
      image:
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
      alt: 'Infinity amenity detail',
    },
    {
      image:
        'https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=1200&q=80',
      alt: 'Minimal studio desk scene',
    },
    {
      image:
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
      alt: 'Warm wood stair detail',
    },
  ],
  RESIDENCES: [
    {
      image:
        'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80',
      alt: 'Wood and fabric lounge',
    },
    {
      image:
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      alt: 'Premium bedroom with natural light',
    },
    {
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      alt: 'Tropical modern residence exterior',
    },
    {
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80&sat=-12',
      alt: 'Calm residence seating corner',
    },
    {
      image:
        'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1200&q=80',
      alt: 'Courtyard-facing residence detail',
    },
    {
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80&exp=6',
      alt: 'Soft interior composition',
    },
  ],
  AMENITIES: [
    {
      image:
        'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80&sat=5',
      alt: 'Minimal hospitality lounge',
    },
    {
      image:
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80&exp=8',
      alt: 'Quiet wellness pool setting',
    },
    {
      image:
        'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80&bri=6',
      alt: 'Architectural amenity detail',
    },
    {
      image:
        'https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=1200&q=80&sat=-10',
      alt: 'Private library lounge',
    },
    {
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80&hue=12',
      alt: 'Spa-inspired bath suite',
    },
    {
      image:
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80&sat=-5',
      alt: 'Curated amenity dining space',
    },
  ],
}

const AvanteGallery = () => {
  const [activeTab, setActiveTab] = useState('ARCHITECTURE')
  const [currentIdx, setCurrentIdx] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [constraints, setConstraints] = useState({ left: -9999, right: 0 })
  const viewportRef = useRef(null)
  const firstSlideRef = useRef(null)
  const x = useMotionValue(0)

  const images = gallerySets[activeTab]

  useLayoutEffect(() => {
    const measure = () => {
      if (!viewportRef.current || !firstSlideRef.current) return
      const step = firstSlideRef.current.offsetWidth + SLIDE_GAP
      const totalW = images.length * step - SLIDE_GAP
      const viewW = viewportRef.current.offsetWidth
      setConstraints({ left: -Math.max(0, totalW - viewW), right: 0 })
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [images.length, activeTab])

  const getStepAndMax = () => {
    if (!firstSlideRef.current || !viewportRef.current) return { step: 420, maxDrag: 0 }
    const step = firstSlideRef.current.offsetWidth + SLIDE_GAP
    const totalW = images.length * step - SLIDE_GAP
    const maxDrag = Math.max(0, totalW - viewportRef.current.offsetWidth)
    return { step, maxDrag }
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setCurrentIdx(0)
    animate(x, 0, { duration: 0.35, ease: [0.22, 1, 0.36, 1] })
  }

  const goTo = (idx) => {
    const { step, maxDrag } = getStepAndMax()
    const clamped = Math.max(0, Math.min(idx, images.length - 1))
    animate(x, -Math.min(clamped * step, maxDrag), {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    })
    setCurrentIdx(clamped)
  }

  const handleDragEnd = () => {
    setDragging(false)
    const { step, maxDrag } = getStepAndMax()
    const nearest = Math.round(-x.get() / step)
    const clamped = Math.max(0, Math.min(nearest, images.length - 1))
    animate(x, -Math.min(clamped * step, maxDrag), {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    })
    setCurrentIdx(clamped)
  }

  return (
    <section className="avante-gallery">
      <div className="avante-gallery__inner">
        <motion.div
          className="avante-gallery__header"
          initial={{ opacity: 0, y: 28 }}
          viewport={{ amount: 0.25, once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="avante-gallery__headline">
            <p className="avante-gallery__eyebrow">GALLERY</p>
            <h2 className="avante-gallery__heading">Look closer.</h2>
          </div>

          <div
            aria-label="Avante gallery categories"
            className="avante-gallery__tabs"
            role="tablist"
          >
            {tabs.map((tab) => (
              <button
                aria-selected={activeTab === tab}
                className={`avante-gallery__tab${activeTab === tab ? ' is-active' : ''}`}
                key={tab}
                onClick={() => handleTabChange(tab)}
                role="tab"
                type="button"
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="avante-gallery__carousel">
          <button
            aria-label="Previous images"
            className="avante-gallery__nav avante-gallery__nav--prev"
            disabled={currentIdx === 0}
            onClick={() => goTo(currentIdx - 1)}
            type="button"
          >
            <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
              <path
                d="M12.5 15.5L7.5 10L12.5 4.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </button>

          <div className="avante-gallery__viewport" ref={viewportRef}>
            <motion.div
              className={`avante-gallery__track${dragging ? ' is-dragging' : ''}`}
              drag="x"
              dragConstraints={constraints}
              dragElastic={0.05}
              dragMomentum={false}
              onDragEnd={handleDragEnd}
              onDragStart={() => setDragging(true)}
              style={{ x }}
            >
              {images.map((item, i) => (
                <div
                  className="avante-gallery__slide"
                  key={`${activeTab}-${i}`}
                  ref={i === 0 ? firstSlideRef : undefined}
                >
                  <img
                    alt={item.alt}
                    className="avante-gallery__image"
                    draggable={false}
                    loading="lazy"
                    src={item.image}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          <button
            aria-label="Next images"
            className="avante-gallery__nav avante-gallery__nav--next"
            disabled={currentIdx >= images.length - 1}
            onClick={() => goTo(currentIdx + 1)}
            type="button"
          >
            <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
              <path
                d="M7.5 4.5L12.5 10L7.5 15.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </button>
        </div>

        <div className="avante-gallery__footer">
          <div className="avante-gallery__progress">
            <div
              className="avante-gallery__progress-fill"
              style={{ width: `${((currentIdx + 1) / images.length) * 100}%` }}
            />
          </div>
          <span className="avante-gallery__counter">
            {String(currentIdx + 1).padStart(2, '0')}&thinsp;/&thinsp;{String(images.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  )
}

export default AvanteGallery
