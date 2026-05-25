import { motion } from 'framer-motion'
import './aboutPhilosophy.css'

const columnVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.82,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const statsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
}

const statItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const stats = [
  { value: '06', label: 'Curated Projects' },
  { value: '11', label: 'Years of Craft' },
  { value: '42', label: 'Acres Shaped' },
]

const AboutPhilosophy = () => (
  <section className="yara-philosophy">
    <div className="philosophy-shell">
      <div className="philosophy-grid">
        <motion.div
          className="philosophy-column philosophy-column-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={columnVariants}
        >
          <p className="philosophy-eyebrow">OUR PHILOSOPHY</p>

          <h2 className="philosophy-heading">
            Luxury Begins
            <br />
            with Vision.
          </h2>

          <p className="philosophy-location">YARA · Chennai · India</p>
        </motion.div>

        <motion.div
          className="philosophy-column philosophy-column-right"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.28 }}
          variants={columnVariants}
        >
          <div className="philosophy-copy">
            <p className="philosophy-paragraph philosophy-paragraph-primary">
              YARA Estates is a boutique developer of curated land, contemporary
              villas, and considered investments. We approach each location with the
              discipline of a studio and the intuition of an editorial — building
              destinations that hold their meaning over decades, not seasons.
            </p>

            <p className="philosophy-paragraph philosophy-paragraph-secondary">
              Our work is architecture-first. Every plot, every elevation, every
              shaded courtyard is composed with intention — quiet materials,
              generous light, and the unhurried pace of tropical-modern living.
            </p>
          </div>

          <motion.div
            className="philosophy-stats"
            initial="hidden"
            variants={statsContainerVariants}
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="philosophy-stat"
                variants={statItemVariants}
              >
                <p className="philosophy-stat-value">{stat.value}</p>
                <p className="philosophy-stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
)

export default AboutPhilosophy
