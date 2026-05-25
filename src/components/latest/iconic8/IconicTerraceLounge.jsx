import { motion } from 'framer-motion'
import { useCallback, useEffect, useRef } from 'react'
import terraceLoungeImage from '../../../assets/images/projects/iconic8/iconic8-terrace-lounge.jpg'
import './iconicTerraceLounge.css'

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

const IconicTerraceLounge = () => {
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
    sectionRef.current.style.setProperty('--iconic-terrace-move-x', moveX)
    sectionRef.current.style.setProperty('--iconic-terrace-move-y', moveY)
    sectionRef.current.style.setProperty('--iconic-terrace-mouse-x', mouseX)
    sectionRef.current.style.setProperty('--iconic-terrace-mouse-y', mouseY)
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

      const moveX = `${((x - 0.5) * 16).toFixed(2)}px`
      const moveY = `${((y - 0.5) * 12).toFixed(2)}px`
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
      className="iconic-terrace-lounge"
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={sectionRef}
      style={{
        '--iconic-terrace-move-x': '0px',
        '--iconic-terrace-move-y': '0px',
        '--iconic-terrace-mouse-x': '50%',
        '--iconic-terrace-mouse-y': '50%',
      }}
    >
      <motion.div
        animate={{ '--iconic-terrace-scale': '1.04' }}
        className="iconic-terrace-lounge__bg"
        initial={{ '--iconic-terrace-scale': '1.085' }}
        style={{ backgroundImage: `url(${terraceLoungeImage})` }}
        transition={{ duration: 1.9, ease: [0.22, 1, 0.36, 1] }}
      />
      <div aria-hidden="true" className="iconic-terrace-lounge__overlay" />
      <div aria-hidden="true" className="iconic-terrace-lounge__spotlight" />

      <motion.div
        animate="visible"
        className="iconic-terrace-lounge__shell"
        initial="hidden"
        variants={containerVariants}
      >
        <motion.p className="iconic-terrace-lounge__counter" variants={itemVariants}>
          05 / 06
        </motion.p>

        <div className="iconic-terrace-lounge__content-wrap">
          <motion.div
            className="iconic-terrace-lounge__content"
            variants={containerVariants}
          >
            <motion.p
              className="iconic-terrace-lounge__eyebrow"
              variants={itemVariants}
            >
              THE TERRACE LOUNGE
            </motion.p>

            <motion.h2
              className="iconic-terrace-lounge__heading"
              variants={itemVariants}
            >
              Your private
              <br />
              sky lounge.
            </motion.h2>

            <motion.p
              className="iconic-terrace-lounge__description"
              variants={itemVariants}
            >
              Designed for intimate evenings, quiet conversations, and elevated
              living above the city.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default IconicTerraceLounge
