import { motion } from 'framer-motion'
import { useState } from 'react'
import './avantePrivatePresentation.css'

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

const AvantePrivatePresentation = () => {
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
    <section className="avante-private-presentation">
      <div className="avante-private-presentation__inner">
        <motion.div
          className="avante-private-presentation__grid"
          initial="hidden"
          viewport={{ amount: 0.2, once: true }}
          whileInView="visible"
        >
          <motion.div
            className="avante-private-presentation__content"
            variants={textVariants}
          >
            <p className="avante-private-presentation__eyebrow">
              PRIVATE PRESENTATION
            </p>

            <h2 className="avante-private-presentation__heading">
              By invitation.
              <br />
              Always.
            </h2>

            <p className="avante-private-presentation__paragraph">
              Avante is shared one home at a time, with a single representative
              who will walk you through the residence, the materials, and the
              address.
            </p>

            <p className="avante-private-presentation__paragraph">
              Leave us your details and we will arrange a private presentation
              at a time that suits you.
            </p>

            <div className="avante-private-presentation__meta">
              <p className="avante-private-presentation__contact">
                +91 44 4000 3030 — Mon to Sat, 10 to 7
              </p>
              <p className="avante-private-presentation__address">
                Plot 21, Sastri Nagar, Adyar, Chennai 600020
              </p>
            </div>
          </motion.div>

          <motion.div
            className="avante-private-presentation__card"
            variants={formVariants}
            whileHover={{ y: -6 }}
          >
            <h3 className="avante-private-presentation__card-title">
              Request a private viewing
            </h3>

            <form
              className="avante-private-presentation__form"
              onSubmit={handleSubmit}
            >
              <label className="avante-private-presentation__field">
                <span className="avante-private-presentation__label">
                  YOUR NAME
                </span>
                <input
                  className="avante-private-presentation__input"
                  name="name"
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  type="text"
                  value={formData.name}
                />
              </label>

              <label className="avante-private-presentation__field">
                <span className="avante-private-presentation__label">PHONE</span>
                <input
                  className="avante-private-presentation__input"
                  name="phone"
                  onChange={handleChange}
                  placeholder="+91"
                  type="tel"
                  value={formData.phone}
                />
              </label>

              <label className="avante-private-presentation__field">
                <span className="avante-private-presentation__label">EMAIL</span>
                <input
                  className="avante-private-presentation__input"
                  name="email"
                  onChange={handleChange}
                  placeholder="name@example.com"
                  type="email"
                  value={formData.email}
                />
              </label>

              <label className="avante-private-presentation__field">
                <span className="avante-private-presentation__label">
                  PREFERRED VISIT TIME
                </span>
                <input
                  className="avante-private-presentation__input"
                  name="preferredVisitTime"
                  onChange={handleChange}
                  placeholder="This weekend, late morning"
                  type="text"
                  value={formData.preferredVisitTime}
                />
              </label>

              <button
                className="avante-private-presentation__submit"
                type="submit"
              >
                REQUEST PRIVATE PRESENTATION
              </button>

              {isSubmitted ? (
                <p className="avante-private-presentation__success">
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

export default AvantePrivatePresentation
