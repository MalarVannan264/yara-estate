import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import wellingtonHeroImage from '../../../assets/images/projects/wellington/wellington-hero.webp'
import { easeOutExpo } from '../../../utils/motion'
import './wellingtonHero.css'

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
  { value: '47', label: 'VILLAS' },
  { value: '2747–5100', label: 'SQ.FT' },
  { value: '4 BHK', label: 'RESIDENCES' },
  { value: 'Premium', label: 'CLUBHOUSE' },
]

const WellingtonHero = () => {
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
    <section className="wellington-hero" ref={heroRef}>
      <motion.div
        className="wellington-hero__media"
        style={prefersReducedMotion ? undefined : { y: backgroundY }}
      >
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="wellington-hero__background-shell"
          initial={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 1.8, ease: easeOutExpo }}
        >
          <div
            className="wellington-hero__background"
            style={{ backgroundImage: `url(${wellingtonHeroImage})` }}
          />
        </motion.div>
      </motion.div>

      <div aria-hidden="true" className="wellington-hero__overlay" />
      <div aria-hidden="true" className="wellington-hero__noise" />

      <motion.div
        animate="visible"
        className="wellington-hero__content"
        initial="hidden"
        style={prefersReducedMotion ? undefined : { y: contentY }}
        variants={heroVariants}
      >
        <motion.p className="wellington-hero__eyebrow" variants={eyebrowVariants}>
          YARA ESTATES PRESENTS
        </motion.p>

        <motion.h1 className="wellington-hero__title" variants={headingVariants}>
          Villas at Wellington
        </motion.h1>

        <motion.p className="wellington-hero__subtitle" variants={copyVariants}>
          A Private Estate Experience Crafted Around Nature, Views &amp; Timeless
          Architecture.
        </motion.p>

        <motion.p className="wellington-hero__description" variants={copyVariants}>
          An exclusive collection of expansive luxury villas designed to embrace open
          living, panoramic landscapes, natural materials, and elevated retreat-inspired
          experiences.
        </motion.p>

        <motion.div className="wellington-hero__actions" variants={actionVariants}>
          <Link
            className="wellington-hero__button wellington-hero__button--primary"
            to="/latest/wellington#villas"
          >
            EXPLORE COLLECTIONS <span aria-hidden="true">↓</span>
          </Link>

          <Link
            className="wellington-hero__button wellington-hero__button--secondary"
            to="/contact"
          >
            PRIVATE CONSULTATION <span aria-hidden="true">↗</span>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        animate="visible"
        className="wellington-hero__footer"
        initial="hidden"
        variants={footerVariants}
      >
        <div className="wellington-hero__stats">
          {stats.map((stat) => (
            <div className="wellington-hero__stat" key={stat.label}>
              <p className="wellington-hero__stat-value">{stat.value}</p>
              <p className="wellington-hero__stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default WellingtonHero
