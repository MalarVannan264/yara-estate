import { motion } from 'framer-motion'
import Container from '../common/Container'
import GlassCard from '../common/GlassCard'
import SectionHeading from '../common/SectionHeading'
import { fadeUp, staggerContainer } from '../../utils/motion'

const AmenitiesStrip = ({ amenities }) => (
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
          description="Premium amenities are framed as atmospheric spaces with purpose, not a checklist of features."
          eyebrow="Amenities"
          title="Hospitality-grade experiences for everyday ritual."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {amenities.map((amenity) => (
            <motion.div key={amenity.title} variants={fadeUp}>
              <GlassCard className="h-full p-6">
                <p className="eyebrow">Signature</p>
                <h3 className="mt-4 text-2xl">{amenity.title}</h3>
                <p className="mt-4 copy-muted">{amenity.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Container>
  </section>
)

export default AmenitiesStrip
