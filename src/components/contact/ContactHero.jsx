import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import heroBg from '../../assets/images/contact/hero.jpg'
import { easeOutExpo } from '../../utils/motion'
import './contactHero.css'

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

const ContactHero = () => {
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
    <section className="contact-hero" ref={heroRef}>
      <motion.div
        className="contact-hero__media"
        style={prefersReducedMotion ? undefined : { y: backgroundY }}
      >
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="contact-hero__background-shell"
          initial={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 1.8, ease: easeOutExpo }}
        >
          <div
            className="contact-hero__background"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
        </motion.div>
      </motion.div>

      <div aria-hidden="true" className="contact-hero__overlay" />
      <div aria-hidden="true" className="contact-hero__noise" />

      <motion.div
        animate="visible"
        className="contact-hero__content"
        initial="hidden"
        style={prefersReducedMotion ? undefined : { y: contentY }}
        variants={heroVariants}
      >
        <motion.p className="contact-hero__eyebrow" variants={eyebrowVariants}>
          PRIVATE CONSULTATION — CHENNAI
        </motion.p>

        <motion.h1 className="contact-hero__title" variants={headingVariants}>
          Let&apos;s Create Your Next
          <br />
          Living Experience.
        </motion.h1>

        <motion.p className="contact-hero__description" variants={copyVariants}>
          Whether you&apos;re exploring a refined residence, boutique villa, or investment
          opportunity, our team is here to guide you through every detail with care and
          discretion.
        </motion.p>

        <motion.div className="contact-hero__actions" variants={actionVariants}>
          <Link
            className="contact-hero__button contact-hero__button--primary"
            to="/collections"
          >
            EXPLORE RESIDENCES <span aria-hidden="true">↗</span>
          </Link>

          <a
            className="contact-hero__button contact-hero__button--secondary"
            href="#contact-studio"
          >
            SCHEDULE PRESENTATION <span aria-hidden="true">↓</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ContactHero
