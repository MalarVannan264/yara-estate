import { useLayoutEffect, useRef, useState } from 'react'
import { animate, motion, useMotionValue } from 'framer-motion'
import './iconicGallery.css'

const SLIDE_GAP = 20
const tabs = ['EXTERIOR', 'INTERIORS', 'TERRACE', 'PLANS']

const gallerySets = {
  EXTERIOR: [
    {
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      alt: 'Tropical modern villa exterior',
    },
    {
      image:
        'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1200&q=80',
      alt: 'Courtyard exterior detail',
    },
    {
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80&sat=-20',
      alt: 'Minimal architectural facade',
    },
    {
      image:
        'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
      alt: 'Soft exterior lounge perspective',
    },
    {
      image:
        'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80',
      alt: 'Warm evening elevation',
    },
    {
      image:
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
      alt: 'Pool terrace exterior',
    },
  ],
  INTERIORS: [
    {
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      alt: 'Soft bedroom interior',
    },
    {
      image:
        'https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=1200&q=80',
      alt: 'Minimal studio vignette',
    },
    {
      image:
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      alt: 'Premium residence suite',
    },
    {
      image:
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
      alt: 'Warm dining and wood details',
    },
    {
      image:
        'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80&sat=-8',
      alt: 'Living room with soft light',
    },
    {
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80&exp=8',
      alt: 'Layered lounge seating',
    },
  ],
  TERRACE: [
    {
      image:
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80&exp=6',
      alt: 'Terrace pool setting',
    },
    {
      image:
        'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80&sat=5',
      alt: 'Open air evening lounge',
    },
    {
      image:
        'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80',
      alt: 'Outdoor architectural detail',
    },
    {
      image:
        'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80&sat=10',
      alt: 'Twilight terrace composition',
    },
    {
      image:
        'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1200&q=80&exp=10',
      alt: 'Green skyline terrace view',
    },
    {
      image:
        'https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=1200&q=80&sat=-5',
      alt: 'Quiet roof pavilion detail',
    },
  ],
  PLANS: [
    {
      image:
        'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80',
      alt: 'Blueprint and model composition',
    },
    {
      image:
        'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
      alt: 'Architectural plan table',
    },
    {
      image:
        'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
      alt: 'Warm model material board',
    },
    {
      image:
        'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
      alt: 'Interior planning sketch',
    },
    {
      image:
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
      alt: 'Studio workspace planning scene',
    },
    {
      image:
        'https://images.unsplash.com/photo-1529429617124-aee711a5ac1c?auto=format&fit=crop&w=1200&q=80',
      alt: 'Architectural model close-up',
    },
  ],
}

const IconicGallery = () => {
  const [activeTab, setActiveTab] = useState('EXTERIOR')
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
    <section className="iconic-gallery">
      <div className="iconic-gallery__inner">
        <motion.div
          className="iconic-gallery__header"
          initial={{ opacity: 0, y: 28 }}
          viewport={{ amount: 0.25, once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="iconic-gallery__headline">
            <p className="iconic-gallery__eyebrow">GALLERY</p>
            <h2 className="iconic-gallery__heading">In the light.</h2>
          </div>

          <div
            aria-label="Iconic 8 gallery categories"
            className="iconic-gallery__tabs"
            role="tablist"
          >
            {tabs.map((tab) => (
              <button
                aria-selected={activeTab === tab}
                className={`iconic-gallery__tab${activeTab === tab ? ' is-active' : ''}`}
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

        <div className="iconic-gallery__carousel">
          <button
            aria-label="Previous images"
            className="iconic-gallery__nav iconic-gallery__nav--prev"
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

          <div className="iconic-gallery__viewport" ref={viewportRef}>
            <motion.div
              className={`iconic-gallery__track${dragging ? ' is-dragging' : ''}`}
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
                  className="iconic-gallery__slide"
                  key={`${activeTab}-${i}`}
                  ref={i === 0 ? firstSlideRef : undefined}
                >
                  <img
                    alt={item.alt}
                    className="iconic-gallery__image"
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
            className="iconic-gallery__nav iconic-gallery__nav--next"
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

        <div className="iconic-gallery__footer">
          <div className="iconic-gallery__progress">
            <div
              className="iconic-gallery__progress-fill"
              style={{ width: `${((currentIdx + 1) / images.length) * 100}%` }}
            />
          </div>
          <span className="iconic-gallery__counter">
            {String(currentIdx + 1).padStart(2, '0')}&thinsp;/&thinsp;{String(images.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  )
}

export default IconicGallery
