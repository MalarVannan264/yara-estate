import { motion, useReducedMotion } from 'framer-motion'
import infinityQuoteImage from '../../../assets/images/projects/infinity/qoute-image.webp'
import { easeOutExpo } from '../../../utils/motion'
import './infinityQuotes.css'

const quoteVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOutExpo,
    },
  },
}

const ctaVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.12,
      ease: easeOutExpo,
    },
  },
}

const InfinityQuotes = () => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="infinity-quotes">
      <div
        aria-hidden="true"
        className="infinity-quotes__media"
        style={{ backgroundImage: `url(${infinityQuoteImage})` }}
      />
      <div aria-hidden="true" className="infinity-quotes__overlay" />

      <motion.div
        className="infinity-quotes__content"
        initial={prefersReducedMotion ? false : 'hidden'}
        viewport={{ once: true, amount: 0.35 }}
        variants={quoteVariants}
        whileInView="visible"
      >
        <motion.h2
          className="infinity-quotes__heading"
          initial={prefersReducedMotion ? false : 'hidden'}
          viewport={{ once: true, amount: 0.35 }}
          variants={quoteVariants}
          whileInView="visible"
        >
          Own an address of enduring value,
          <br />
          A premium commercial asset in one of Chennai&apos;s
          <br />
          most sought-after districts.
        </motion.h2>

        <motion.a
          className="infinity-quotes__cta"
          href="#explore"
          initial={prefersReducedMotion ? false : 'hidden'}
          variants={ctaVariants}
          viewport={{ once: true, amount: 0.45 }}
          whileInView="visible"
        >
          <span>EXPLORE THE EXPERIENCE</span>
          <span aria-hidden="true" className="infinity-quotes__cta-arrow">
            →
          </span>
        </motion.a>
      </motion.div>
    </section>
  )
}

export default InfinityQuotes
