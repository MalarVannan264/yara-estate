import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import heroImage from '../../assets/images/homepage/hero.jpeg'
import { easeOutExpo } from '../../utils/motion'
import './heroSection.css'

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

const HeroSection = () => {
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
    <section className="yara-hero" ref={heroRef}>
      <motion.div
        className="hero-media"
        style={prefersReducedMotion ? undefined : { y: backgroundY }}
      >
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="hero-background-shell"
          initial={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 1.8, ease: easeOutExpo }}
        >
          <div
            className="hero-background"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
        </motion.div>
      </motion.div>

      <div aria-hidden="true" className="hero-overlay" />
      <div aria-hidden="true" className="hero-noise" />

      <motion.div
        animate="visible"
        className="hero-content"
        initial="hidden"
        style={prefersReducedMotion ? undefined : { y: contentY }}
        variants={heroVariants}
      >
        <motion.p className="hero-eyebrow" variants={eyebrowVariants}>
          YARA ESTATES · CHENNAI
        </motion.p>

        <motion.h1 variants={headingVariants}>
          Curated Spaces for
          <br />
          Elevated Living.
        </motion.h1>

        <motion.p className="hero-description" variants={copyVariants}>
          A boutique collection of architecturally crafted villas, premium plots, and
          future-ready investments across Chennai&apos;s most desirable destinations.
        </motion.p>

        <motion.div className="hero-actions" variants={actionVariants}>
          <Link className="hero-button hero-button--primary" to="/collections">
            EXPLORE PROJECTS <span aria-hidden="true">↓</span>
          </Link>

          <Link className="hero-button hero-button--secondary" to="/contact">
            SCHEDULE CONSULTATION <span aria-hidden="true">↗</span>
          </Link>
        </motion.div>

        <motion.div className="hero-scroll" variants={actionVariants}>
          <span aria-hidden="true" className="hero-scroll__dot" />
          SCROLL TO EXPERIENCE
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
