import { ArrowRight, ChevronDown, Clock3, Mail, MapPin, Phone } from 'lucide-react'
import consultationImg from '../../assets/images/contact/contact1.jpg'
import './contactExperience.css'

const infoCards = [
  {
    icon: MapPin,
    label: 'Visit Us',
    lines: ['YARA ESTATES', 'Chennai, Tamil Nadu'],
  },
  {
    icon: Phone,
    label: 'Call Us',
    lines: ['+91 98765 43210'],
  },
  {
    icon: Mail,
    label: 'Email',
    lines: ['info@yaraestates.com'],
  },
  {
    icon: Clock3,
    label: 'Working Hours',
    lines: ['Mon – Sat', '9:30 AM – 6:30 PM'],
  },
]

const ContactExperience = () => {
  return (
    <section className="ce-section" id="contact-experience">
      <div className="ce-container">

        {/* ── MAIN GRID ─────────────────────────────────── */}
        <div className="ce-grid">

          {/* ── LEFT COLUMN ──────────────────────────── */}
          <div className="ce-left">

            {/* Eyebrow */}
            <div className="ce-eyebrow ce-anim ce-anim--1">
              <span className="ce-eyebrow__line" aria-hidden="true" />
              <p>BEGIN A CONVERSATION</p>
            </div>

            {/* Heading */}
            <h2 className="ce-heading ce-anim ce-anim--2">
              Every Exceptional<br />
              Space Begins With<br />
              a Conversation.
            </h2>

            {/* Description */}
            <p className="ce-description ce-anim ce-anim--3">
              At YARA ESTATES, we believe luxury is personal. Our team offers tailored
              guidance to help you discover residences crafted around timeless
              architecture, refined materials, and elevated living.
            </p>

            {/* Architectural Image */}
            <div className="ce-image-wrap ce-anim ce-anim--4">
              <img
                alt="YARA Estates — luxury architectural residence"
                className="ce-image"
                src={consultationImg}
              />
            </div>
          </div>

          {/* ── RIGHT COLUMN – FORM CARD ─────────────── */}
          <div className="ce-form-card ce-anim ce-anim--5">

            <div className="ce-form-header">
              <h3 className="ce-form-title">Request a Private Consultation</h3>
              <p className="ce-form-sub">Reserved slots, one-to-one, by appointment.</p>
            </div>

            <form className="ce-form" noValidate onSubmit={(e) => e.preventDefault()}>

              {/* Row: Full Name + Phone */}
              <div className="ce-form-row">
                <div className="ce-field">
                  <label className="ce-label" htmlFor="ce-name">Full Name</label>
                  <input
                    className="ce-input"
                    id="ce-name"
                    placeholder="Your Name"
                    type="text"
                  />
                </div>

                <div className="ce-field">
                  <label className="ce-label" htmlFor="ce-phone">Phone</label>
                  <input
                    className="ce-input"
                    id="ce-phone"
                    placeholder="+91 ___ ___ ____"
                    type="tel"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="ce-field">
                <label className="ce-label" htmlFor="ce-email">Email</label>
                <input
                  className="ce-input"
                  id="ce-email"
                  placeholder="name@email.com"
                  type="email"
                />
              </div>

              {/* Interested Project */}
              <div className="ce-field ce-field--select">
                <label className="ce-label" htmlFor="ce-project">Interested Project</label>
                <div className="ce-select-wrap">
                  <select className="ce-input ce-select" id="ce-project">
                    <option value="iconic8">Iconic 8</option>
                    <option value="avante">Avante</option>
                    <option value="east-coast">East Coast</option>
                    <option value="collections">All Collections</option>
                  </select>
                  <ChevronDown
                    aria-hidden="true"
                    className="ce-select-icon"
                    size={17}
                    strokeWidth={1.6}
                  />
                </div>
              </div>

              {/* Preferred Consultation Time */}
              <div className="ce-field">
                <label className="ce-label" htmlFor="ce-time">Preferred Consultation Time</label>
                <div className="ce-time-display" id="ce-time">
                  <span>Saturday</span>
                  <span className="ce-time-dot" aria-hidden="true">·</span>
                  <span>11:00 AM IST</span>
                </div>
              </div>

              {/* Divider */}
              <span className="ce-form-divider" aria-hidden="true" />

              {/* Submit Button */}
              <button className="ce-submit" type="submit">
                <span>Request Private Consultation</span>
                <ArrowRight aria-hidden="true" size={18} strokeWidth={1.8} />
              </button>

            </form>
          </div>
        </div>

        {/* ── INFO CARDS GRID ────────────────────────────── */}
        <div className="ce-cards ce-anim ce-anim--6">
          {infoCards.map(({ icon: Icon, label, lines }) => (
            <article className="ce-card" key={label}>
              <div className="ce-card__icon-row">
                <Icon aria-hidden="true" className="ce-card__icon" size={15} strokeWidth={1.8} />
                <span className="ce-card__label">{label}</span>
              </div>
              <div className="ce-card__body">
                {lines.map((line) => (
                  <p className="ce-card__line" key={line}>{line}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ContactExperience
