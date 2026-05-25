import { motion } from 'framer-motion'
import ctaEstate from '../../assets/images/homepage/cta-estate.svg'
import Container from '../common/Container'
import { fadeUp, staggerContainer } from '../../utils/motion'

const CTASection = () => (
  <section className="section-shell overflow-hidden bg-[#5b6f84]">
    <Container className="space-y-10">
      <motion.div
        className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div className="space-y-5" variants={fadeUp}>
          <p className="eyebrow text-brand-gold-soft">Positioning</p>
          <h2 className="font-display text-5xl leading-[0.96] text-white sm:text-6xl">
            More Than a Property.
          </h2>
          <p className="max-w-md text-sm leading-7 text-white/80 sm:text-base">
            A premium brand story section is now in place for your future campaign image,
            brand promise, and long-term value narrative.
          </p>
        </motion.div>

        <motion.img
          alt="YARA CTA placeholder"
          className="w-full border border-white/20 bg-white/10 object-cover shadow-luxe"
          src={ctaEstate}
          variants={fadeUp}
        />
      </motion.div>

      <motion.div
        className="grid gap-4 border-t border-white/18 pt-6 sm:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {[
          ['42%', 'Editorial conversion block'],
          ['24+', 'Replaceable content areas'],
          ['100%', 'Frontend only and scalable'],
          ['06', 'Luxury narrative modules'],
        ].map(([value, label]) => (
          <motion.div key={label} variants={fadeUp}>
            <p className="font-display text-4xl text-white">{value}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.24em] text-white/70">{label}</p>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  </section>
)

export default CTASection
