import { motion } from 'framer-motion'
import unitBImage from '../../../assets/images/projects/avante/unit-b.png'
import './avanteUnitB.css'

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
  { value: '3,180', label: 'Sq.Ft. Carpet' },
  { value: '3 + Den', label: 'Configuration' },
  { value: 'South', label: 'Orientation' },
]

const highlights = [
  '12-foot vaulted living room ceiling',
  'Private den with built-in library',
  'Sunset-facing master suite with garden bath',
]

const AvanteUnitB = () => (
  <section className="avante-unit-b">

    {/* Content — left panel */}
    <motion.div
      className="avante-unit-b__content-panel"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
      variants={stagger}
    >
      <motion.p className="avante-unit-b__eyebrow" variants={fadeUp}>
        UNIT B — SOUTH WING
      </motion.p>

      <motion.h2 className="avante-unit-b__heading" variants={fadeUp}>
        The Sunset Residence
      </motion.h2>

      <motion.p className="avante-unit-b__description" variants={fadeUp}>
        A south-facing home designed to catch the long, slow Adyar afternoon.
        Vaulted ceilings in the living room rise to twelve feet; a private den
        off the master makes space for the quiet hour between work and home.
      </motion.p>

      <motion.div className="avante-unit-b__stats" variants={fadeUp}>
        {stats.map((s) => (
          <div className="avante-unit-b__stat" key={s.label}>
            <p className="avante-unit-b__stat-value">{s.value}</p>
            <p className="avante-unit-b__stat-label">{s.label}</p>
          </div>
        ))}
      </motion.div>

      <motion.div className="avante-unit-b__highlights" variants={fadeUp}>
        <p className="avante-unit-b__highlights-title">PREMIUM HIGHLIGHTS</p>
        <ul className="avante-unit-b__highlights-list">
          {highlights.map((h) => (
            <li className="avante-unit-b__highlight" key={h}>{h}</li>
          ))}
        </ul>
      </motion.div>
    </motion.div>

    {/* Image — right panel */}
    <motion.div
      className="avante-unit-b__image-panel"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={imgVariants}
    >
      <img
        alt="Avante Unit B — isometric floor plan"
        className="avante-unit-b__image"
        src={unitBImage}
      />
    </motion.div>

  </section>
)

export default AvanteUnitB
