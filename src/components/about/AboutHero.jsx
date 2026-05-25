import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import heroImage from '../../assets/images/about/about-hero.jpg'
import './aboutHero.css'

const contentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.16,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.88,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const AboutHero = () => {
  const heroRef = useRef(null)
  const frameRef = useRef(0)
  const pointerStateRef = useRef({
    moveX: '0px',
    moveY: '0px',
    mouseX: '50%',
    mouseY: '50%',
  })

  const flushPointerState = () => {
    frameRef.current = 0

    if (!heroRef.current) {
      return
    }

    const { moveX, moveY, mouseX, mouseY } = pointerStateRef.current

    heroRef.current.style.setProperty('--about-move-x', moveX)
    heroRef.current.style.setProperty('--about-move-y', moveY)
    heroRef.current.style.setProperty('--about-mouse-x', mouseX)
    heroRef.current.style.setProperty('--about-mouse-y', mouseY)
  }

  const queuePointerState = (moveX, moveY, mouseX, mouseY) => {
    pointerStateRef.current = { moveX, moveY, mouseX, mouseY }

    if (!frameRef.current) {
      frameRef.current = window.requestAnimationFrame(flushPointerState)
    }
  }

  const handleMouseMove = (event) => {
    if (!heroRef.current) {
      return
    }

    const bounds = heroRef.current.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width
    const y = (event.clientY - bounds.top) / bounds.height

    const moveX = `${((x - 0.5) * 22).toFixed(2)}px`
    const moveY = `${((y - 0.5) * 16).toFixed(2)}px`
    const mouseX = `${(x * 100).toFixed(2)}%`
    const mouseY = `${(y * 100).toFixed(2)}%`

    queuePointerState(moveX, moveY, mouseX, mouseY)
  }

  const handleMouseLeave = () => {
    queuePointerState('0px', '0px', '50%', '50%')
  }

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
      className="about-hero"
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={heroRef}
      style={{
        '--about-move-x': '0px',
        '--about-move-y': '0px',
        '--about-mouse-x': '50%',
        '--about-mouse-y': '50%',
      }}
    >
      <motion.div
        animate={{ '--about-hero-scale': 1.03 }}
        className="about-hero__background"
        initial={{ '--about-hero-scale': 1.095 }}
        style={{ backgroundImage: `url(${heroImage})` }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <div aria-hidden="true" className="about-hero__overlay" />
      <div aria-hidden="true" className="about-hero__spotlight" />

      <motion.div
        animate="visible"
        className="about-hero__content"
        initial="hidden"
        variants={contentVariants}
      >
        <motion.div className="about-hero__eyebrow" variants={itemVariants}>
          <span aria-hidden="true" className="about-hero__eyebrow-line" />
          <p>CRAFTING TIMELESS LIVING</p>
          <span aria-hidden="true" className="about-hero__eyebrow-line" />
        </motion.div>

        <motion.h1 className="about-hero__title" variants={itemVariants}>
          We Create Spaces That
          Feel Extraordinary.
        </motion.h1>

        <motion.p className="about-hero__description" variants={itemVariants}>
          At YARA ESTATES, we believe architecture should inspire emotion, elevate
          living, and create timeless experiences designed for generations.
        </motion.p>

        <motion.div className="about-hero__action-wrap" variants={itemVariants}>
          <Link className="about-hero__button" to="/collections">
            <span>EXPLORE OUR PROJECTS</span>
            <ArrowRight aria-hidden="true" size={18} strokeWidth={2.1} />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="about-hero__footer"
        initial={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.9, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
      >
        <p>SCROLL TO EXPLORE</p>
        <p>CHENNAI, INDIA</p>
      </motion.div>
    </section>
  )
}

export default AboutHero
