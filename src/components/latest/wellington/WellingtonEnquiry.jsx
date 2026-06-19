import { ArrowRight, MapPin, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import './wellingtonEnquiry.css'

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

const WellingtonEnquiry = () => {
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
    <section className="wellington-enquiry">
      <div className="wellington-enquiry__inner">
        <motion.div
          className="wellington-enquiry__grid"
          initial="hidden"
          viewport={{ amount: 0.2, once: true }}
          whileInView="visible"
        >
          <motion.div className="wellington-enquiry__content" variants={textVariants}>
            <p className="wellington-enquiry__eyebrow">PRIVATE PRESENTATION</p>

            <h2 className="wellington-enquiry__heading">
              Discover a
              <br />
              <span className="wellington-enquiry__heading-accent">
                better way to live.
              </span>
            </h2>

            <div className="wellington-enquiry__rule" />

            <p className="wellington-enquiry__paragraph">
              Schedule a private presentation and explore the Wellington
              community alongside our principal architects.
            </p>

            <div className="wellington-enquiry__rule" />

            <div className="wellington-enquiry__meta">
              <div className="wellington-enquiry__meta-item">
                <Phone
                  className="wellington-enquiry__meta-icon"
                  size={16}
                  strokeWidth={1.7}
                />
                <span>+91 44 4000 8800 — Mon to Sat, 10 to 7</span>
              </div>
              <div className="wellington-enquiry__meta-item">
                <MapPin
                  className="wellington-enquiry__meta-icon"
                  size={16}
                  strokeWidth={1.7}
                />
                <span>Plot 8, ECR, Neelankarai, Chennai 600115</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="wellington-enquiry__card" variants={formVariants}>
            <h3 className="wellington-enquiry__card-title">Request consultation</h3>

            <form className="wellington-enquiry__form" onSubmit={handleSubmit}>
              <label className="wellington-enquiry__field">
                <span className="wellington-enquiry__label">YOUR NAME</span>
                <input
                  className="wellington-enquiry__input"
                  name="name"
                  onChange={handleChange}
                  placeholder="Your full Name"
                  type="text"
                  value={formData.name}
                />
              </label>

              <label className="wellington-enquiry__field">
                <span className="wellington-enquiry__label">PHONE</span>
                <input
                  className="wellington-enquiry__input"
                  name="phone"
                  onChange={handleChange}
                  placeholder="+91"
                  type="tel"
                  value={formData.phone}
                />
              </label>

              <label className="wellington-enquiry__field">
                <span className="wellington-enquiry__label">EMAIL</span>
                <input
                  className="wellington-enquiry__input"
                  name="email"
                  onChange={handleChange}
                  placeholder="aryan@example.com"
                  type="email"
                  value={formData.email}
                />
              </label>

              <label className="wellington-enquiry__field">
                <span className="wellington-enquiry__label">
                  PREFERRED VISIT TIME
                </span>
                <input
                  className="wellington-enquiry__input"
                  name="preferredVisitTime"
                  onChange={handleChange}
                  placeholder="This Saturday, morning"
                  type="text"
                  value={formData.preferredVisitTime}
                />
              </label>

              <button className="wellington-enquiry__submit" type="submit">
                <span>REQUEST CONSULTATION</span>
                <ArrowRight size={18} strokeWidth={2} />
              </button>

              {isSubmitted ? (
                <p className="wellington-enquiry__success">
                  Thank you. Our team will arrange your private presentation
                  shortly.
                </p>
              ) : null}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default WellingtonEnquiry
