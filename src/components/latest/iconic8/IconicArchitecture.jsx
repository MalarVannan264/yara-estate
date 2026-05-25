import { motion } from 'framer-motion'
import iconicLogoPanel from '../../../assets/images/projects/iconic8/iconic8-logo-panel.jpg'
import './iconicArchitecture.css'

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

const imageVariants = {
  hidden: { opacity: 0, scale: 1.08 },
  visible: {
    opacity: 1,
    scale: 1.02,
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const stats = [
  {
    value: '60%',
    label: 'OPEN SPACE',
  },
  {
    value: '4-Side',
    label: 'VENTILATION',
  },
  {
    value: '12-ft',
    label: 'CEILINGS',
  },
]

const IconicArchitecture = () => (
  <section className="iconic-architecture">
    <motion.div
      className="iconic-architecture__panel iconic-architecture__panel--visual"
      initial="hidden"
      viewport={{ once: true, amount: 0.25 }}
      whileInView="visible"
      variants={imageVariants}
    >
      <img
        alt="Iconic 8 logo panel"
        className="iconic-architecture__logo-panel"
        src={iconicLogoPanel}
      />
      <div aria-hidden="true" className="iconic-architecture__visual-glow" />
    </motion.div>

    <div className="iconic-architecture__panel iconic-architecture__panel--content">
      <motion.div
        className="iconic-architecture__content-inner"
        initial="hidden"
        viewport={{ once: true, amount: 0.24 }}
        whileInView="visible"
        variants={textVariants}
      >
        <motion.p className="iconic-architecture__eyebrow" variants={itemVariants}>
          A MASTERPIECE OF TROPICAL MODERNISM
        </motion.p>

        <motion.h2 className="iconic-architecture__heading" variants={itemVariants}>
          Architecture
          <br />
          that breathes.
        </motion.h2>

        <motion.div className="iconic-architecture__rule" variants={itemVariants} />

        <motion.p className="iconic-architecture__paragraph" variants={itemVariants}>
          Each villa is shaped around the way Chennai&apos;s light moves through
          a day — east-facing courtyards for the morning, deep verandas for the
          afternoon, and rooftop pavilions held in the breeze of the Bay.
        </motion.p>

        <motion.p className="iconic-architecture__paragraph" variants={itemVariants}>
          Materials are chosen to age, not date. Burma teak. Kota stone.
          Hand-troweled lime. The walls are thick. The volumes generous. The
          proportions, quietly classical.
        </motion.p>

        <motion.div className="iconic-architecture__stats" variants={textVariants}>
          {stats.map((stat) => (
            <motion.div className="iconic-architecture__stat" key={stat.label} variants={itemVariants}>
              <p className="iconic-architecture__stat-value">{stat.value}</p>
              <p className="iconic-architecture__stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
)

export default IconicArchitecture
