import { motion } from 'framer-motion'
import { useCallback, useEffect, useRef } from 'react'
import lifestyleImage from '../../assets/images/homepage/lifestyle.jpg'
import './lifestyleEditorial.css'

const contentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.82,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const words = ['Family', 'Hospitality', 'Outdoor Living', 'Tropical Calm']

const LifestyleEditorial = () => {
  const sectionRef = useRef(null)
  const frameRef = useRef(0)
  const pointerStateRef = useRef({
    moveX: '0px',
    moveY: '0px',
    mouseX: '50%',
    mouseY: '50%',
  })

  const flushPointerState = useCallback(() => {
    frameRef.current = 0

    if (!sectionRef.current) {
      return
    }

    const { moveX, moveY, mouseX, mouseY } = pointerStateRef.current
    sectionRef.current.style.setProperty('--lifestyle-move-x', moveX)
    sectionRef.current.style.setProperty('--lifestyle-move-y', moveY)
    sectionRef.current.style.setProperty('--lifestyle-mouse-x', mouseX)
    sectionRef.current.style.setProperty('--lifestyle-mouse-y', mouseY)
  }, [])

  const queuePointerState = useCallback(
    (moveX, moveY, mouseX, mouseY) => {
      pointerStateRef.current = { moveX, moveY, mouseX, mouseY }

      if (!frameRef.current) {
        frameRef.current = window.requestAnimationFrame(flushPointerState)
      }
    },
    [flushPointerState],
  )

  const handleMouseMove = useCallback(
    (event) => {
      if (!sectionRef.current) {
        return
      }

      const bounds = sectionRef.current.getBoundingClientRect()
      const x = (event.clientX - bounds.left) / bounds.width
      const y = (event.clientY - bounds.top) / bounds.height

      const moveX = `${((x - 0.5) * 18).toFixed(2)}px`
      const moveY = `${((y - 0.5) * 14).toFixed(2)}px`
      const mouseX = `${(x * 100).toFixed(2)}%`
      const mouseY = `${(y * 100).toFixed(2)}%`

      queuePointerState(moveX, moveY, mouseX, mouseY)
    },
    [queuePointerState],
  )

  const handleMouseLeave = useCallback(() => {
    queuePointerState('0px', '0px', '50%', '50%')
  }, [queuePointerState])

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
      className="yara-lifestyle-editorial"
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={sectionRef}
      style={{
        '--lifestyle-move-x': '0px',
        '--lifestyle-move-y': '0px',
        '--lifestyle-mouse-x': '50%',
        '--lifestyle-mouse-y': '50%',
      }}
    >
      <motion.div
        className="lifestyle-editorial-bg"
        initial={{ '--lifestyle-scale': '1.08' }}
        style={{ backgroundImage: `url(${lifestyleImage})` }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        whileInView={{ '--lifestyle-scale': '1.03' }}
      />
      <div aria-hidden="true" className="lifestyle-editorial-overlay" />
      <div aria-hidden="true" className="lifestyle-editorial-spotlight" />

      <div className="lifestyle-editorial-shell">
        <motion.div
          className="lifestyle-editorial-grid"
          initial="hidden"
          viewport={{ once: true, amount: 0.24 }}
          whileInView="visible"
          variants={contentVariants}
        >
          <div className="lifestyle-editorial-copy">
            <motion.p className="lifestyle-editorial-eyebrow" variants={itemVariants}>
              A LIFESTYLE, NOT A LISTING
            </motion.p>

            <motion.h2 className="lifestyle-editorial-heading" variants={itemVariants}>
              More Than
              <br />
              a Property.
            </motion.h2>

            <motion.p className="lifestyle-editorial-paragraph" variants={itemVariants}>
              A YARA address is a way of beginning the day differently — slow
              mornings, garden coffee, the rhythm of palm shadows on a stone wall.
              We design for the moments before the day begins.
            </motion.p>

            <motion.p className="lifestyle-editorial-label" variants={itemVariants}>
              FROM THE YARA EDITORIAL
            </motion.p>
          </div>

          <motion.div className="lifestyle-editorial-words" variants={contentVariants}>
            {words.map((word) => (
              <motion.p
                className="lifestyle-editorial-word"
                key={word}
                variants={itemVariants}
              >
                {word}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default LifestyleEditorial
