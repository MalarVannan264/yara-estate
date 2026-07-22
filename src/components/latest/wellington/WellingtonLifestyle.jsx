import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import lifestyleImage from '../../../assets/images/projects/wellington/lifestyle-bg.webp'
import { easeOutExpo } from '../../../utils/motion'
import './wellingtonLifestyle.css'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.14,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.86, ease: easeOutExpo },
  },
}

const stats = [
  { value: '60%', label: 'OPEN SPACES' },
  { value: '20+', label: 'AMENITIES' },
  { value: '365', label: 'DAYS OF GREEN' },
]

const WellingtonLifestyle = () => {
  const sectionRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, prefersReducedMotion ? 0 : 90],
  )

  return (
    <section className="wellington-lifestyle" ref={sectionRef}>
      <motion.div
        className="wellington-lifestyle__media"
        style={prefersReducedMotion ? undefined : { y: backgroundY }}
      >
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="wellington-lifestyle__background-shell"
          initial={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 1.8, ease: easeOutExpo }}
        >
          <div
            className="wellington-lifestyle__background"
            style={{ backgroundImage: `url(${lifestyleImage})` }}
          />
        </motion.div>
      </motion.div>

      <div aria-hidden="true" className="wellington-lifestyle__overlay" />

      <motion.div
        animate="visible"
        className="wellington-lifestyle__content"
        initial="hidden"
        variants={containerVariants}
      >
        <motion.p className="wellington-lifestyle__eyebrow" variants={itemVariants}>
          THE LIFESTYLE
        </motion.p>

        <motion.h2 className="wellington-lifestyle__heading" variants={itemVariants}>
          Luxury that lets
          <br />
          <span className="wellington-lifestyle__heading-accent">you breathe.</span>
        </motion.h2>

        <motion.p className="wellington-lifestyle__description" variants={itemVariants}>
          Wellington offers a balanced lifestyle where modern comforts
          coexist with greenery, wellness and meaningful community
          experiences.
        </motion.p>

        <motion.div className="wellington-lifestyle__stats" variants={itemVariants}>
          {stats.map((stat) => (
            <div className="wellington-lifestyle__stat" key={stat.label}>
              <p className="wellington-lifestyle__stat-value">{stat.value}</p>
              <p className="wellington-lifestyle__stat-label">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default WellingtonLifestyle
