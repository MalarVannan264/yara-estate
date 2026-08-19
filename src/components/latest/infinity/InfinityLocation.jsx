import { motion, useReducedMotion } from 'framer-motion'
import infinityLocationBuilding from '../../../assets/images/projects/infinity/left-image.webp'
import { easeOutExpo } from '../../../utils/motion'
import './infinityLocation.css'

const revealUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeOutExpo },
  },
}

const imageReveal = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.15, ease: easeOutExpo },
  },
}

const InfinityLocation = () => {
  const prefersReducedMotion = useReducedMotion()
  const motionProps = prefersReducedMotion ? { initial: false } : { initial: 'hidden' }

  return (
    <section className="infinity-location">
      <div className="infinity-location__content">
        <motion.figure
          {...motionProps}
          className="infinity-location__image-wrap"
          viewport={{ once: true, amount: 0.18 }}
          whileInView="visible"
          variants={imageReveal}
        >
          <motion.img
            alt="YARA Infinity commercial building exterior"
            className="infinity-location__image"
            loading="lazy"
            src={infinityLocationBuilding}
            transition={{ duration: 0.5, ease: easeOutExpo }}
            whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
          />
        </motion.figure>

        <motion.div
          {...motionProps}
          className="infinity-location__copy"
          viewport={{ once: true, amount: 0.28 }}
          whileInView="visible"
          variants={revealUp}
        >
          <p className="infinity-location__eyebrow">THE T-NAGAR ADVANTAGE</p>

          <h2 className="infinity-location__heading">
            At the centre
            of everything you
            love.
          </h2>

          <p className="infinity-location__description">
            In the heart of Chennai&apos;s most prestigious commercial district,
            YARA Infinity is a boutique development crafted for brands that demand
            more than just space. Designed for presence, scale, and long-term
            value. It offers premium commercial floors in T. Nagar, where
            visibility and stature come naturally.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default InfinityLocation
