import { Compass, Gem, KeyRound, SunMedium } from 'lucide-react'
import { motion } from 'framer-motion'
import Container from '../common/Container'
import { easeOutExpo } from '../../utils/motion'
import './aboutWhoWeAre.css'

const contentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.82,
      ease: easeOutExpo,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: easeOutExpo,
    },
  },
}

const cards = [
  {
    number: '01',
    icon: Compass,
    title: 'Architecture First',
    description: 'Thoughtful spatial planning and timeless architectural design.',
  },
  {
    number: '02',
    icon: Gem,
    title: 'Refined Materials',
    description: 'Luxury textures, natural finishes, and curated detailing.',
  },
  {
    number: '03',
    icon: SunMedium,
    title: 'Elevated Lifestyle',
    description: 'Spaces designed for comfort, calmness, and modern living.',
    featured: true,
  },
  {
    number: '04',
    icon: KeyRound,
    title: 'Boutique Exclusivity',
    description: 'Limited premium developments with unique identity.',
  },
]

const tags = ['MODERN TROPICAL', 'TIMELESS', 'BOUTIQUE']

const AboutWhoWeAre = () => (
  <section className="about-who">
    <Container className="about-who__container">
      <motion.div
        className="about-who__intro"
        initial="hidden"
        variants={contentVariants}
        viewport={{ once: true, amount: 0.2 }}
        whileInView="visible"
      >
        <motion.div className="about-who__eyebrow" variants={itemVariants}>
          <span aria-hidden="true" className="about-who__eyebrow-line" />
          <p>02 — WHO WE ARE</p>
        </motion.div>

        <div className="about-who__grid">
          <motion.h2 className="about-who__title" variants={itemVariants}>
            A Boutique Vision For Modern Luxury Living.
          </motion.h2>

          <motion.div className="about-who__copy" variants={itemVariants}>
            <p className="about-who__paragraph about-who__paragraph--lead">
              We are a design-focused development brand driven by a passion for
              architecture, detail, and elevated living experiences.
            </p>

            <p className="about-who__paragraph">
              Our philosophy combines modern tropical architecture, luxurious spatial
              planning, premium materials, and timeless aesthetics — every YARA
              development is intentionally curated to offer elegance, privacy,
              sophistication, and emotional comfort.
            </p>

            <div className="about-who__tags">
              {tags.map((tag) => (
                <span key={tag} className="about-who__tag">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="about-who__cards"
        initial="hidden"
        variants={contentVariants}
        viewport={{ once: true, amount: 0.18 }}
        whileInView="visible"
      >
        {cards.map((card) => {
          const Icon = card.icon

          return (
            <motion.article
              key={card.title}
              className={`about-who__card${card.featured ? ' about-who__card--featured' : ''}`}
              variants={cardVariants}
            >
              <p className="about-who__card-number">{card.number}</p>
              <div className="about-who__card-icon">
                <Icon aria-hidden="true" size={30} strokeWidth={1.7} />
              </div>
              <h3 className="about-who__card-title">{card.title}</h3>
              <p className="about-who__card-description">{card.description}</p>
              <span aria-hidden="true" className="about-who__card-line" />
            </motion.article>
          )
        })}
      </motion.div>
    </Container>
  </section>
)

export default AboutWhoWeAre
