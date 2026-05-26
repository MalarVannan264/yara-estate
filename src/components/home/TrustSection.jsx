import { motion } from 'framer-motion'
import Container from '../common/Container'
import { fadeUp, staggerContainer } from '../../utils/motion'
import './trustSection.css'

const trustItems = [
  'Prime Locations',
  'Curated Collections',
  'Boutique Development',
  'Future Appreciation',
  'Transparent Process',
  'Luxury Standards',
]

const TrustSection = () => (
  <section className="section-shell">
    <Container className="trust-container">
      <motion.div
        className="trust-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.p className="trust-eyebrow" variants={fadeUp}>
          Why YARA
        </motion.p>
        <motion.h2 className="trust-title" variants={fadeUp}>
          Crafted Beyond Real Estate.
        </motion.h2>
        <motion.p className="trust-copy" variants={fadeUp}>
          This section keeps the trust-building card rhythm from the reference without
          overbuilding it before your final content arrives.
        </motion.p>
      </motion.div>
      <div className="trust-grid">
        {trustItems.map((item, index) => (
          <motion.div
            key={item}
            className={`trust-card ${index % 2 === 0 ? '' : 'trust-card--alt'}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <p className="trust-card__label">
              Signature value
            </p>
            <h3 className="trust-card__title">{item}</h3>
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
)

export default TrustSection
