import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import avanteFloorPlan from '../../../assets/images/projects/avante/avante-floorplan.png'
import './avanteFloorPlan.css'

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

const statItemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.74,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const checklistVariants = {
  hidden: { opacity: 0, x: 26 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.84,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
}

const checklistItemVariants = {
  hidden: { opacity: 0, x: 16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.62,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const features = [
  'Vastu-aligned planning across all units',
  'Cross-ventilation in every room',
  'Private vestibule entry per residence',
  'East-facing master suite, garden views',
]

const AvanteFloorPlan = () => (
  <section className="avante-floorplan">
    <div className="avante-floorplan__shell">
      <motion.div
        className="avante-floorplan__header"
        initial="hidden"
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
        variants={headerVariants}
      >
        <p className="avante-floorplan__eyebrow">MASTER FLOOR PLAN</p>
        <h2 className="avante-floorplan__heading">
          Two homes per floor.
          <br />
          A boutique by design.
        </h2>
      </motion.div>

      <motion.figure
        className="avante-floorplan__visual"
        initial="hidden"
        viewport={{ once: true, amount: 0.18 }}
        whileInView="visible"
        variants={imageVariants}
      >
        <motion.img
          alt="Avante master floor plan"
          className="avante-floorplan__image"
          src={avanteFloorPlan}
          transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.02 }}
        />
      </motion.figure>

      <div className="avante-floorplan__footer">
        <motion.article
          className="avante-floorplan__stat avante-floorplan__stat--small"
          initial="hidden"
          viewport={{ once: true, amount: 0.2 }}
          whileInView="visible"
          variants={statItemVariants}
        >
          <p className="avante-floorplan__stat-value">2</p>
          <p className="avante-floorplan__stat-copy">
            Residences per floor — total privacy
          </p>
        </motion.article>

        <motion.article
          className="avante-floorplan__stat avante-floorplan__stat--large"
          initial="hidden"
          viewport={{ once: true, amount: 0.2 }}
          whileInView="visible"
          variants={statItemVariants}
        >
          <p className="avante-floorplan__stat-value avante-floorplan__stat-value--large">
            3,200 sq.ft.
          </p>
          <p className="avante-floorplan__stat-copy">
            Average carpet area, with private balcony
          </p>
        </motion.article>

        <motion.div
          className="avante-floorplan__checklist"
          initial="hidden"
          viewport={{ once: true, amount: 0.18 }}
          whileInView="visible"
          variants={checklistVariants}
        >
          {features.map((feature) => (
            <motion.div
              className="avante-floorplan__checklist-item"
              key={feature}
              variants={checklistItemVariants}
            >
              <span className="avante-floorplan__check-icon">
                <Check size={18} strokeWidth={2.1} />
              </span>
              <p className="avante-floorplan__check-copy">{feature}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
)

export default AvanteFloorPlan
