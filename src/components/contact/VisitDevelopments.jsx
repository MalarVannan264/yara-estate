import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import avanteImg from '../../assets/images/contact/project1.jpg'
import iconic8Img from '../../assets/images/contact/project2.jpg'
import './visitDevelopments.css'

const projects = [
  {
    badge: 'Project 01',
    slug: 'avante',
    title: 'AVANTE',
    description:
      'Modern tropical residences designed for elevated urban living.',
    buttonLabel: 'Discover Avante',
    to: '/avante',
    image: avanteImg,
    imageAlt: 'Avante — modern tropical luxury residence, Chennai',
  },
  {
    badge: 'Project 02 · Limited Edition',
    slug: 'iconic8',
    title: 'ICONIC 8',
    description:
      'A rare collection of eight private villas crafted with timeless architectural elegance.',
    buttonLabel: 'Explore Iconic 8',
    to: '/iconic8',
    image: iconic8Img,
    imageAlt: 'Iconic 8 — eight private villas of architectural elegance, Chennai',
  },
]

const VisitDevelopments = () => {
  return (
    <section className="vd-section" aria-label="Our luxury developments">

      {/* ── HEADER ──────────────────────────────────────── */}
      <div className="vd-header">
        <div className="vd-eyebrow vd-anim vd-anim--1">
          <span className="vd-eyebrow__line" aria-hidden="true" />
          <span className="vd-eyebrow__text">Our Developments</span>
          <span className="vd-eyebrow__line" aria-hidden="true" />
        </div>

        <h2 className="vd-heading vd-anim vd-anim--2">
          Visit our developments&nbsp;— boutique<br />
          residences across Chennai.
        </h2>
      </div>

      {/* ── PROJECT CARDS GRID ──────────────────────────── */}
      <div className="vd-grid">
        {projects.map(({ badge, slug, title, description, buttonLabel, to, image, imageAlt }, i) => (
          <article
            className={`vd-card vd-anim vd-anim--${i + 3}`}
            key={slug}
          >
            {/* Background image */}
            <img
              alt={imageAlt}
              className="vd-card__img"
              src={image}
            />

            {/* Cinematic gradient overlays */}
            <div aria-hidden="true" className="vd-card__overlay-base" />
            <div aria-hidden="true" className="vd-card__overlay-grad" />

            {/* Badge — top left */}
            <span aria-label={`Project type: ${badge}`} className="vd-card__badge">
              {badge}
            </span>

            {/* Bottom content */}
            <div className="vd-card__content">
              <h3 className="vd-card__title">{title}</h3>

              {/* Gold accent line */}
              <span aria-hidden="true" className="vd-card__accent" />

              <p className="vd-card__desc">{description}</p>

              <Link className="vd-card__btn" to={to}>
                <span>{buttonLabel}</span>
                <ArrowRight
                  aria-hidden="true"
                  className="vd-card__btn-icon"
                  size={17}
                  strokeWidth={1.8}
                />
              </Link>
            </div>
          </article>
        ))}
      </div>

    </section>
  )
}

export default VisitDevelopments
