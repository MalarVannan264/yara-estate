import { useLayoutEffect, useRef, useState } from 'react'
import { animate, motion, useMotionValue } from 'framer-motion'
import gallery1 from '../../../assets/images/projects/avante/gallery1.jpg'
import gallery2 from '../../../assets/images/projects/avante/gallery2.jpg'
import gallery3 from '../../../assets/images/projects/avante/gallery3.jpg'
import './avanteGallery.css'

const SLIDE_GAP = 20

const images = [
  { image: gallery1, alt: 'Avante gallery image 1' },
  { image: gallery2, alt: 'Avante gallery image 2' },
  { image: gallery3, alt: 'Avante gallery image 3' },
]

const AvanteGallery = () => {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [constraints, setConstraints] = useState({ left: -9999, right: 0 })
  const viewportRef = useRef(null)
  const firstSlideRef = useRef(null)
  const x = useMotionValue(0)

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
  }, [])

  const getStepAndMax = () => {
    if (!firstSlideRef.current || !viewportRef.current) return { step: 420, maxDrag: 0 }
    const step = firstSlideRef.current.offsetWidth + SLIDE_GAP
    const totalW = images.length * step - SLIDE_GAP
    const maxDrag = Math.max(0, totalW - viewportRef.current.offsetWidth)
    return { step, maxDrag }
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

          <div className="avante-gallery__nav-group">
            <button
              aria-label="Previous images"
              className="avante-gallery__nav"
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
            <button
              aria-label="Next images"
              className="avante-gallery__nav"
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
        </motion.div>

        <div className="avante-gallery__carousel">
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
                  key={i}
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
