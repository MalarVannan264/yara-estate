import { useLayoutEffect, useRef, useState } from 'react'
import { animate, motion, useMotionValue } from 'framer-motion'
import { easeOutExpo } from '../../../utils/motion'
import './collectionsGallery.css'

const SLIDE_GAP = 20

const galleryTabs = [
  { id: 'exterior', label: 'EXTERIOR' },
  { id: 'interiors', label: 'INTERIORS' },
  { id: 'terrace', label: 'TERRACE' },
  { id: 'plans', label: 'PLANS' },
]

const galleryImages = {
  exterior: [
    {
      id: 'ext-1',
      alt: 'Poolside breakfast scene above still water',
      src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'ext-2',
      alt: 'Private residence framed by warm natural materials',
      src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'ext-3',
      alt: 'Minimal courtyard with long facade and layered daylight',
      src: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'ext-4',
      alt: 'Luxury villa exterior with landscape view',
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'ext-5',
      alt: 'Open pavilion home set against a tropical garden',
      src: 'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'ext-6',
      alt: 'Modern concrete home with expansive glazing',
      src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80',
    },
  ],
  interiors: [
    {
      id: 'int-1',
      alt: 'Warm editorial workspace with timber desk',
      src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'int-2',
      alt: 'Soft living room with sculptural table',
      src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'int-3',
      alt: 'White bedroom with calm natural light',
      src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=850&q=80',
    },
    {
      id: 'int-4',
      alt: 'Under stair workspace with clean lines',
      src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=850&q=80',
    },
    {
      id: 'int-5',
      alt: 'Contemporary bedroom with light walls and soft textures',
      src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=820&q=80',
    },
    {
      id: 'int-6',
      alt: 'Textured minimal interior detail',
      src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80',
    },
  ],
  terrace: [
    {
      id: 'terr-1',
      alt: 'Terrace lounge beside water at golden hour',
      src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=920&q=80',
    },
    {
      id: 'terr-2',
      alt: 'Outdoor dining under a shaded roof deck',
      src: 'https://images.unsplash.com/photo-1600566753052-3f5a8d4b84d7?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'terr-3',
      alt: 'Open terrace seating with coastal view',
      src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'terr-4',
      alt: 'Covered outdoor retreat with long horizon',
      src: 'https://images.unsplash.com/photo-1600047509782-20d39509f26d?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'terr-5',
      alt: 'Sunset rooftop pool experience',
      src: 'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'terr-6',
      alt: 'Terrace deck with soft resort lighting',
      src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80',
    },
  ],
  plans: [
    {
      id: 'plan-1',
      alt: 'Architectural floor plan draft on a light desk',
      src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'plan-2',
      alt: 'Design sketches and model pieces arranged on a board',
      src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'plan-3',
      alt: 'Blueprint workspace with ruler and clean materials',
      src: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'plan-4',
      alt: 'Architect reviewing a layout with precise instruments',
      src: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'plan-5',
      alt: 'Material studies beside an architectural sketch',
      src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'plan-6',
      alt: 'Printed master plan spread across a studio table',
      src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
    },
  ],
}

const CollectionsGallery = () => {
  const [activeTab, setActiveTab] = useState(galleryTabs[0].id)
  const [currentIdx, setCurrentIdx] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [constraints, setConstraints] = useState({ left: -9999, right: 0 })
  const viewportRef = useRef(null)
  const firstSlideRef = useRef(null)
  const x = useMotionValue(0)

  const images = galleryImages[activeTab]

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

  const handleTabChange = (id) => {
    setActiveTab(id)
    setCurrentIdx(0)
    animate(x, 0, { duration: 0.35, ease: easeOutExpo })
  }

  const goTo = (idx) => {
    const { step, maxDrag } = getStepAndMax()
    const clamped = Math.max(0, Math.min(idx, images.length - 1))
    animate(x, -Math.min(clamped * step, maxDrag), {
      duration: 0.6,
      ease: easeOutExpo,
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
      ease: easeOutExpo,
    })
    setCurrentIdx(clamped)
  }

  return (
    <section className="collections-gallery">
      <div className="collections-gallery__shell">
        <div className="collections-gallery__header">
          <motion.div
            className="collections-gallery__header-main"
            initial={{ opacity: 0, y: 24 }}
            viewport={{ once: true, amount: 0.3 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.82, ease: easeOutExpo }}
          >
            <p className="collections-gallery__eyebrow">GALLERY</p>
            <h2 className="collections-gallery__heading">In the light.</h2>
          </motion.div>

          <motion.div
            className="collections-gallery__tabs"
            initial={{ opacity: 0, y: 18 }}
            viewport={{ once: true, amount: 0.4 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: easeOutExpo }}
            role="tablist"
            aria-label="Collections gallery categories"
          >
            {galleryTabs.map((tab) => (
              <button
                key={tab.id}
                aria-selected={tab.id === activeTab}
                className={`collections-gallery__tab${tab.id === activeTab ? ' is-active' : ''}`}
                onClick={() => handleTabChange(tab.id)}
                role="tab"
                type="button"
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="collections-gallery__carousel">
          <button
            aria-label="Previous images"
            className="collections-gallery__nav collections-gallery__nav--prev"
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

          <div className="collections-gallery__viewport" ref={viewportRef}>
            <motion.div
              className={`collections-gallery__track${dragging ? ' is-dragging' : ''}`}
              drag="x"
              dragConstraints={constraints}
              dragElastic={0.05}
              dragMomentum={false}
              onDragEnd={handleDragEnd}
              onDragStart={() => setDragging(true)}
              style={{ x }}
            >
              {images.map((image, i) => (
                <div
                  className="collections-gallery__slide"
                  key={image.id}
                  ref={i === 0 ? firstSlideRef : undefined}
                >
                  <img
                    alt={image.alt}
                    className="collections-gallery__image"
                    draggable={false}
                    loading="lazy"
                    src={image.src}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          <button
            aria-label="Next images"
            className="collections-gallery__nav collections-gallery__nav--next"
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

        <div className="collections-gallery__footer">
          <div className="collections-gallery__progress">
            <div
              className="collections-gallery__progress-fill"
              style={{ width: `${((currentIdx + 1) / images.length) * 100}%` }}
            />
          </div>
          <span className="collections-gallery__counter">
            {String(currentIdx + 1).padStart(2, '0')}&thinsp;/&thinsp;{String(images.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  )
}

export default CollectionsGallery
