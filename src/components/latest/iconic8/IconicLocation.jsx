import { motion } from 'framer-motion'
import iconicMap from '../../../assets/images/projects/iconic8/iconic8-map.jpg'
import './iconicLocation.css'

const textVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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

const IconicLocation = () => (
  <section className="iconic-location">
    <div className="iconic-location__inner">
      <motion.div
        className="iconic-location__header"
        initial="hidden"
        viewport={{ once: true, amount: 0.24 }}
        whileInView="visible"
        variants={textVariants}
      >
        <motion.p className="iconic-location__eyebrow" variants={itemVariants}>
          NEELANKARAI — THE ADDRESS
        </motion.p>

        <motion.h2 className="iconic-location__heading" variants={itemVariants}>
          Where the city
          <br />
          hushes into the sea.
        </motion.h2>
      </motion.div>

      <motion.figure
        className="iconic-location-map"
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.92, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <img src={iconicMap} alt="Iconic 8 Neelankarai location map" />
      </motion.figure>
    </div>
  </section>
)

export default IconicLocation
