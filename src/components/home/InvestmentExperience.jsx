import { motion } from 'framer-motion'
import './investmentExperience.css'

const headerVariants = {
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

const statsVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.1,
    },
  },
}

const statVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.74,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const stats = [
  {
    id: '01',
    value: '42%',
    label: 'AVG. 5-YEAR APPRECIATION',
  },
  {
    id: '02',
    value: '3.4×',
    label: 'DECADE-LONG VALUE GROWTH',
  },
  {
    id: '03',
    value: '100%',
    label: 'CLEAR-TITLE DEVELOPMENTS',
  },
  {
    id: '04',
    value: '06',
    label: 'STRATEGIC GROWTH CORRIDORS',
  },
]

const InvestmentExperience = () => (
  <section className="yara-investment-experience">
    <div className="investment-experience-shell">
      <motion.div
        className="investment-experience-header"
        initial="hidden"
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
        variants={headerVariants}
      >
        <div className="investment-experience-heading-group">
          <p className="investment-experience-eyebrow">INVESTMENT EXPERIENCE</p>
          <h2 className="investment-experience-heading">
            Built for
            <br />
            Generational Value.
          </h2>
        </div>

        <p className="investment-experience-description">
          Strategic locations. Long-term appreciation. Premium development
          philosophy supported by future-ready infrastructure and an
          institutional approach to land selection.
        </p>
      </motion.div>

      <div className="investment-experience-divider" />

      <motion.div
        className="investment-experience-stats"
        initial="hidden"
        viewport={{ once: true, amount: 0.2 }}
        whileInView="visible"
        variants={statsVariants}
      >
        {stats.map((stat) => (
          <motion.article
            className="investment-experience-stat"
            key={stat.id}
            variants={statVariants}
            whileHover={{ y: -6 }}
          >
            <p className="investment-experience-stat-id">{stat.id}</p>
            <h3 className="investment-experience-stat-value">{stat.value}</h3>
            <p className="investment-experience-stat-label">{stat.label}</p>
          </motion.article>
        ))}
      </motion.div>
    </div>
  </section>
)

export default InvestmentExperience
