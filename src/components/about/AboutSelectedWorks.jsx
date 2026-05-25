import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Container from '../common/Container'
import { easeOutExpo } from '../../utils/motion'
import avanteMain from '../../assets/images/about/avante-main.jpg'
import avanteGallery1 from '../../assets/images/about/avante-gallery-1.jpg'
import avanteGallery2 from '../../assets/images/about/avante-gallery-2.jpg'
import avanteGallery3 from '../../assets/images/about/avante-gallery-3.jpg'
import iconicMain from '../../assets/images/about/iconic-main.jpg'
import iconicGallery1 from '../../assets/images/about/iconic-gallery-1.jpg'
import iconicGallery2 from '../../assets/images/about/iconic-gallery-2.jpg'
import iconicGallery3 from '../../assets/images/about/iconic-gallery-3.jpg'
import './aboutSelectedWorks.css'

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.88,
      ease: easeOutExpo,
    },
  },
}

const galleryVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
}

const galleryItemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.78,
      ease: easeOutExpo,
    },
  },
}

const projects = [
  {
    label: 'PROJECT 01 / RESIDENTIAL',
    name: 'AVANTE',
    subtitle: 'Modern Tropical Residences',
    description:
      'A refined residential experience blending modern tropical architecture with elegant interior sophistication.',
    details: [
      { label: 'LOCATION', value: 'ECR, Chennai' },
      { label: 'UNITS', value: '24 Villas' },
      { label: 'STATUS', value: 'Now Selling' },
    ],
    href: '/latest/avante',
    theme: 'dark',
    mainImage: avanteMain,
    mainAlt: 'Avante architectural facade',
    gallery: [
      { image: avanteGallery1, alt: 'Avante rooftop lounge' },
      { image: avanteGallery2, alt: 'Avante premium drop-off architecture' },
      { image: avanteGallery3, alt: 'Avante modern living room' },
    ],
  },
  {
    label: 'PROJECT 02 / VILLAS',
    name: 'ICONIC 8',
    subtitle: 'An Exclusive Villa Collection',
    description:
      'An exclusive collection of luxury villas crafted around timeless architecture and elevated living experiences.',
    details: [
      { label: 'LOCATION', value: 'OMR, Chennai' },
      { label: 'UNITS', value: '8 Villas' },
      { label: 'STATUS', value: 'Reservations Open' },
    ],
    href: '/latest/iconic-8',
    theme: 'warm',
    mainImage: iconicMain,
    mainAlt: 'Iconic 8 residential facade',
    gallery: [
      { image: iconicGallery1, alt: 'Iconic 8 living room interior' },
      { image: iconicGallery2, alt: 'Iconic 8 dining area' },
      { image: iconicGallery3, alt: 'Iconic 8 kitchen interior' },
    ],
  },
]

const AboutSelectedWorks = () => (
  <section className="about-selected-works">
    <Container className="about-selected-works__container">
      <motion.div
        className="about-selected-works__header"
        initial="hidden"
        variants={contentVariants}
        viewport={{ once: true, amount: 0.2 }}
        whileInView="visible"
      >
        <motion.div className="about-selected-works__eyebrow" variants={itemVariants}>
          <span
            aria-hidden="true"
            className="about-selected-works__eyebrow-line"
          />
          <p>03 — SELECTED WORKS</p>
        </motion.div>

        <div className="about-selected-works__header-grid">
          <motion.h2 className="about-selected-works__title" variants={itemVariants}>
            A Portfolio of
            <br />
            Quiet Distinction.
          </motion.h2>

          <motion.p className="about-selected-works__intro" variants={itemVariants}>
            Two developments. One philosophy. Each rooted in architecture,
            atmosphere, and timeless living.
          </motion.p>
        </div>
      </motion.div>

      {projects.map((project) => (
        <div className="about-selected-works__project" key={project.name}>
          <motion.div
            className="about-selected-works__feature"
            initial="hidden"
            variants={contentVariants}
            viewport={{ once: true, amount: 0.18 }}
            whileInView="visible"
          >
            <motion.div
              className="about-selected-works__media"
              variants={itemVariants}
            >
              <img alt={project.mainAlt} src={project.mainImage} />
            </motion.div>

            <motion.div
              className={`about-selected-works__panel about-selected-works__panel--${project.theme}`}
              variants={itemVariants}
            >
              <div className="about-selected-works__panel-label">
                <span
                  aria-hidden="true"
                  className="about-selected-works__panel-line"
                />
                <p>{project.label}</p>
              </div>

              <h3 className="about-selected-works__project-name">{project.name}</h3>
              <p className="about-selected-works__subtitle">{project.subtitle}</p>
              <p className="about-selected-works__description">{project.description}</p>

              <div className="about-selected-works__details">
                {project.details.map((detail) => (
                  <div
                    className="about-selected-works__detail"
                    key={`${project.name}-${detail.label}`}
                  >
                    <p className="about-selected-works__detail-label">{detail.label}</p>
                    <p className="about-selected-works__detail-value">{detail.value}</p>
                  </div>
                ))}
              </div>

              <Link className="about-selected-works__cta" to={project.href}>
                <span>VIEW PROJECT</span>
                <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.9} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-selected-works__gallery"
            initial="hidden"
            variants={galleryVariants}
            viewport={{ once: true, amount: 0.16 }}
            whileInView="visible"
          >
            {project.gallery.map((item) => (
              <motion.div
                className="about-selected-works__gallery-item"
                key={item.alt}
                variants={galleryItemVariants}
              >
                <img alt={item.alt} src={item.image} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </Container>
  </section>
)

export default AboutSelectedWorks
