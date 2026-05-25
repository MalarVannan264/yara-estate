import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import collectionsHeroBg from '../../../assets/images/collections/collections-hero-bg.jpg'
import { easeOutExpo } from '../../../utils/motion'
import './collectionsHero.css'

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
    transition: {
      duration: 0.82,
      ease: easeOutExpo,
    },
  },
}

const headingVariants = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: easeOutExpo,
    },
  },
}

const copyVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: easeOutExpo,
    },
  },
}

const actionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.88,
      delay: 0.12,
      ease: easeOutExpo,
    },
  },
}

const CollectionsHero = () => {
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

  const handleExploreCollections = () => {
    const collectionsIntro =
      document.getElementById('collections-tabs-intro') ||
      document.getElementById('premium-residential')

    if (!collectionsIntro) {
      return
    }

    collectionsIntro.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    })
  }

  return (
    <section className="collections-hero" ref={heroRef}>
      <motion.div
        className="collections-hero__media"
        style={prefersReducedMotion ? undefined : { y: backgroundY }}
      >
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="collections-hero__background-shell"
          initial={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 1.8, ease: easeOutExpo }}
        >
          <div
            className="collections-hero__background"
            style={{
              backgroundImage: `url(${collectionsHeroBg})`,
            }}
          />
        </motion.div>
      </motion.div>

      <div aria-hidden="true" className="collections-hero__overlay" />
      <div aria-hidden="true" className="collections-hero__noise" />

      <motion.div
        animate="visible"
        className="collections-hero__content"
        initial="hidden"
        style={prefersReducedMotion ? undefined : { y: contentY }}
        variants={heroVariants}
      >
        <motion.p className="collections-hero__eyebrow" variants={eyebrowVariants}>
          CURATED DEVELOPMENTS — VOLUME I
        </motion.p>

        <motion.h1 className="collections-hero__title" variants={headingVariants}>
          Spaces Crafted for
          <br />
          Elevated Living.
        </motion.h1>

        <motion.p className="collections-hero__description" variants={copyVariants}>
          Discover a curated collection of residences, retreats, and commercial
          environments designed around timeless architecture, refined materials, and
          immersive living experiences.
        </motion.p>

        <motion.div className="collections-hero__actions" variants={actionVariants}>
          <button
            className="collections-hero__button collections-hero__button--primary"
            onClick={handleExploreCollections}
            type="button"
          >
            EXPLORE COLLECTIONS <span aria-hidden="true">↓</span>
          </button>

          <Link
            className="collections-hero__button collections-hero__button--secondary"
            to="/contact"
          >
            PRIVATE CONSULTATION <span aria-hidden="true">↗</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default CollectionsHero
