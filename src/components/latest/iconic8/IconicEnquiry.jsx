import { Mail, MapPin, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import './iconicEnquiry.css'

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
  name: '',
  phone: '',
  email: '',
  preferredVisitTime: '',
}

const IconicEnquiry = () => {
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
    <section className="iconic-enquiry">
      <div className="iconic-enquiry__inner">
        <motion.div
          className="iconic-enquiry__grid"
          initial="hidden"
          viewport={{ amount: 0.2, once: true }}
          whileInView="visible"
        >
          <motion.div className="iconic-enquiry__content" variants={textVariants}>
            <p className="iconic-enquiry__eyebrow">PRIVATE PRESENTATION</p>

            <h2 className="iconic-enquiry__heading">
              Begin your
              <br />
              private
              <br />
              presentation.
            </h2>

            <p className="iconic-enquiry__paragraph">
              Iconic 8 is shared one residence at a time. A single
              representative will walk you through the architecture, the
              materials, and the address.
            </p>

            <div className="iconic-enquiry__meta">
              <div className="iconic-enquiry__meta-item">
                <Phone className="iconic-enquiry__meta-icon" size={15} strokeWidth={1.7} />
                <span>9994392444 — Mon to Sat, 10 to 7</span>
              </div>
              <div className="iconic-enquiry__meta-item">
                <Mail className="iconic-enquiry__meta-icon" size={15} strokeWidth={1.7} />
                <span>info@yaraestates.com</span>
              </div>
              <div className="iconic-enquiry__meta-item">
                <MapPin className="iconic-enquiry__meta-icon" size={15} strokeWidth={1.7} />
                <span>First Floor, Door No.60, 3rd Main Road, Kasturba Nagar, Adyar, Chennai 600020</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="iconic-enquiry__card"
            variants={formVariants}
            whileHover={{ y: -6 }}
          >
            <h3 className="iconic-enquiry__card-title">Request consultation</h3>

            <form className="iconic-enquiry__form" onSubmit={handleSubmit}>
              <label className="iconic-enquiry__field">
                <span className="iconic-enquiry__label">YOUR NAME</span>
                <input
                  className="iconic-enquiry__input"
                  name="name"
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  type="text"
                  value={formData.name}
                />
              </label>

              <label className="iconic-enquiry__field">
                <span className="iconic-enquiry__label">PHONE</span>
                <input
                  className="iconic-enquiry__input"
                  name="phone"
                  onChange={handleChange}
                  placeholder="+91"
                  type="tel"
                  value={formData.phone}
                />
              </label>

              <label className="iconic-enquiry__field">
                <span className="iconic-enquiry__label">EMAIL</span>
                <input
                  className="iconic-enquiry__input"
                  name="email"
                  onChange={handleChange}
                  placeholder="name@example.com"
                  type="email"
                  value={formData.email}
                />
              </label>

              <label className="iconic-enquiry__field">
                <span className="iconic-enquiry__label">
                  PREFERRED VISIT TIME
                </span>
                <input
                  className="iconic-enquiry__input"
                  name="preferredVisitTime"
                  onChange={handleChange}
                  placeholder="This weekend, late morning"
                  type="text"
                  value={formData.preferredVisitTime}
                />
              </label>

              <button className="iconic-enquiry__submit" type="submit">
                <span>REQUEST CONSULTATION</span>
                <span aria-hidden="true" className="iconic-enquiry__submit-arrow">
                  →
                </span>
              </button>

              {isSubmitted ? (
                <p className="iconic-enquiry__success">
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

export default IconicEnquiry
