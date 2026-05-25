import { motion } from 'framer-motion'
import {
  Compass,
  Gem,
  MapPin,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from 'lucide-react'
import './whyYARA.css'

const headerVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.82,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.76,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const cards = [
  {
    title: 'Prime Locations',
    description:
      'Hand-selected addresses along Chennai’s emerging luxury corridors.',
    icon: MapPin,
    tone: 'cream',
  },
  {
    title: 'Curated Architecture',
    description:
      'Every elevation is composed by architects, not committee.',
    icon: Compass,
    tone: 'dark',
  },
  {
    title: 'Boutique Developments',
    description:
      'Small-batch projects, never built at scale or in haste.',
    icon: Gem,
    tone: 'cream',
  },
  {
    title: 'Future Appreciation',
    description:
      'Sites chosen for what they will become, not what they are.',
    icon: TrendingUp,
    tone: 'dark',
  },
  {
    title: 'Transparent Process',
    description:
      'Clear documentation, considered pricing, no surprises.',
    icon: ShieldCheck,
    tone: 'cream',
  },
  {
    title: 'Luxury Standards',
    description:
      'Materials, finishes, and details specified to last for generations.',
    icon: Sparkles,
    tone: 'dark',
  },
]

const WhyYARA = () => (
  <section className="yara-why">
    <div className="why-yara-shell">
      <motion.div
        animate="visible"
        className="why-yara-header"
        initial="hidden"
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
        variants={headerVariants}
      >
        <p className="why-yara-eyebrow">THE YARA DIFFERENCE</p>
        <h2 className="why-yara-heading">Crafted Beyond Real Estate.</h2>
        <p className="why-yara-description">
          YARA creates destinations that combine architecture, lifestyle,
          appreciation, and the quiet luxury of emotional living.
        </p>
      </motion.div>

      <motion.div
        className="why-yara-grid"
        initial="hidden"
        viewport={{ once: true, amount: 0.16 }}
        whileInView="visible"
        variants={gridVariants}
      >
        {cards.map((card) => {
          const Icon = card.icon

          return (
            <motion.article
              key={card.title}
              className={`why-yara-card ${card.tone === 'dark' ? 'is-dark' : 'is-cream'}`}
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              <div className="why-yara-card-icon">
                <Icon size={24} strokeWidth={1.7} />
              </div>

              <div className="why-yara-card-content">
                <h3 className="why-yara-card-title">{card.title}</h3>
                <p className="why-yara-card-copy">{card.description}</p>
              </div>
            </motion.article>
          )
        })}
      </motion.div>
    </div>
  </section>
)

export default WhyYARA
