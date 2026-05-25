import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import avanteCard from '../../../assets/images/collections/avante-card.jpg'
import eastCoastCard from '../../../assets/images/collections/east-coast-card.jpg'
import iconic8Card from '../../../assets/images/collections/iconic8-card.jpg'
import { fadeUp, staggerContainer } from '../../../utils/motion'
import './premiumResidential.css'

const featuredProject = {
  label: '01 / FEATURED RESIDENCE',
  title: 'ICONIC 8',
  subtitle: 'Modern Tropical Residences',
  description:
    'A refined residential development designed around openness, natural light, calm luxury, and timeless urban living.',
  features: [
    'Boutique Residential Experience',
    'Tropical Modern Architecture',
    'Premium Interior Concepts',
    'Elevated Lifestyle Spaces',
  ],
  location: 'ECR, Chennai',
  units: '24 Villas',
  year: '2026',
  image: iconic8Card,
  link: '/latest/iconic-8',
}

const secondaryProjects = [
  {
    title: 'EAST COAST',
    label: '02 / BOUTIQUE APARTMENTS',
    description:
      'An intimate collection of elegant residences designed with architectural warmth and sophisticated detailing.',
    location: 'Nungambakkam, Chennai',
    image: eastCoastCard,
    link: '/collections',
    tone: 'light',
  },
  {
    title: 'AVANTE',
    label: '03 / LUXURY HIGH-RISE',
    description:
      'A premium vertical living experience blending luxury, wellness, and modern urban sophistication.',
    location: 'MRC Nagar, Chennai',
    image: avanteCard,
    link: '/latest/avante',
    tone: 'dark',
  },
]

const PremiumResidential = () => (
  <section className="premium-residential" id="premium-residential">
    <div className="premium-residential__shell">
      <motion.div
        className="premium-residential__header"
        initial="hidden"
        viewport={{ once: true, amount: 0.25 }}
        whileInView="visible"
        variants={staggerContainer}
      >
        <motion.div className="premium-residential__header-left" variants={fadeUp}>
          <p className="premium-residential__eyebrow">COLLECTION ONE</p>
          <h2 className="premium-residential__heading">Premium Residential</h2>
        </motion.div>

        <motion.div className="premium-residential__header-right" variants={fadeUp}>
          <p className="premium-residential__intro">
            Architectural homes for everyday luxury.
          </p>
        </motion.div>
      </motion.div>

      <motion.article
        className="premium-residential__featured"
        initial="hidden"
        viewport={{ once: true, amount: 0.18 }}
        whileInView="visible"
        variants={fadeUp}
      >
        <div className="premium-residential__featured-content">
          <p className="premium-residential__project-label">{featuredProject.label}</p>
          <h3 className="premium-residential__featured-title">{featuredProject.title}</h3>
          <p className="premium-residential__featured-subtitle">{featuredProject.subtitle}</p>

          <div className="premium-residential__divider" />

          <p className="premium-residential__featured-copy">{featuredProject.description}</p>

          <ul className="premium-residential__feature-list">
            {featuredProject.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <div className="premium-residential__stats">
            <div>
              <span className="premium-residential__stat-label">Location</span>
              <p className="premium-residential__stat-value">{featuredProject.location}</p>
            </div>
            <div>
              <span className="premium-residential__stat-label">Units</span>
              <p className="premium-residential__stat-value">{featuredProject.units}</p>
            </div>
            <div>
              <span className="premium-residential__stat-label">Year</span>
              <p className="premium-residential__stat-value">{featuredProject.year}</p>
            </div>
          </div>
        </div>

        <div className="premium-residential__featured-media">
          <img alt={featuredProject.title} src={featuredProject.image} />

          <div className="premium-residential__featured-media-footer">
            <span className="premium-residential__floating-tag">ICONIC 8 · 01</span>

            <Link
              className="premium-residential__featured-cta"
              to={featuredProject.link}
            >
              EXPLORE PROJECT <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </motion.article>

      <motion.div
        className="premium-residential__grid"
        initial="hidden"
        viewport={{ once: true, amount: 0.2 }}
        whileInView="visible"
        variants={staggerContainer}
      >
        {secondaryProjects.map((project) => (
          <motion.article
            key={project.title}
            className={`premium-residential__card premium-residential__card--${project.tone}`}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.38 }}
          >
            <div className="premium-residential__card-image-wrap">
              <img
                alt={project.title}
                className="premium-residential__card-image"
                src={project.image}
              />
            </div>

            <div className="premium-residential__card-body">
              <p className="premium-residential__project-label">{project.label}</p>
              <h3 className="premium-residential__card-title">{project.title}</h3>
              <p className="premium-residential__card-copy">{project.description}</p>

              <div className="premium-residential__card-footer">
                <p className="premium-residential__card-location">{project.location}</p>
                <Link className="premium-residential__card-link" to={project.link}>
                  VIEW <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  </section>
)

export default PremiumResidential
