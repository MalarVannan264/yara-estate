import { motion } from 'framer-motion'
import unitAImage from '../../../assets/images/projects/avante/unit-a.png'
import './avanteUnitShowcase.css'

const contentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.76,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.94,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const stats = [
  { value: '3,420', label: 'SQ.FT. CARPET' },
  { value: '4 BHK', label: 'CONFIGURATION' },
  { value: 'North', label: 'ORIENTATION' },
]

const highlights = [
  'Wraparound private balcony (340 sq.ft.)',
  'Walk-in wardrobe in master suite',
  'Separate service entry & utility deck',
]

const AvanteUnitShowcase = () => (
  <section className="avante-unit-showcase">
    <div className="avante-unit-showcase__shell">
      <motion.div
        className="avante-unit-showcase__header"
        initial="hidden"
        viewport={{ once: true, amount: 0.28 }}
        whileInView="visible"
        variants={contentVariants}
      >
        <motion.p className="avante-unit-showcase__eyebrow" variants={itemVariants}>
          UNIT A — NORTH WING
        </motion.p>
        <motion.h2 className="avante-unit-showcase__heading" variants={itemVariants}>
          The Garden Residence
        </motion.h2>
      </motion.div>

      <motion.figure
        className="avante-unit-showcase__visual"
        initial="hidden"
        viewport={{ once: true, amount: 0.2 }}
        whileInView="visible"
        variants={imageVariants}
      >
        <motion.img
          alt="Avante Unit A floor plan"
          className="avante-unit-showcase__image"
          src={unitAImage}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.02 }}
        />
      </motion.figure>

      <motion.div
        className="avante-unit-showcase__content"
        initial="hidden"
        viewport={{ once: true, amount: 0.22 }}
        whileInView="visible"
        variants={contentVariants}
      >
        <motion.p className="avante-unit-showcase__description" variants={itemVariants}>
          A north-facing four-bedroom home opening onto a wraparound balcony that
          overlooks the residence garden. Crafted to hold the soft Chennai
          morning, with the heart of the home — the dining and living — laid in
          continuous Italian marble.
        </motion.p>

        <motion.div className="avante-unit-showcase__stats" variants={itemVariants}>
          {stats.map((stat) => (
            <div className="avante-unit-showcase__stat" key={stat.label}>
              <p className="avante-unit-showcase__stat-value">{stat.value}</p>
              <p className="avante-unit-showcase__stat-label">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div className="avante-unit-showcase__highlights" variants={itemVariants}>
          <p className="avante-unit-showcase__highlights-title">PREMIUM HIGHLIGHTS</p>
          <ul className="avante-unit-showcase__highlights-list">
            {highlights.map((highlight) => (
              <li className="avante-unit-showcase__highlight" key={highlight}>
                {highlight}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  </section>
)

export default AvanteUnitShowcase
