import { motion, useReducedMotion } from 'framer-motion'
import { useCallback, useEffect, useRef } from 'react'
import futureBg from '../../assets/images/common/future-bg.jpg'
import { easeOutExpo } from '../../utils/motion'
import './lookingAhead.css'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.86,
      ease: easeOutExpo,
    },
  },
}

const pillars = [
  'THOUGHTFUL LUXURY',
  'ARCHITECTURAL INNOVATION',
  'DESIGNED TO INSPIRE',
]

const LookingAhead = () => {
  const sectionRef = useRef(null)
  const frameRef = useRef(0)
  const prefersReducedMotion = useReducedMotion()
  const pointerStateRef = useRef({
    moveX: '0px',
    moveY: '0px',
    glowX: '50%',
    glowY: '50%',
  })

  const flushPointerState = useCallback(() => {
    frameRef.current = 0

    if (!sectionRef.current) {
      return
    }

    const { moveX, moveY, glowX, glowY } = pointerStateRef.current

    sectionRef.current.style.setProperty('--look-move-x', moveX)
    sectionRef.current.style.setProperty('--look-move-y', moveY)
    sectionRef.current.style.setProperty('--look-glow-x', glowX)
    sectionRef.current.style.setProperty('--look-glow-y', glowY)
  }, [])

  const queuePointerState = useCallback(
    (moveX, moveY, glowX, glowY) => {
      pointerStateRef.current = { moveX, moveY, glowX, glowY }

      if (!frameRef.current) {
        frameRef.current = window.requestAnimationFrame(flushPointerState)
      }
    },
    [flushPointerState],
  )

  const handleMouseMove = useCallback(
    (event) => {
      if (!sectionRef.current || prefersReducedMotion) {
        return
      }

      const bounds = sectionRef.current.getBoundingClientRect()
      const x = (event.clientX - bounds.left) / bounds.width
      const y = (event.clientY - bounds.top) / bounds.height

      queuePointerState(
        `${((x - 0.5) * 16).toFixed(2)}px`,
        `${((y - 0.5) * 12).toFixed(2)}px`,
        `${(x * 100).toFixed(2)}%`,
        `${(y * 100).toFixed(2)}%`,
      )
    },
    [prefersReducedMotion, queuePointerState],
  )

  const handleMouseLeave = useCallback(() => {
    if (prefersReducedMotion) {
      return
    }

    queuePointerState('0px', '0px', '50%', '50%')
  }, [prefersReducedMotion, queuePointerState])

  useEffect(
    () => () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current)
      }
    },
    [],
  )

  return (
    <section
      className="looking-ahead"
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={sectionRef}
      style={{
        '--look-move-x': '0px',
        '--look-move-y': '0px',
        '--look-glow-x': '50%',
        '--look-glow-y': '50%',
      }}
    >
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        className="looking-ahead__background-shell"
        initial={{ opacity: 0, scale: 1.06 }}
        transition={{ duration: 1.4, ease: easeOutExpo }}
      >
        <div
          className="looking-ahead__background"
          style={{
            backgroundImage: `url(${futureBg})`,
          }}
        />
      </motion.div>

      <div aria-hidden="true" className="looking-ahead__overlay" />
      <div aria-hidden="true" className="looking-ahead__glow" />

      <motion.div
        animate="visible"
        className="looking-ahead__content"
        initial="hidden"
        viewport={{ once: true, amount: 0.35 }}
        whileInView="visible"
        variants={containerVariants}
      >
        <motion.p className="looking-ahead__eyebrow" variants={itemVariants}>
          06 — LOOKING AHEAD
        </motion.p>

        <motion.h2 className="looking-ahead__heading" variants={itemVariants}>
          Designing The Future
          <br />
          Of Elevated Living.
        </motion.h2>

        <motion.p className="looking-ahead__description" variants={itemVariants}>
          As we continue to evolve, YARA ESTATES remains committed to creating
          timeless developments that combine architecture, lifestyle, and emotional
          living experiences into one refined vision.
        </motion.p>

        <motion.div className="looking-ahead__pillars" variants={itemVariants}>
          {pillars.map((pillar) => (
            <span key={pillar} className="looking-ahead__pillar">
              {pillar}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default LookingAhead
