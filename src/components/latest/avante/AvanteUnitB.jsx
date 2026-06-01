import { motion } from 'framer-motion'
import unitBImage from '../../../assets/images/projects/avante/unit-b.png'
import './avanteUnitB.css'

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
  { value: '3,180', label: 'SQ.FT. CARPET' },
  { value: '3 + Den', label: 'CONFIGURATION' },
  { value: 'South', label: 'ORIENTATION' },
]

const highlights = [
  '12-foot vaulted living room ceiling',
  'Private den with built-in library',
  'Sunset-facing master suite with garden bath',
]

const AvanteUnitB = () => (
  <section className="avante-unit-b">
    <div className="avante-unit-b__shell">
      <motion.div
        className="avante-unit-b__header"
        initial="hidden"
        viewport={{ once: true, amount: 0.28 }}
        whileInView="visible"
        variants={contentVariants}
      >
        <motion.p className="avante-unit-b__eyebrow" variants={itemVariants}>
          UNIT B — SOUTH WING
        </motion.p>
        <motion.h2 className="avante-unit-b__heading" variants={itemVariants}>
          The Sunset Residence
        </motion.h2>
      </motion.div>

      <motion.figure
        className="avante-unit-b__visual"
        initial="hidden"
        viewport={{ once: true, amount: 0.2 }}
        whileInView="visible"
        variants={imageVariants}
      >
        <motion.img
          alt="Avante Unit B floor plan"
          className="avante-unit-b__image"
          src={unitBImage}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.02 }}
        />
      </motion.figure>

      <motion.div
        className="avante-unit-b__content"
        initial="hidden"
        viewport={{ once: true, amount: 0.22 }}
        whileInView="visible"
        variants={contentVariants}
      >
        <motion.p className="avante-unit-b__description" variants={itemVariants}>
          A south-facing home designed to catch the long, slow Adyar afternoon.
          Vaulted ceilings in the living room rise to twelve feet; a private den
          off the master makes space for the quiet hour between work and home.
        </motion.p>

        <motion.div className="avante-unit-b__stats" variants={itemVariants}>
          {stats.map((stat) => (
            <div className="avante-unit-b__stat" key={stat.label}>
              <p className="avante-unit-b__stat-value">{stat.value}</p>
              <p className="avante-unit-b__stat-label">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div className="avante-unit-b__highlights" variants={itemVariants}>
          <p className="avante-unit-b__highlights-title">PREMIUM HIGHLIGHTS</p>
          <ul className="avante-unit-b__highlights-list">
            {highlights.map((highlight) => (
              <li className="avante-unit-b__highlight" key={highlight}>
                {highlight}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  </section>
)

export default AvanteUnitB
