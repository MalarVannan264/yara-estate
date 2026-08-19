import { motion, useReducedMotion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import infinityLogo from '../../../assets/images/projects/infinity/left-infinity.webp'
import { easeOutExpo } from '../../../utils/motion'
import './infinityExperience.css'

const InfinityExperience = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  const prefersReducedMotion = useReducedMotion()
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  // Logo animation variants
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: easeOutExpo,
      },
    },
  }

  // Eyebrow animation variants
  const eyebrowVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: easeOutExpo,
      },
    },
  }

  // Heading animation variants - line by line reveal
  const headingVariants = {
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

  // Divider animation variants
  const dividerVariants = {
    hidden: { scaleX: 0, opacity: 0.6 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easeOutExpo,
        delay: 0.35,
      },
    },
  }

  // Body copy animation variants
  const bodyCopyVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOutExpo,
        delay: 0.45,
      },
    },
  }

  // Editorial paragraph animation variants
  const editorialVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOutExpo,
        delay: 0.65,
      },
    },
  }

  return (
    <section className="infinity-experience" ref={sectionRef}>
      <div className="infinity-experience__panel infinity-experience__panel--visual">
        <motion.div
          className="infinity-experience__logo-wrap"
          initial={prefersReducedMotion ? false : 'hidden'}
          animate={hasAnimated ? 'visible' : 'hidden'}
          variants={logoVariants}
        >
          <img
            src={infinityLogo}
            alt="YARA INFINITY"
            className="infinity-experience__logo"
          />
        </motion.div>
      </div>

      <div className="infinity-experience__panel infinity-experience__panel--content">
        <div className="infinity-experience__content-inner">
          <motion.div
            className="infinity-experience__eyebrow"
            initial={prefersReducedMotion ? false : 'hidden'}
            animate={hasAnimated ? 'visible' : 'hidden'}
            variants={eyebrowVariants}
          >
            THE INFINITY EXPERIENCE
          </motion.div>

          <motion.h2
            className="infinity-experience__heading"
            initial={prefersReducedMotion ? false : 'hidden'}
            animate={hasAnimated ? 'visible' : 'hidden'}
            variants={headingVariants}
          >
            An address
            <br />
            beyond ordinary.
          </motion.h2>

          <motion.div
            className="infinity-experience__divider"
            initial={prefersReducedMotion ? false : 'hidden'}
            animate={hasAnimated ? 'visible' : 'hidden'}
            variants={dividerVariants}
            style={{ originX: 0 }}
          />

          <motion.p
            className="infinity-experience__body-copy"
            initial={prefersReducedMotion ? false : 'hidden'}
            animate={hasAnimated ? 'visible' : 'hidden'}
            variants={bodyCopyVariants}
          >
            YARA Infinity is a limited commercial address shaped by proportion,
            privacy and material honesty. Interiors open outward to landscaped
            edges; plans are drawn for quiet movement and long light.
          </motion.p>

          <motion.p
            className="infinity-experience__editorial-copy"
            initial={prefersReducedMotion ? false : 'hidden'}
            animate={hasAnimated ? 'visible' : 'hidden'}
            variants={editorialVariants}
          >
            Every floor is finished in a restrained palette of stone, timber and
            brushed metal — chosen to age gracefully rather than impress quickly.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default InfinityExperience
