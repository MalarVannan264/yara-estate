import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { easeOutExpo } from '../../../utils/motion'
import './infinityContact.css'

const initialFormData = {
  name: '',
  phone: '',
  email: '',
  preferredVisitTime: '',
}

const textVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOutExpo },
  },
}

const panelVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeOutExpo, delay: 0.12 },
  },
}

const InfinityContact = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})
  const prefersReducedMotion = useReducedMotion()

  const validateForm = (nextValues) => {
    const nextErrors = {}

    if (!nextValues.name.trim()) {
      nextErrors.name = 'Please enter your name.'
    }

    if (!nextValues.phone.trim()) {
      nextErrors.phone = 'Please enter your phone number.'
    } else if (!/^[0-9+\-\s()]{7,}$/.test(nextValues.phone.trim())) {
      nextErrors.phone = 'Please enter a valid phone number.'
    }

    if (!nextValues.email.trim()) {
      nextErrors.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nextValues.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!nextValues.preferredVisitTime.trim()) {
      nextErrors.preferredVisitTime = 'Please select a preferred time.'
    }

    return nextErrors
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))

    setErrors((current) => ({
      ...current,
      [name]: undefined,
    }))

    if (submitted) {
      setSubmitted(false)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validateForm(formData)

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setSubmitted(false)
      return
    }

    setErrors({})
    setIsSubmitting(true)

    window.setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData(initialFormData)
    }, 450)
  }

  return (
    <section className="infinity-contact">
      <div className="infinity-contact__shell">
        <motion.div
          className="infinity-contact__grid"
          initial={prefersReducedMotion ? false : 'hidden'}
          viewport={{ once: true, amount: 0.18 }}
          whileInView="visible"
        >
          <motion.div className="infinity-contact__intro" variants={textVariants}>
            <p className="infinity-contact__eyebrow">
              <span className="infinity-contact__eyebrow-line" aria-hidden="true" />
              PRIVATE PRESENTATION
            </p>

            <h2 className="infinity-contact__heading">
              By invitation.
              <br />
              Always.
            </h2>

            <p className="infinity-contact__paragraph">
              INFINITY is shared one office at a time, with a dedicated representative
              who will personally walk you through the space, its exceptional materials,
              and its distinguished address.
            </p>

            <p className="infinity-contact__paragraph">
              Leave us your details, and we will arrange a private presentation at a time
              that suits you.
            </p>
          </motion.div>

          <motion.div className="infinity-contact__panel" variants={panelVariants}>
            <h3 className="infinity-contact__panel-title">Request a private viewing</h3>

            <form className="infinity-contact__form" noValidate onSubmit={handleSubmit}>
              <label className="infinity-contact__field">
                <span className="infinity-contact__label">YOUR NAME</span>
                <input
                  aria-invalid={Boolean(errors.name)}
                  className="infinity-contact__input"
                  name="name"
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  type="text"
                  value={formData.name}
                />
                {errors.name ? <span className="infinity-contact__error">{errors.name}</span> : null}
              </label>

              <label className="infinity-contact__field">
                <span className="infinity-contact__label">PHONE</span>
                <input
                  aria-invalid={Boolean(errors.phone)}
                  className="infinity-contact__input"
                  name="phone"
                  onChange={handleChange}
                  placeholder="+91"
                  type="tel"
                  value={formData.phone}
                />
                {errors.phone ? <span className="infinity-contact__error">{errors.phone}</span> : null}
              </label>

              <label className="infinity-contact__field">
                <span className="infinity-contact__label">EMAIL</span>
                <input
                  aria-invalid={Boolean(errors.email)}
                  className="infinity-contact__input"
                  name="email"
                  onChange={handleChange}
                  placeholder="name@example.com"
                  type="email"
                  value={formData.email}
                />
                {errors.email ? <span className="infinity-contact__error">{errors.email}</span> : null}
              </label>

              <label className="infinity-contact__field">
                <span className="infinity-contact__label">PREFERRED VISIT TIME</span>
                <input
                  aria-invalid={Boolean(errors.preferredVisitTime)}
                  className="infinity-contact__input"
                  name="preferredVisitTime"
                  onChange={handleChange}
                  placeholder="This weekend, late morning"
                  type="text"
                  value={formData.preferredVisitTime}
                />
                {errors.preferredVisitTime ? (
                  <span className="infinity-contact__error">{errors.preferredVisitTime}</span>
                ) : null}
              </label>

              <button className="infinity-contact__submit" disabled={isSubmitting} type="submit">
                {isSubmitting ? 'PROCESSING...' : 'REQUEST PRIVATE PRESENTATION'}
              </button>

              {submitted ? (
                <p className="infinity-contact__success">
                  Request received. Our representative will be in touch shortly.
                </p>
              ) : null}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default InfinityContact
