import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import iconicHeroImage from '../../../assets/images/projects/iconic8/iconic8-hero.jpg'
import { easeOutExpo } from '../../../utils/motion'
import './iconicHero.css'

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.05,
      ease: easeOutExpo,
      staggerChildren: 0.14,
      delayChildren: 0.18,
    },
  },
}

const eyebrowVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.82, ease: easeOutExpo },
  },
}

const headingVariants = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: easeOutExpo },
  },
}

const copyVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeOutExpo },
  },
}

const actionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.88, delay: 0.12, ease: easeOutExpo },
  },
}

const footerVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.52, ease: easeOutExpo },
  },
}

const stats = [
  { value: '8', label: 'RESIDENCES' },
  { value: '5,400+', label: 'SQ.FT. CARPET' },
  { value: 'G + 2 + T', label: 'FLOOR PROGRAM' },
]

const IconicHero = () => {
  const heroRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, prefersReducedMotion ? 0 : 96],
  )
  const contentY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -52])

  return (
    <section className="iconic-hero" ref={heroRef}>
      <motion.div
        className="iconic-hero__media"
        style={prefersReducedMotion ? undefined : { y: backgroundY }}
      >
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="iconic-hero__background-shell"
          initial={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 1.8, ease: easeOutExpo }}
        >
          <div
            className="iconic-hero__background"
            style={{ backgroundImage: `url(${iconicHeroImage})` }}
          />
        </motion.div>
      </motion.div>

      <div aria-hidden="true" className="iconic-hero__overlay" />
      <div aria-hidden="true" className="iconic-hero__noise" />

      <motion.div
        animate="visible"
        className="iconic-hero__content"
        initial="hidden"
        style={prefersReducedMotion ? undefined : { y: contentY }}
        variants={heroVariants}
      >
        <motion.p className="iconic-hero__eyebrow" variants={eyebrowVariants}>
          ONLY EIGHT RESIDENCES — NEELANKARAI
        </motion.p>

        <motion.h1 className="iconic-hero__title" variants={headingVariants}>
          ICONIC 8
        </motion.h1>

        <motion.p className="iconic-hero__subtitle" variants={copyVariants}>
          Private tropical-modern villas
          <br />
          crafted for elevated living.
        </motion.p>

        <motion.p className="iconic-hero__description" variants={copyVariants}>
          An ultra-exclusive collection of eight architecturally crafted residences in
          Neelankarai, designed for families who seek privacy, timeless design, and curated
          luxury.
        </motion.p>

        <motion.div className="iconic-hero__actions" variants={actionVariants}>
          <Link
            className="iconic-hero__button iconic-hero__button--primary"
            to="/latest/iconic-8#residences"
          >
            EXPLORE RESIDENCES <span aria-hidden="true">↓</span>
          </Link>

          <Link
            className="iconic-hero__button iconic-hero__button--secondary"
            to="/contact"
          >
            SCHEDULE PRESENTATION <span aria-hidden="true">↗</span>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        animate="visible"
        className="iconic-hero__footer"
        initial="hidden"
        variants={footerVariants}
      >
        <div className="iconic-hero__stats">
          {stats.map((stat) => (
            <div className="iconic-hero__stat" key={stat.label}>
              <p className="iconic-hero__stat-value">{stat.value}</p>
              <p className="iconic-hero__stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="iconic-hero__scroll">
          <span aria-hidden="true" className="iconic-hero__scroll-dot" />
          SCROLL TO EXPLORE ↓
        </div>
      </motion.div>
    </section>
  )
}

export default IconicHero
