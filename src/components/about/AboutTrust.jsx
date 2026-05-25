import { DraftingCompass, House, Hourglass, Leaf, Sofa } from 'lucide-react'
import { motion } from 'framer-motion'
import Container from '../common/Container'
import { easeOutExpo } from '../../utils/motion'
import './aboutTrust.css'

const headerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.04,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.82,
      ease: easeOutExpo,
    },
  },
}

const cardsVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.78,
      ease: easeOutExpo,
    },
  },
}

const statVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.18,
    },
  },
}

const trustCards = [
  {
    number: '01',
    icon: DraftingCompass,
    title: 'Premium Architectural Planning',
    description:
      'Spatial intelligence, light, and proportion at the heart of every plan.',
  },
  {
    number: '02',
    icon: Sofa,
    title: 'Luxury Interior Concepts',
    description:
      'Curated palettes, refined materials, and considered detailing throughout.',
  },
  {
    number: '03',
    icon: House,
    title: 'Boutique Villa Developments',
    description:
      'Limited residences crafted with character, privacy, and intent.',
    featured: true,
  },
  {
    number: '04',
    icon: Hourglass,
    title: 'Timeless Modern Design',
    description:
      'Lasting silhouettes that resist trend and reward over decades.',
  },
  {
    number: '05',
    icon: Leaf,
    title: 'Curated Living Experiences',
    description:
      'Atmosphere, ritual, and emotion woven into the everyday.',
  },
]

const trustStats = [
  {
    value: '100%',
    label: 'BOUTIQUE OWNERSHIP',
  },
  {
    value: '32',
    label: 'RESIDENCES CRAFTED',
  },
  {
    value: '02',
    label: 'FLAGSHIP DEVELOPMENTS',
  },
  {
    value: '12+',
    label: 'YEARS OF VISION',
  },
]

const AboutTrust = () => (
  <section className="about-trust">
    <Container className="about-trust__container">
      <motion.div
        className="about-trust__header"
        initial="hidden"
        variants={headerVariants}
        viewport={{ once: true, amount: 0.18 }}
        whileInView="visible"
      >
        <motion.div className="about-trust__eyebrow" variants={itemVariants}>
          <span aria-hidden="true" className="about-trust__eyebrow-line" />
          <p>05 — TRUST</p>
          <span aria-hidden="true" className="about-trust__eyebrow-line" />
        </motion.div>

        <motion.h2 className="about-trust__title" variants={itemVariants}>
          Built On Trust,
          <br />
          Designed For Generations.
        </motion.h2>

        <motion.p className="about-trust__intro" variants={itemVariants}>
          At YARA ESTATES, trust is created through transparency, thoughtful design,
          quality execution, and long-term value. Every development reflects our
          commitment to creating homes that people feel proud to own and experience.
        </motion.p>
      </motion.div>

      <motion.div
        className="about-trust__cards"
        initial="hidden"
        variants={cardsVariants}
        viewport={{ once: true, amount: 0.14 }}
        whileInView="visible"
      >
        {trustCards.map((card) => {
          const Icon = card.icon

          return (
            <motion.article
              className={`about-trust__card${card.featured ? ' about-trust__card--featured' : ''}`}
              key={card.title}
              variants={cardVariants}
            >
              <div className="about-trust__card-top">
                <div className="about-trust__card-icon">
                  <Icon aria-hidden="true" size={34} strokeWidth={1.5} />
                </div>

                <p className="about-trust__card-number">{card.number}</p>
              </div>

              <div className="about-trust__card-body">
                <h3 className="about-trust__card-title">{card.title}</h3>
                <p className="about-trust__card-description">{card.description}</p>
              </div>
            </motion.article>
          )
        })}
      </motion.div>

      <motion.div
        className="about-trust__stats"
        initial="hidden"
        variants={statVariants}
        viewport={{ once: true, amount: 0.2 }}
        whileInView="visible"
      >
        {trustStats.map((stat) => (
          <motion.div className="about-trust__stat" key={stat.label} variants={itemVariants}>
            <p className="about-trust__stat-value">{stat.value}</p>
            <p className="about-trust__stat-label">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  </section>
)

export default AboutTrust
