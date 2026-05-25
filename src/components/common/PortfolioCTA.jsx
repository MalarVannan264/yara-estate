import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from './Button'
import Container from './Container'
import { fadeUp } from '../../utils/motion'

const PortfolioCTA = () => (
  <section className="section-shell pt-8">
    <Container>
      <motion.div
        className="gold-shimmer relative overflow-hidden border border-brand-border bg-[#3a2922] px-6 py-12 sm:px-10 lg:px-14 lg:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-5">
            <p className="eyebrow text-brand-gold-soft">Private appointments</p>
            <h2 className="text-balance font-display text-4xl leading-tight text-white sm:text-5xl">
              Ready to begin a more tailored real-estate conversation?
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-white/74 sm:text-base">
              This shared CTA remains available for the inner pages while the homepage now
              uses its own lighter editorial section structure.
            </p>
          </div>

          <Button size="lg" to="/contact">
            Contact YARA
            <ArrowRight size={18} />
          </Button>
        </div>
      </motion.div>
    </Container>
  </section>
)

export default PortfolioCTA
