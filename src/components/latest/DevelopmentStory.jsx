import { motion } from 'framer-motion'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import { fadeUp, staggerContainer } from '../../utils/motion'

const DevelopmentStory = ({ story }) => (
  <section className="section-shell">
    <Container>
      <motion.div
        className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <SectionHeading
          description="Each release is positioned with a strong emotional lens, so the architecture, amenities, and lifestyle cues feel consistent from first glance to final detail."
          eyebrow="Development story"
          title="Designed as a complete world, not simply a collection of floor plans."
        />

        <motion.div className="luxury-panel p-7 sm:p-8" variants={fadeUp}>
          <p className="text-lg leading-9 text-brand-muted">{story}</p>
        </motion.div>
      </motion.div>
    </Container>
  </section>
)

export default DevelopmentStory
