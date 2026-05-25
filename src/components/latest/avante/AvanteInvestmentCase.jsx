import { motion } from 'framer-motion'
import './avanteInvestmentCase.css'

const stats = [
  {
    value: '12',
    label: 'BOUTIQUE RESIDENCES',
    description: 'Low-density living. Each home holds its quiet.',
  },
  {
    value: '7.2%',
    label: 'CAGR — ADYAR LAST 10 YRS',
    description: "Among Chennai's most consistent appreciation corridors.",
  },
  {
    value: '0.42',
    label: 'ACRE LAND PARCEL',
    description: 'Rare prime Adyar land — held by Yara since 2018.',
  },
  {
    value: '∞',
    label: 'LEGACY VALUE',
    description: 'Built to be passed down. Built to remain.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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
      duration: 0.82,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const AvanteInvestmentCase = () => (
  <section className="avante-investment-case">
    <motion.div
      animate="visible"
      className="avante-investment-case__inner"
      initial="hidden"
      variants={containerVariants}
      viewport={{ amount: 0.2, once: true }}
      whileInView="visible"
    >
      <motion.p className="avante-investment-case__eyebrow" variants={itemVariants}>
        THE INVESTMENT CASE
      </motion.p>

      <motion.h2 className="avante-investment-case__heading" variants={itemVariants}>
        A rare parcel.
        <br />
        A quiet appreciation.
      </motion.h2>

      <motion.div className="avante-investment-case__stats" variants={containerVariants}>
        {stats.map((stat) => (
          <motion.article
            className="avante-investment-case__stat"
            key={stat.label}
            variants={itemVariants}
          >
            <h3 className="avante-investment-case__value">{stat.value}</h3>
            <p className="avante-investment-case__label">{stat.label}</p>
            <p className="avante-investment-case__description">{stat.description}</p>
          </motion.article>
        ))}
      </motion.div>

      <motion.blockquote
        className="avante-investment-case__quote"
        variants={itemVariants}
      >
        "A home in Adyar is not bought.
        <br />
        It is inherited — sometimes from the
        <br />
        next generation, backwards."
      </motion.blockquote>
    </motion.div>
  </section>
)

export default AvanteInvestmentCase
