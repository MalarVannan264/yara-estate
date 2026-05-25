import { motion } from 'framer-motion'
import { useCallback, useEffect, useRef } from 'react'
import terraceImage from '../../../assets/images/projects/avante/terrace-experience.jpg'
import './avanteTerraceExperience.css'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.84,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const AvanteTerraceExperience = () => {
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
    sectionRef.current.style.setProperty('--terrace-move-x', moveX)
    sectionRef.current.style.setProperty('--terrace-move-y', moveY)
    sectionRef.current.style.setProperty('--terrace-mouse-x', mouseX)
    sectionRef.current.style.setProperty('--terrace-mouse-y', mouseY)
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
      className="avante-terrace-experience"
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={sectionRef}
      style={{
        '--terrace-move-x': '0px',
        '--terrace-move-y': '0px',
        '--terrace-mouse-x': '50%',
        '--terrace-mouse-y': '50%',
      }}
    >
      <motion.div
        animate={{ '--terrace-scale': '1.03' }}
        className="avante-terrace-experience__bg"
        initial={{ '--terrace-scale': '1.085' }}
        style={{ backgroundImage: `url(${terraceImage})` }}
        transition={{ duration: 2.1, ease: [0.22, 1, 0.36, 1] }}
      />
      <div aria-hidden="true" className="avante-terrace-experience__overlay" />
      <div aria-hidden="true" className="avante-terrace-experience__spotlight" />

      <motion.div
        animate="visible"
        className="avante-terrace-experience__content"
        initial="hidden"
        variants={containerVariants}
      >
        <motion.p
          className="avante-terrace-experience__ambient"
          variants={itemVariants}
        >
          AMBIENT SOUND · ON
        </motion.p>

        <div className="avante-terrace-experience__copy">
          <motion.p
            className="avante-terrace-experience__eyebrow"
            variants={itemVariants}
          >
            THE TERRACE AT AVANTE
          </motion.p>

          <motion.h2
            className="avante-terrace-experience__heading"
            variants={itemVariants}
          >
            A place to exhale
            <br />
            above it all.
          </motion.h2>

          <motion.p
            className="avante-terrace-experience__description"
            variants={itemVariants}
          >
            Sunset views over the canopy of Adyar. An infinity edge, the soft
            hush of breeze, and the company of those who matter — and no one
            else.
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}

export default AvanteTerraceExperience
