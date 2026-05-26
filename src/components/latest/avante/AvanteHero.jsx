import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import avanteHeroImage from '../../../assets/images/projects/avante/avante-hero.jpg'
import { easeOutExpo } from '../../../utils/motion'
import './avanteHero.css'

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
    transition: { duration: 0.9, delay: 0.5, ease: easeOutExpo },
  },
}

const AvanteHero = () => {
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
    <section className="avante-hero" ref={heroRef}>
      <motion.div
        className="avante-hero__media"
        style={prefersReducedMotion ? undefined : { y: backgroundY }}
      >
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="avante-hero__background-shell"
          initial={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 1.8, ease: easeOutExpo }}
        >
          <div
            className="avante-hero__background"
            style={{ backgroundImage: `url(${avanteHeroImage})` }}
          />
        </motion.div>
      </motion.div>

      <div aria-hidden="true" className="avante-hero__overlay" />
      <div aria-hidden="true" className="avante-hero__noise" />

      <motion.div
        animate="visible"
        className="avante-hero__content"
        initial="hidden"
        style={prefersReducedMotion ? undefined : { y: contentY }}
        variants={heroVariants}
      >
        <motion.p className="avante-hero__eyebrow" variants={eyebrowVariants}>
          BOUTIQUE RESIDENCES — ADYAR
        </motion.p>

        <motion.h1 className="avante-hero__title" variants={headingVariants}>
          The Height
          <br />
          of Living.
        </motion.h1>

        <motion.p className="avante-hero__description" variants={copyVariants}>
          Boutique residences crafted for modern families in the tree-lined heart of Adyar
          — where heritage meets the rare luxury of restraint.
        </motion.p>

        <motion.div className="avante-hero__actions" variants={actionVariants}>
          <Link
            className="avante-hero__button avante-hero__button--primary"
            to="/latest/avante#residences"
          >
            EXPLORE RESIDENCES <span aria-hidden="true">↓</span>
          </Link>

          <Link
            className="avante-hero__button avante-hero__button--secondary"
            to="/contact"
          >
            SCHEDULE PRIVATE VISIT <span aria-hidden="true">↗</span>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        animate="visible"
        className="avante-hero__footer"
        initial="hidden"
        variants={footerVariants}
      >
        <div className="avante-hero__tag">
          <span aria-hidden="true" className="avante-hero__tag-dot" />
          INVITATIONS NOW OPEN — LIMITED RESIDENCES
        </div>

        <div className="avante-hero__scroll">
          <span aria-hidden="true" className="avante-hero__scroll-line" />
          SCROLL
        </div>
      </motion.div>
    </section>
  )
}

export default AvanteHero
