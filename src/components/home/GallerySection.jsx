import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import gallery01 from '../../assets/images/gallery/gallery-01.svg'
import gallery02 from '../../assets/images/gallery/gallery-02.svg'
import gallery03 from '../../assets/images/gallery/gallery-03.svg'
import gallery04 from '../../assets/images/gallery/gallery-04.svg'
import Container from '../common/Container'
import { fadeUp, staggerContainer } from '../../utils/motion'

const galleryImages = [gallery01, gallery02, gallery03, gallery04]

const GallerySection = () => (
  <section className="section-shell bg-white/50">
    <Container className="space-y-10">
      <motion.div
        className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="space-y-4">
          <motion.p className="eyebrow" variants={fadeUp}>
            Gallery
          </motion.p>
          <motion.h2 className="editorial-title max-w-3xl" variants={fadeUp}>
            A Cinematic Index of Light, Stone, and Stillness.
          </motion.h2>
        </div>
        <motion.div className="flex gap-2" variants={fadeUp}>
          {[ArrowLeft, ArrowRight].map((Icon, index) => (
            <button
              key={index}
              className="inline-flex h-11 w-11 items-center justify-center border border-brand-border bg-white text-brand-text transition hover:border-brand-gold hover:text-brand-gold"
              type="button"
            >
              <Icon size={16} />
            </button>
          ))}
        </motion.div>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {galleryImages.map((image, index) => (
          <motion.div
            key={image}
            className="overflow-hidden border border-brand-border bg-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            whileHover={{ y: -5 }}
          >
            <img alt={`Gallery placeholder ${index + 1}`} className="h-80 w-full object-cover" src={image} />
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
)

export default GallerySection
