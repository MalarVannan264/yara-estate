import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useCallback, useEffect, useRef } from 'react'
import iconicHeroImage from '../../../assets/images/projects/iconic8/iconic8-hero.jpg'
import './iconicHero.css'

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

const stats = [
  {
    value: '8',
    label: 'RESIDENCES',
  },
  {
    value: '5,400+',
    label: 'SQ.FT. CARPET',
  },
  {
    value: 'G + 2 + T',
    label: 'FLOOR PROGRAM',
  },
]

const IconicHero = () => {
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
    heroRef.current.style.setProperty('--iconic-move-x', moveX)
    heroRef.current.style.setProperty('--iconic-move-y', moveY)
    heroRef.current.style.setProperty('--iconic-mouse-x', mouseX)
    heroRef.current.style.setProperty('--iconic-mouse-y', mouseY)
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
      className="iconic-hero"
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={heroRef}
      style={{
        '--iconic-move-x': '0px',
        '--iconic-move-y': '0px',
        '--iconic-mouse-x': '50%',
        '--iconic-mouse-y': '50%',
      }}
    >
      <motion.div
        animate={{ '--iconic-scale': '1.03' }}
        className="iconic-hero__bg"
        initial={{ '--iconic-scale': '1.085' }}
        style={{ backgroundImage: `url(${iconicHeroImage})` }}
        transition={{ duration: 1.9, ease: [0.22, 1, 0.36, 1] }}
      />
      <div aria-hidden="true" className="iconic-hero__overlay" />
      <div aria-hidden="true" className="iconic-hero__spotlight" />

      <motion.div
        animate="visible"
        className="iconic-hero__content"
        initial="hidden"
        variants={containerVariants}
      >
        <motion.p className="iconic-hero__eyebrow" variants={itemVariants}>
          ONLY EIGHT RESIDENCES — NEELANKARAI
        </motion.p>

        <motion.p className="iconic-hero__label" variants={itemVariants}>
          YARA ESTATES
        </motion.p>

        <motion.h1 className="iconic-hero__heading" variants={itemVariants}>
          ICONIC 8
        </motion.h1>

        <motion.h2 className="iconic-hero__subheading" variants={itemVariants}>
          Private tropical-modern villas
          <br />
          crafted for elevated living.
        </motion.h2>

        <motion.div className="iconic-hero__rule" variants={itemVariants} />

        <motion.p className="iconic-hero__description" variants={itemVariants}>
          An ultra-exclusive collection of eight architecturally crafted
          residences in Neelankarai, designed for families who seek privacy,
          timeless design, and curated luxury.
        </motion.p>

        <motion.div className="iconic-hero__actions" variants={itemVariants}>
          <Link
            className="iconic-hero__button iconic-hero__button--primary"
            to="/latest/iconic-8#residences"
          >
            EXPLORE RESIDENCES
          </Link>
          <Link
            className="iconic-hero__button iconic-hero__button--secondary"
            to="/contact"
          >
            SCHEDULE PRESENTATION
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        animate="visible"
        className="iconic-hero__footer"
        initial="hidden"
        variants={containerVariants}
      >
        <div className="iconic-hero__stats">
          {stats.map((stat) => (
            <motion.div className="iconic-hero__stat" key={stat.label} variants={itemVariants}>
              <p className="iconic-hero__stat-value">{stat.value}</p>
              <p className="iconic-hero__stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div className="iconic-hero__scroll" variants={itemVariants}>
          <span aria-hidden="true" className="iconic-hero__scroll-dot" />
          SCROLL TO EXPLORE ↓
        </motion.div>
      </motion.div>
    </section>
  )
}

export default IconicHero
