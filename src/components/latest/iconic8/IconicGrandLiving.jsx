import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import grandLivingImage from '../../../assets/images/projects/iconic8/iconic8-grand-living.jpg'
import './iconicGrandLiving.css'

const tags = [
  'FLOATING TEAK STAIRCASE',
  '24-FT VOLUME',
  'ITALIAN MARBLE',
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.84,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const IconicGrandLiving = () => {
  const sectionRef = useRef(null)
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) {
        return
      }

      const rect = sectionRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight || 1
      const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height)
      const clamped = Math.min(Math.max(progress, 0), 1)
      setOffsetY((clamped - 0.5) * 28)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="iconic-grand-living" ref={sectionRef}>
      <motion.div
        animate={{ scale: 1.05, y: offsetY }}
        className="iconic-grand-living__bg"
        initial={{ scale: 1.095, y: 0 }}
        style={{ backgroundImage: `url(${grandLivingImage})` }}
        transition={{
          scale: { duration: 1.8, ease: [0.22, 1, 0.36, 1] },
          y: { duration: 0.28, ease: 'easeOut' },
        }}
      />
      <div aria-hidden="true" className="iconic-grand-living__overlay" />

      <motion.div
        animate="visible"
        className="iconic-grand-living__shell"
        initial="hidden"
        variants={containerVariants}
      >
        <motion.div className="iconic-grand-living__tags" variants={containerVariants}>
          {tags.map((tag) => (
            <motion.div
              className="iconic-grand-living__tag"
              key={tag}
              variants={itemVariants}
            >
              <span aria-hidden="true" className="iconic-grand-living__tag-dot" />
              {tag}
            </motion.div>
          ))}
        </motion.div>

        <div className="iconic-grand-living__content-wrap">
          <motion.div className="iconic-grand-living__content" variants={containerVariants}>
            <motion.div className="iconic-grand-living__top-line" variants={itemVariants} />

            <motion.p className="iconic-grand-living__eyebrow" variants={itemVariants}>
              THE GRAND LIVING
            </motion.p>

            <motion.h2 className="iconic-grand-living__heading" variants={itemVariants}>
              Every corner
              <br />
              tells a story.
            </motion.h2>

            <motion.div className="iconic-grand-living__bottom-line" variants={itemVariants} />

            <motion.p
              className="iconic-grand-living__description"
              variants={itemVariants}
            >
              A double-height volume opens to the entrance, anchored by a
              sculptural floating staircase in solid teak. Soft Italian marble
              underfoot. Sculptural pendant lighting overhead. Furniture chosen
              to recede, so the architecture can speak.
            </motion.p>

            <motion.p className="iconic-grand-living__counter" variants={itemVariants}>
              01
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default IconicGrandLiving
