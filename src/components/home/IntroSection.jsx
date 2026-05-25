import { motion } from 'framer-motion'
import introVision from '../../assets/images/homepage/intro-vision.svg'
import Container from '../common/Container'
import { fadeUp, staggerContainer } from '../../utils/motion'

const IntroSection = () => (
  <section className="section-shell">
    <Container>
      <motion.div
        className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
      >
        <motion.div className="space-y-6" variants={fadeUp}>
          <p className="eyebrow">Brand introduction</p>
          <h2 className="editorial-title max-w-xl">Luxury Begins with Vision.</h2>
          <p className="copy-muted max-w-md">
            The homepage now follows a lighter editorial direction inspired by the
            reference, with premium whitespace, serif-led headings, and structured image
            placeholders ready for your real project photography.
          </p>
        </motion.div>

        <motion.div className="space-y-6" variants={fadeUp}>
          <img
            alt="YARA intro placeholder"
            className="w-full border border-brand-border bg-white object-cover shadow-luxe"
            src={introVision}
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ['A06', 'Signature design language'],
              ['11', 'Section-ready content blocks'],
              ['42', 'Prepared image replacement zones'],
            ].map(([value, label]) => (
              <div key={label} className="border border-brand-border bg-white px-5 py-6">
                <p className="font-display text-2xl text-brand-text">{value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.24em] text-brand-muted">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Container>
  </section>
)

export default IntroSection
