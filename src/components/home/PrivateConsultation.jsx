import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import './privateConsultation.css'

const textVariants = {
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

const formVariants = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.08,
    },
  },
}

const initialFormData = {
  fullName: '',
  phone: '',
  email: '',
  interestedProject: 'Iconic 8',
  preferredTime: '',
}

const projectOptions = [
  'Iconic 8',
  'Avante',
  'Premium Residential',
  'Retreat Living',
  'Luxury Commercial',
]

const timeOptions = [
  'Saturday · 11:00 AM IST',
  'Saturday · 4:00 PM IST',
  'Sunday · 11:30 AM IST',
  'Weekday · 6:30 PM IST',
  'Video Consultation · Flexible',
]

const contactItems = [
  {
    icon: Phone,
    label: '9994392444',
    href: 'tel:9994392444',
  },
  {
    icon: Mail,
    label: 'info@yaraestates.com',
    href: 'mailto:info@yaraestates.com',
  },
  {
    icon: MapPin,
    label: 'First Floor, Door No.60, 3rd Main Road, Kasturba Nagar, Adyar, Chennai 600020',
  },
]

const PrivateConsultation = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))

    if (isSubmitted) {
      setIsSubmitted(false)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitted(true)
    setFormData(initialFormData)
  }

  return (
    <section className="yara-private-consultation">
      <div className="private-consultation-shell">
        <motion.div
          className="private-consultation-grid"
          initial="hidden"
          viewport={{ once: true, amount: 0.2 }}
          whileInView="visible"
        >
          <motion.div className="private-consultation-copy" variants={textVariants}>
            <p className="private-consultation-eyebrow">PRIVATE CONSULTATION</p>
            <h2 className="private-consultation-heading">
              Begin Your YARA Journey.
            </h2>
            <p className="private-consultation-paragraph">
              A private conversation is the only way to truly understand a YARA
              address. Schedule a hospitality-led consultation at our studio in
              Chennai, or by video.
            </p>

            <div className="private-consultation-contact-list">
              {contactItems.map((item) => {
                const Icon = item.icon

                return item.href ? (
                  <a
                    className="private-consultation-contact-item"
                    href={item.href}
                    key={item.label}
                  >
                    <span className="private-consultation-contact-icon">
                      <Icon size={23} strokeWidth={1.8} />
                    </span>
                    <span className="private-consultation-contact-text">
                      {item.label}
                    </span>
                  </a>
                ) : (
                  <div className="private-consultation-contact-item" key={item.label}>
                    <span className="private-consultation-contact-icon">
                      <Icon size={23} strokeWidth={1.8} />
                    </span>
                    <span className="private-consultation-contact-text">
                      {item.label}
                    </span>
                  </div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            className="private-consultation-card"
            variants={formVariants}
            whileHover={{ y: -6 }}
          >
            <div className="private-consultation-card-header">
              <h3 className="private-consultation-card-title">
                Request a Private Consultation
              </h3>
              <p className="private-consultation-card-subtitle">
                Reserved slots, one-to-one, by appointment.
              </p>
            </div>

            <form className="private-consultation-form" onSubmit={handleSubmit}>
              <div className="private-consultation-form-row">
                <label className="private-consultation-field">
                  <span className="private-consultation-field-label">Full Name</span>
                  <input
                    className="private-consultation-input"
                    name="fullName"
                    onChange={handleChange}
                    placeholder="Ananya Iyer"
                    type="text"
                    value={formData.fullName}
                  />
                </label>

                <label className="private-consultation-field">
                  <span className="private-consultation-field-label">Phone</span>
                  <input
                    className="private-consultation-input"
                    name="phone"
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    type="tel"
                    value={formData.phone}
                  />
                </label>
              </div>

              <label className="private-consultation-field">
                <span className="private-consultation-field-label">Email</span>
                <input
                  className="private-consultation-input"
                  name="email"
                  onChange={handleChange}
                  placeholder="name@email.com"
                  type="email"
                  value={formData.email}
                />
              </label>

              <label className="private-consultation-field">
                <span className="private-consultation-field-label">Interested Project</span>
                <select
                  className="private-consultation-select"
                  name="interestedProject"
                  onChange={handleChange}
                  value={formData.interestedProject}
                >
                  {projectOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label className="private-consultation-field">
                <span className="private-consultation-field-label">
                  Preferred Consultation Time
                </span>
                <select
                  className="private-consultation-select"
                  name="preferredTime"
                  onChange={handleChange}
                  value={formData.preferredTime}
                >
                  <option value="">Select a preferred slot</option>
                  {timeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <button className="private-consultation-submit" type="submit">
                REQUEST PRIVATE CONSULTATION <span aria-hidden="true">→</span>
              </button>

              {isSubmitted ? (
                <p className="private-consultation-success">
                  Thank you. Our team will contact you shortly.
                </p>
              ) : null}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default PrivateConsultation
