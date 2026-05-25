import { motion } from 'framer-motion'
import Container from '../common/Container'
import ImageOverlay from '../common/ImageOverlay'
import SectionHeading from '../common/SectionHeading'
import { fadeUp, staggerContainer } from '../../utils/motion'

const ResidenceShowcase = ({ residences }) => (
  <section className="section-shell">
    <Container>
      <motion.div
        className="space-y-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <SectionHeading
          description="These are placeholder residence types meant to show structure, interaction, and premium imagery treatment."
          eyebrow="Residence showcase"
          title="A layered family of homes, each with its own mood and point of view."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {residences.map((residence) => (
            <motion.article
              key={residence.title}
              className="overflow-hidden rounded-[2rem] border border-brand-border bg-white/[0.03]"
              variants={fadeUp}
            >
              <ImageOverlay
                alt={residence.title}
                className="h-80 rounded-none border-0"
                image={residence.image}
              />
              <div className="space-y-3 p-6">
                <p className="eyebrow">Residence type</p>
                <h3 className="text-2xl">{residence.title}</h3>
                <p className="copy-muted">{residence.detail}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </Container>
  </section>
)

export default ResidenceShowcase
