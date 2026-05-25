import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useCallback, useEffect, useRef } from 'react'
import heroImage from '../../assets/images/homepage/hero.jpeg'
import './heroSection.css'

const contentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.14,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.86,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const HeroSection = () => {
  const heroRef = useRef(null)
  const frameRef = useRef(0)
  const pointerStateRef = useRef({
    moveX: '0px',
    moveY: '0px',
    mouseX: '50%',
    mouseY: '50%',
  })

  const flushPointerState = useCallback(() => {
    frameRef.current = 0

    if (!heroRef.current) {
      return
    }

    const { moveX, moveY, mouseX, mouseY } = pointerStateRef.current

    heroRef.current.style.setProperty('--move-x', moveX)
    heroRef.current.style.setProperty('--move-y', moveY)
    heroRef.current.style.setProperty('--mouse-x', mouseX)
    heroRef.current.style.setProperty('--mouse-y', mouseY)
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
      if (!heroRef.current) {
        return
      }

      const bounds = heroRef.current.getBoundingClientRect()
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
      className="yara-hero"
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={heroRef}
      style={{
        '--move-x': '0px',
        '--move-y': '0px',
        '--mouse-x': '50%',
        '--mouse-y': '50%',
      }}
    >
      <motion.div
        animate={{ '--hero-scale': '1.03' }}
        className="hero-bg"
        initial={{ '--hero-scale': '1.085' }}
        style={{ backgroundImage: `url(${heroImage})` }}
        transition={{ duration: 1.9, ease: [0.22, 1, 0.36, 1] }}
      />
      <div aria-hidden="true" className="hero-overlay" />
      <div aria-hidden="true" className="hero-spotlight" />

      <motion.div
        animate="visible"
        className="hero-content"
        initial="hidden"
        variants={contentVariants}
      >
        <motion.p className="hero-eyebrow" variants={itemVariants}>
          YARA ESTATES · CHENNAI
        </motion.p>

        <motion.h1 variants={itemVariants}>
          Curated Spaces for <br />
          Elevated Living.
        </motion.h1>

        <motion.p className="hero-description" variants={itemVariants}>
          A boutique collection of architecturally crafted villas, premium plots,
          and future-ready investments across Chennai&apos;s most desirable destinations.
        </motion.p>

        <motion.div className="hero-actions" variants={itemVariants}>
          <Link className="hero-button btn-primary" to="/collections">
            Explore Projects <span aria-hidden="true">→</span>
          </Link>
          <Link className="hero-button btn-secondary" to="/contact">
            Schedule Consultation
          </Link>
        </motion.div>

        <motion.div className="hero-scroll" variants={itemVariants}>
          <span aria-hidden="true" />
          Scroll to Experience
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
