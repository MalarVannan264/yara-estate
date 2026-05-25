import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import premiumResidential from '../../assets/images/homepage/premium-residential.jpg'
import retreatLiving from '../../assets/images/homepage/retreat-living.jpg'
import luxuryCommercial from '../../assets/images/homepage/luxury-commercial.jpg'
import './curatedExperiences.css'

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
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const experiences = [
  {
    index: '01',
    label: 'Residential',
    title: 'Premium Residential',
    description:
      'Boutique residences crafted with architectural elegance, refined interiors, and timeless luxury for elevated family living.',
    image: premiumResidential,
    link: '/collections',
  },
  {
    index: '02',
    label: 'Retreat',
    title: 'Retreat Living',
    description:
      'Immersive living environments inspired by hospitality, wellness, and the serenity of tropical-modern design.',
    image: retreatLiving,
    link: '/collections',
  },
  {
    index: '03',
    label: 'Commercial',
    title: 'Luxury Commercial',
    description:
      'Architecturally curated commercial environments designed to blend prestige, functionality, and elevated brand experiences.',
    image: luxuryCommercial,
    link: '/collections',
  },
]

const handleCardMouseMove = (event) => {
  const card = event.currentTarget
  const bounds = card.getBoundingClientRect()
  const x = (event.clientX - bounds.left) / bounds.width
  const y = (event.clientY - bounds.top) / bounds.height

  const moveX = `${((x - 0.5) * 16).toFixed(2)}px`
  const moveY = `${((y - 0.5) * 12).toFixed(2)}px`

  card.style.setProperty('--card-move-x', moveX)
  card.style.setProperty('--card-move-y', moveY)
}

const handleCardMouseLeave = (event) => {
  const card = event.currentTarget
  card.style.setProperty('--card-move-x', '0px')
  card.style.setProperty('--card-move-y', '0px')
}

const CuratedExperiences = () => (
  <section className="yara-curated-experiences">
    <div className="curated-experiences-shell">
      <motion.div
        className="curated-experiences-header"
        initial="hidden"
        viewport={{ once: true, amount: 0.22 }}
        whileInView="visible"
        variants={headerVariants}
      >
        <div className="curated-experiences-header-left">
          <p className="curated-experiences-eyebrow">CURATED EXPERIENCES</p>
          <h2 className="curated-experiences-heading">
            Three Distinct Expressions
            <br />
            of Luxury Living.
          </h2>
        </div>

        <div className="curated-experiences-header-right">
          <p className="curated-experiences-description">
            Every YARA development is thoughtfully crafted to reflect a unique
            lifestyle experience rooted in architecture, atmosphere, and timeless
            design.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="curated-experiences-grid"
        initial="hidden"
        viewport={{ once: true, amount: 0.16 }}
        whileInView="visible"
        variants={gridVariants}
      >
        {experiences.map((experience) => (
          <motion.article
            key={experience.title}
            className="curated-experience-card"
            onMouseLeave={handleCardMouseLeave}
            onMouseMove={handleCardMouseMove}
            variants={cardVariants}
            whileHover={{ y: -6 }}
          >
            <div className="curated-experience-card-media">
              <img
                alt={experience.title}
                className="curated-experience-card-image"
                src={experience.image}
              />
            </div>
            <div aria-hidden="true" className="curated-experience-card-overlay" />

            <div className="curated-experience-card-box">
              <p className="curated-experience-card-label">
                {experience.index} / {experience.label}
              </p>
              <h3 className="curated-experience-card-title">{experience.title}</h3>
              <p className="curated-experience-card-copy">{experience.description}</p>
              <Link className="curated-experience-card-link" to={experience.link}>
                DISCOVER <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  </section>
)

export default CuratedExperiences
