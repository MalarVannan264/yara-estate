import { motion, useReducedMotion, useScroll, useTransform, useMotionValue } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import infinityHeroImage from '../../../assets/images/projects/infinity/inifinity-hero.webp'
import { easeOutExpo } from '../../../utils/motion'
import './infinityHero.css'

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.05,
      ease: easeOutExpo,
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
}

const eyebrowVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOutExpo } },
}

const headingVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: easeOutExpo } },
}

const copyVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: easeOutExpo } },
}

const actionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.88, delay: 0.12, ease: easeOutExpo } },
}

const footerVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.5, ease: easeOutExpo } },
}

const InfinityHero = () => {
  const heroRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 86])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -42])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const el = heroRef.current
    if (!el || prefersReducedMotion) return

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) / rect.width
      const dy = (e.clientY - cy) / rect.height
      // subtle maximum movement
      mouseX.set(dx * 10)
      mouseY.set(dy * 8)
    }

    window.addEventListener('pointermove', handleMove)
    return () => window.removeEventListener('pointermove', handleMove)
  }, [mouseX, mouseY, prefersReducedMotion])

  return (
    <section className="infinity-hero" ref={heroRef}>
      <motion.div
        className="infinity-hero__media"
        style={prefersReducedMotion ? undefined : { y: backgroundY }}
      >
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="infinity-hero__background-shell"
          initial={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 1.6, ease: easeOutExpo }}
          style={{ x: mouseX, y: mouseY }}
        >
          <div
            className="infinity-hero__background"
            style={{ backgroundImage: `url(${infinityHeroImage})` }}
          />
        </motion.div>
      </motion.div>

      <div aria-hidden className="infinity-hero__overlay" />
      <div aria-hidden className="infinity-hero__noise" />

      <motion.div
        animate="visible"
        className="infinity-hero__content"
        initial="hidden"
        style={prefersReducedMotion ? undefined : { y: contentY }}
        variants={heroVariants}
      >
        <motion.p className="infinity-hero__eyebrow" variants={eyebrowVariants}>
          YARA ESTATES PRESENTS
        </motion.p>

        <motion.h1 className="infinity-hero__title" variants={headingVariants}>
          <span className="infinity-hero__title-line">YARA </span>
          <span className="infinity-hero__title-dominant">INFINITY</span>
        </motion.h1>

        <motion.p className="infinity-hero__subtitle" variants={copyVariants}>
          A New Landmark for Business
          <br />on Thanikachalam Road.
        </motion.p>

        <motion.p className="infinity-hero__description" variants={copyVariants}>
          Where premium space meets prime visibility. Built for brands ready to scale.
        </motion.p>

        <motion.div className="infinity-hero__actions" variants={actionVariants}>
          <Link className="infinity-hero__button infinity-hero__button--primary" to="/latest/infinity#explore">
            EXPLORE INFINITY
          </Link>

          <Link className="infinity-hero__button infinity-hero__button--secondary" to="/contact">
            PRIVATE CONSULTATION <span aria-hidden>↗</span>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div animate="visible" className="infinity-hero__footer" initial="hidden" variants={footerVariants}>
        <div className="infinity-hero__meta left">CHENNAI · THANIKACHALAM ROAD</div>
        <div className="infinity-hero__meta right">SCROLL ↓</div>
      </motion.div>
    </section>
  )
}

export default InfinityHero
