import { motion } from 'framer-motion'
import unitAImage from '../../../assets/images/projects/avante/unit-a.png'
import './avanteUnitShowcase.css'

const easeOut = [0.22, 1, 0.36, 1]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.06 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.76, ease: easeOut } },
}

const imgVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.94, ease: easeOut } },
}

const stats = [
  { value: '3,420', label: 'Sq.Ft. Carpet' },
  { value: '4 BHK', label: 'Configuration' },
  { value: 'North', label: 'Orientation' },
]

const highlights = [
  'Wraparound private balcony (340 sq.ft.)',
  'Walk-in wardrobe in master suite',
  'Separate service entry & utility deck',
]

const AvanteUnitShowcase = () => (
  <section className="avante-unit-showcase">

    {/* Image — left panel */}
    <motion.div
      className="avante-unit-showcase__image-panel"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={imgVariants}
    >
      <img
        alt="Avante Unit A — isometric floor plan"
        className="avante-unit-showcase__image"
        src={unitAImage}
      />
    </motion.div>

    {/* Content — right panel */}
    <motion.div
      className="avante-unit-showcase__content-panel"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
      variants={stagger}
    >
      <motion.p className="avante-unit-showcase__eyebrow" variants={fadeUp}>
        UNIT A — NORTH WING
      </motion.p>

      <motion.h2 className="avante-unit-showcase__heading" variants={fadeUp}>
        The Garden Residence
      </motion.h2>

      <motion.p className="avante-unit-showcase__description" variants={fadeUp}>
        A north-facing four-bedroom home opening onto a wraparound balcony that
        overlooks the residence garden. Crafted to hold the soft Chennai morning,
        with the heart of the home — the dining and living — laid in continuous
        Italian marble.
      </motion.p>

      <motion.div className="avante-unit-showcase__stats" variants={fadeUp}>
        {stats.map((s) => (
          <div className="avante-unit-showcase__stat" key={s.label}>
            <p className="avante-unit-showcase__stat-value">{s.value}</p>
            <p className="avante-unit-showcase__stat-label">{s.label}</p>
          </div>
        ))}
      </motion.div>

      <motion.div className="avante-unit-showcase__highlights" variants={fadeUp}>
        <p className="avante-unit-showcase__highlights-title">PREMIUM HIGHLIGHTS</p>
        <ul className="avante-unit-showcase__highlights-list">
          {highlights.map((h) => (
            <li className="avante-unit-showcase__highlight" key={h}>{h}</li>
          ))}
        </ul>
      </motion.div>
    </motion.div>

  </section>
)

export default AvanteUnitShowcase
