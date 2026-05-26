import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import heroImage from '../../assets/images/about/about-hero.jpg'
import { easeOutExpo } from '../../utils/motion'
import './aboutHero.css'

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

const AboutHero = () => {
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
    <section className="about-hero" ref={heroRef}>
      <motion.div
        className="about-hero__media"
        style={prefersReducedMotion ? undefined : { y: backgroundY }}
      >
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="about-hero__background-shell"
          initial={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 1.8, ease: easeOutExpo }}
        >
          <div
            className="about-hero__background"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
        </motion.div>
      </motion.div>

      <div aria-hidden="true" className="about-hero__overlay" />
      <div aria-hidden="true" className="about-hero__noise" />

      <motion.div
        animate="visible"
        className="about-hero__content"
        initial="hidden"
        style={prefersReducedMotion ? undefined : { y: contentY }}
        variants={heroVariants}
      >
        <motion.p className="about-hero__eyebrow" variants={eyebrowVariants}>
          CRAFTING TIMELESS LIVING
        </motion.p>

        <motion.h1 className="about-hero__title" variants={headingVariants}>
          We Create Spaces That
          <br />
          Feel Extraordinary.
        </motion.h1>

        <motion.p className="about-hero__description" variants={copyVariants}>
          At YARA ESTATES, we believe architecture should inspire emotion, elevate living,
          and create timeless experiences designed for generations.
        </motion.p>

        <motion.div className="about-hero__actions" variants={actionVariants}>
          <Link
            className="about-hero__button about-hero__button--primary"
            to="/collections"
          >
            EXPLORE OUR PROJECTS <span aria-hidden="true">↗</span>
          </Link>

          <Link
            className="about-hero__button about-hero__button--secondary"
            to="/contact"
          >
            PRIVATE CONSULTATION <span aria-hidden="true">↗</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AboutHero
