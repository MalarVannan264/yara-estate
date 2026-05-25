import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import './testimonials.css'

const testimonials = [
  {
    quote:
      'YARA doesn’t just develop spaces. They create experiences that feel timeless.',
    name: 'Ananya Iyer',
    role: 'RESIDENT · ICONIC 8 · VILLA 03',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80',
  },
  {
    quote:
      'Every detail feels considered — from the architecture to the way light moves through the home.',
    name: 'Raghav Menon',
    role: 'OWNER · AVANTE · RESIDENCE 02',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=240&q=80',
  },
  {
    quote:
      'The experience felt private, calm, and deeply premium from the very first conversation.',
    name: 'Meera Krishnan',
    role: 'RESIDENT · PREMIUM COLLECTION',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80',
  },
  {
    quote:
      'YARA gave us more than a property. They gave us a place that feels made for generations.',
    name: 'Arjun Rao',
    role: 'INVESTOR · CHENNAI',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=80',
  },
]

const quoteVariants = {
  initial: { opacity: 0, y: 28 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
  exit: {
    opacity: 0,
    y: -22,
    transition: {
      duration: 0.46,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

const itemVariants = {
  initial: { opacity: 0, y: 20, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const formatIndex = (index) => String(index + 1).padStart(2, '0')

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [isPaused])

  const activeTestimonial = testimonials[activeIndex]

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  return (
    <section className="yara-testimonials">
      <div className="testimonials-shell">
        <div
          className="testimonials-stage"
          onBlurCapture={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <p className="testimonials-eyebrow">IN THE WORDS OF OUR RESIDENTS</p>

          <div className="testimonials-slider">
            <AnimatePresence mode="wait">
              <motion.article
                animate="animate"
                className="testimonials-slide"
                exit="exit"
                initial="initial"
                key={activeIndex}
                variants={quoteVariants}
              >
                <motion.blockquote className="testimonials-quote" variants={itemVariants}>
                  “{activeTestimonial.quote}”
                </motion.blockquote>

                <motion.div className="testimonials-person" variants={itemVariants}>
                  <motion.img
                    alt={activeTestimonial.name}
                    className="testimonials-avatar"
                    src={activeTestimonial.image}
                    transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                    variants={itemVariants}
                  />
                  <h3 className="testimonials-name">{activeTestimonial.name}</h3>
                  <p className="testimonials-role">{activeTestimonial.role}</p>
                </motion.div>
              </motion.article>
            </AnimatePresence>
          </div>

          <div className="testimonials-controls">
            <button
              aria-label="Previous testimonial"
              className="testimonials-arrow testimonials-arrow-left"
              onClick={showPrevious}
              type="button"
            >
              <ArrowLeft size={19} strokeWidth={1.9} />
            </button>

            <div className="testimonials-dots" role="tablist" aria-label="Testimonials">
              {testimonials.map((testimonial, index) => (
                <button
                  aria-label={`Show testimonial ${index + 1}`}
                  aria-selected={activeIndex === index}
                  className={`testimonials-dot ${activeIndex === index ? 'is-active' : ''}`}
                  key={testimonial.name}
                  onClick={() => setActiveIndex(index)}
                  role="tab"
                  type="button"
                />
              ))}
            </div>

            <p className="testimonials-counter">
              {formatIndex(activeIndex)} / {formatIndex(testimonials.length - 1)}
            </p>

            <button
              aria-label="Next testimonial"
              className="testimonials-arrow testimonials-arrow-right"
              onClick={showNext}
              type="button"
            >
              <ArrowRight size={19} strokeWidth={1.9} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
