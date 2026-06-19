import { motion } from 'framer-motion'
import {
  Building2,
  Compass,
  Grid2x2,
  MapPin,
  Shield,
  Sparkles,
  TreePine,
  TrendingUp,
} from 'lucide-react'
import './wellingtonWhyChoose.css'

const headerVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.84,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const reasons = [
  {
    icon: Compass,
    title: 'Contemporary Architecture',
    copy: 'Timeless design language that ages with grace.',
  },
  {
    icon: Grid2x2,
    title: 'Spacious Villas',
    copy: 'Generous layouts that breathe — never feel boxed in.',
  },
  {
    icon: Sparkles,
    title: 'Premium Amenities',
    copy: 'Twenty-plus clubhouse experiences for every family member.',
  },
  {
    icon: Shield,
    title: 'Secure Community',
    copy: 'Gated enclave with 24/7 security and managed access.',
  },
  {
    icon: MapPin,
    title: 'Prime Connectivity',
    copy: 'Minutes from schools, work and lifestyle destinations.',
  },
  {
    icon: TreePine,
    title: 'Landscape Design',
    copy: 'Sixty percent open, walkable, deeply landscaped grounds.',
  },
  {
    icon: Building2,
    title: 'Luxury Clubhouse',
    copy: 'A 40,000 sq.ft hospitality-grade family hub.',
  },
  {
    icon: TrendingUp,
    title: 'Long-Term Value',
    copy: 'Limited inventory in a high-appreciation corridor.',
  },
]

const WellingtonWhyChoose = () => (
  <section className="wellington-why">
    <div className="wellington-why__shell">
      <motion.div
        className="wellington-why__header"
        initial="hidden"
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
        variants={headerVariants}
      >
        <div className="wellington-why__header-left">
          <p className="wellington-why__eyebrow">WHY YARA WELLINGTON</p>
          <h2 className="wellington-why__heading">
            Why families choose
            <br />
            <span className="wellington-why__heading-accent">Wellington.</span>
          </h2>
        </div>

        <p className="wellington-why__description">
          Eight reasons families return to Wellington — every one of them
          designed for the next twenty years of life together.
        </p>
      </motion.div>

      <motion.div
        className="wellington-why__grid"
        initial="hidden"
        viewport={{ once: true, amount: 0.1 }}
        whileInView="visible"
        variants={gridVariants}
      >
        {reasons.map((reason) => {
          const Icon = reason.icon

          return (
            <motion.article
              className="wellington-why__card"
              key={reason.title}
              variants={itemVariants}
              whileHover={{ y: -6 }}
            >
              <div className="wellington-why__card-icon">
                <Icon size={26} strokeWidth={1.6} />
              </div>

              <h3 className="wellington-why__card-title">{reason.title}</h3>
              <p className="wellington-why__card-copy">{reason.copy}</p>
            </motion.article>
          )
        })}
      </motion.div>
    </div>
  </section>
)

export default WellingtonWhyChoose
