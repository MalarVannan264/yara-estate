import { motion } from 'framer-motion'
import masterplanImage from '../../../assets/images/projects/wellington/masterplan-bp.webp'
import './wellingtonMasterplan.css'

const headerVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.84,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 28 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.96,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const legendVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
}

const legendItemVariants = {
  hidden: { opacity: 0, x: 16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const zones = [
  { number: '01', label: 'Villa Layouts', color: '#c1693c' },
  { number: '02', label: 'Road Network', color: '#a89886' },
  { number: '03', label: 'Green Spaces', color: '#7c8b5a' },
  { number: '04', label: 'Clubhouse', color: '#c2a25b' },
  { number: '05', label: 'Open Areas', color: '#cdb795' },
  { number: '06', label: 'Visitor Parking', color: '#9c8b76' },
  { number: '07', label: 'Community Zones', color: '#c98a5e' },
]

const WellingtonMasterplan = () => (
  <section className="wellington-masterplan">
    <div className="wellington-masterplan__shell">
      <motion.div
        className="wellington-masterplan__header"
        initial="hidden"
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
        variants={headerVariants}
      >
        <div className="wellington-masterplan__header-left">
          <p className="wellington-masterplan__eyebrow">MASTERPLAN</p>
          <h2 className="wellington-masterplan__heading">
            Thoughtfully planned
            <br />
            <span className="wellington-masterplan__heading-accent">
              community.
            </span>
          </h2>
        </div>

        <p className="wellington-masterplan__description">
          Carefully zoned for villas, green spaces, the clubhouse and shared
          community areas — connected by a calm, walkable road network.
        </p>
      </motion.div>

      <div className="wellington-masterplan__body">
        <motion.figure
          className="wellington-masterplan__visual"
          initial="hidden"
          viewport={{ once: true, amount: 0.18 }}
          whileInView="visible"
          variants={imageVariants}
        >
          <img
            alt="Wellington Village masterplan"
            className="wellington-masterplan__image"
            src={masterplanImage}
          />
        </motion.figure>

        <motion.div
          className="wellington-masterplan__legend"
          initial="hidden"
          viewport={{ once: true, amount: 0.2 }}
          whileInView="visible"
          variants={legendVariants}
        >
          <p className="wellington-masterplan__legend-label">LEGEND</p>
          <h3 className="wellington-masterplan__legend-heading">
            Community Zones
          </h3>

          <ul className="wellington-masterplan__legend-list">
            {zones.map((zone) => (
              <motion.li
                className="wellington-masterplan__legend-item"
                key={zone.number}
                variants={legendItemVariants}
              >
                <span
                  aria-hidden="true"
                  className="wellington-masterplan__legend-swatch"
                  style={{ background: zone.color }}
                />
                <span className="wellington-masterplan__legend-name">
                  {zone.label}
                </span>
                <span className="wellington-masterplan__legend-number">
                  {zone.number}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
)

export default WellingtonMasterplan
