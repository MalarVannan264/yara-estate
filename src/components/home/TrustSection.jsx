import { motion } from 'framer-motion'
import Container from '../common/Container'
import { fadeUp, staggerContainer } from '../../utils/motion'

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
    <Container className="space-y-12">
      <motion.div
        className="space-y-4 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.p className="eyebrow" variants={fadeUp}>
          Why YARA
        </motion.p>
        <motion.h2 className="editorial-title mx-auto max-w-3xl" variants={fadeUp}>
          Crafted Beyond Real Estate.
        </motion.h2>
        <motion.p className="copy-muted mx-auto max-w-2xl" variants={fadeUp}>
          This section keeps the trust-building card rhythm from the reference without
          overbuilding it before your final content arrives.
        </motion.p>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {trustItems.map((item, index) => (
          <motion.div
            key={item}
            className={`border px-6 py-7 ${index % 2 === 0 ? 'border-brand-border bg-white text-brand-text' : 'border-[#4e3c33] bg-[#4e3c33] text-white'}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <p className="text-[0.68rem] uppercase tracking-[0.28em] opacity-70">
              Signature value
            </p>
            <h3 className="mt-5 font-display text-3xl leading-tight">{item}</h3>
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
)

export default TrustSection
