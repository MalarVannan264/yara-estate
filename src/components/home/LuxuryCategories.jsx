import { motion } from 'framer-motion'
import categoryCommercial from '../../assets/images/homepage/category-commercial.svg'
import categoryResidential from '../../assets/images/homepage/category-residential.svg'
import categoryRetreat from '../../assets/images/homepage/category-retreat.svg'
import Container from '../common/Container'
import { fadeUp, staggerContainer } from '../../utils/motion'

const categories = [
  {
    title: 'Premium Residential',
    copy: 'Refined homes with strong architectural identity and intimate arrival.',
    image: categoryResidential,
  },
  {
    title: 'Retreat Living',
    copy: 'Slow luxury environments shaped around calm, wellness, and privacy.',
    image: categoryRetreat,
  },
  {
    title: 'Luxury Commercial',
    copy: 'Prestige workspaces and hospitality-minded business destinations.',
    image: categoryCommercial,
  },
]

const LuxuryCategories = () => (
  <section className="section-shell bg-[#efe6d8]">
    <Container className="space-y-12">
      <motion.div
        className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp}>
          <p className="eyebrow">Categories</p>
          <h2 className="editorial-title max-w-xl">
            Three Distinct Expressions of Luxury Living.
          </h2>
        </motion.div>
        <motion.p className="copy-muted max-w-2xl lg:justify-self-end" variants={fadeUp}>
          These cards mirror the reference layout with room for category imagery, short
          editorial copy, and future project counts or badges.
        </motion.p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        {categories.map((category) => (
          <motion.article
            key={category.title}
            className="overflow-hidden border border-brand-border bg-[#3a2922] text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4 }}
          >
            <img alt={category.title} className="h-72 w-full object-cover" src={category.image} />
            <div className="space-y-4 p-6">
              <p className="eyebrow text-brand-gold-soft">Luxury category</p>
              <h3 className="font-display text-3xl text-white">{category.title}</h3>
              <p className="text-sm leading-7 text-white/74">{category.copy}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </Container>
  </section>
)

export default LuxuryCategories
