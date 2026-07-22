import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import vanamHeroImage from '../../../assets/images/projects/vanam/vanam-hero.webp'
import { easeOutExpo } from '../../../utils/motion'
import './vanamHero.css'

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

const ruleVariants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.7, ease: easeOutExpo },
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

const VanamHero = () => {
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
    <section className="vanam-hero" ref={heroRef}>
      <motion.div
        className="vanam-hero__media"
        style={prefersReducedMotion ? undefined : { y: backgroundY }}
      >
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="vanam-hero__background-shell"
          initial={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 1.8, ease: easeOutExpo }}
        >
          <div
            className="vanam-hero__background"
            style={{ backgroundImage: `url(${vanamHeroImage})` }}
          />
        </motion.div>
      </motion.div>

      <div aria-hidden="true" className="vanam-hero__overlay" />
      <div aria-hidden="true" className="vanam-hero__noise" />

      <motion.div
        animate="visible"
        className="vanam-hero__content"
        initial="hidden"
        style={prefersReducedMotion ? undefined : { y: contentY }}
        variants={heroVariants}
      >
        <motion.p className="vanam-hero__eyebrow" variants={eyebrowVariants}>
          COMING SOON
        </motion.p>

        <motion.h1 className="vanam-hero__title" variants={headingVariants}>
          YARA VANAM
        </motion.h1>

        <motion.div className="vanam-hero__rule" variants={ruleVariants} />

        <motion.h2 className="vanam-hero__subtitle" variants={copyVariants}>
          A Sanctuary Where Nature Meets Timeless Architecture
        </motion.h2>

        <motion.p className="vanam-hero__description" variants={copyVariants}>
          Nestled amidst the serene hills of Yercaud, YARA Vanam is an
          invitation to experience elevated living surrounded by mist,
          greenery and thoughtful design.
        </motion.p>

        <motion.div className="vanam-hero__actions" variants={actionVariants}>
          <Link className="vanam-hero__button" to="/contact">
            REGISTER INTEREST
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        animate="visible"
        className="vanam-hero__footer"
        initial="hidden"
        variants={footerVariants}
      >
        <p className="vanam-hero__location">YERCAUD &middot; 1,623 M ALTITUDE</p>

        <div className="vanam-hero__scroll">
          SCROLL <span aria-hidden="true">↓</span>
        </div>
      </motion.div>
    </section>
  )
}

export default VanamHero
