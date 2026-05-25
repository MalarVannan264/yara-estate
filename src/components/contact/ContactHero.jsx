import { ArrowRight, CalendarDays, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroBg from '../../assets/images/contact/hero.jpg'
import './contactHero.css'

const ContactHero = () => {
  return (
    <section className="contact-hero">
      <div className="contact-hero__background" style={{ backgroundImage: `url(${heroBg})` }} aria-hidden="true" />

      <div className="contact-hero__layout">
        <div className="contact-hero__content animate-fade-up animate-delay-0">
          <div className="contact-hero__eyebrow animate-fade-up animate-delay-1">
            <span aria-hidden="true" className="contact-hero__eyebrow-line" />
            <p>PRIVATE CONSULTATION</p>
          </div>

          <h1 className="contact-hero__title animate-fade-up animate-delay-2">
            Let&apos;s Create Your Next Living
            Experience.
          </h1>

          <p className="contact-hero__description animate-fade-up animate-delay-3">
            Whether you&apos;re exploring a refined residence, boutique villa, or investment opportunity, our team is here to guide you through every detail with care and discretion.
          </p>

          <div className="contact-hero__actions animate-fade-up animate-delay-4">
            <Link className="contact-hero__button contact-hero__button--primary" to="/collections">
              <span>Explore Residences</span>
              <ArrowRight aria-hidden="true" size={18} strokeWidth={2} />
            </Link>

            <a className="contact-hero__button contact-hero__button--secondary" href="#contact-studio">
              <span>Schedule Presentation</span>
              <CalendarDays aria-hidden="true" size={18} strokeWidth={1.8} />
            </a>
          </div>
        </div>

        <div className="contact-hero__meta animate-fade-up animate-delay-5">
          <div className="contact-hero__location">
            <MapPin aria-hidden="true" size={15} strokeWidth={1.8} />
            <span>CHENNAI</span>
            <span aria-hidden="true" className="contact-hero__meta-separator" />
            <span>TAMIL NADU</span>
          </div>

          <p className="contact-hero__scroll">SCROLL</p>

          <span aria-hidden="true" className="contact-hero__meta-spacer" />
        </div>
      </div>
    </section>
  )
}

export default ContactHero
