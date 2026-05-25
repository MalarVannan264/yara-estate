import { motion } from 'framer-motion'
import avanteBuilding from '../../../assets/images/projects/avante/avante-building.jpg'
import avanteMap from '../../../assets/images/projects/avante/avante-map.jpg'
import './avanteLocation.css'

const headerVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.84,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const imageRevealVariants = {
  hidden: { opacity: 0, y: 30, clipPath: 'inset(0 0 12% 0)' },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0 0 0% 0)',
    transition: {
      duration: 0.96,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const cardsVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.74,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const infoCards = [
  {
    label: 'EDUCATION WITHIN REACH',
    copy: "5 of Chennai's most loved schools, all under 10 minutes",
  },
  {
    label: 'HEALTHCARE WITHIN MINUTES',
    copy: 'Apollo, Fortis & specialty clinics on the doorstep',
  },
  {
    label: 'RETAIL & LIFESTYLE NEARBY',
    copy: 'Besant Nagar boutiques, cafés, and the beach — close by',
  },
]

const AvanteLocation = () => (
  <section className="avante-location">
    <div className="avante-location__shell">
      <motion.div
        className="avante-location__header"
        initial="hidden"
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
        variants={headerVariants}
      >
        <p className="avante-location__eyebrow">THE ADYAR ADVANTAGE</p>
        <h2 className="avante-location__heading">
          At the centre
          <br />
          of everything you love.
        </h2>
      </motion.div>

      <div className="avante-location__image-grid">
        <motion.figure
          className="avante-location__image-wrap"
          initial="hidden"
          viewport={{ once: true, amount: 0.2 }}
          whileInView="visible"
          variants={imageRevealVariants}
        >
          <motion.img
            alt="Avante building exterior"
            className="avante-location__image"
            src={avanteBuilding}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.04 }}
          />
        </motion.figure>

        <motion.figure
          className="avante-location__image-wrap"
          initial="hidden"
          viewport={{ once: true, amount: 0.2 }}
          whileInView="visible"
          variants={imageRevealVariants}
        >
          <motion.img
            alt="Map of Avante's Adyar location"
            className="avante-location__image"
            src={avanteMap}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.04 }}
          />
        </motion.figure>
      </div>

      <motion.div
        className="avante-location__cards"
        initial="hidden"
        viewport={{ once: true, amount: 0.16 }}
        whileInView="visible"
        variants={cardsVariants}
      >
        {infoCards.map((card) => (
          <motion.article
            className="avante-location__card"
            key={card.label}
            variants={cardVariants}
            whileHover={{ y: -7 }}
          >
            <p className="avante-location__card-label">{card.label}</p>
            <p className="avante-location__card-copy">{card.copy}</p>
          </motion.article>
        ))}
      </motion.div>
    </div>
  </section>
)

export default AvanteLocation
