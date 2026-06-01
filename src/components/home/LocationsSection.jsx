import { motion } from 'framer-motion'
import './locationsSection.css'

const MAPS_EMBED =
  'https://maps.google.com/maps?q=Kasturba+Nagar,+Adyar,+Chennai+600020&z=15&output=embed&t=m'

const headerVariants = {
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

const bodyVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
}

const itemVariants = {
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

const mapVariants = {
  hidden: { opacity: 0, y: 36, clipPath: 'inset(0 0 12% 0)' },
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

const locations = [
  {
    title: 'ECR · East Coast Road',
    description: 'Coastal luxury · emerging premium',
    tone: 'gold',
  },
  {
    title: 'OMR · IT Corridor',
    description: 'Urban luxury · enterprise-led growth',
    tone: 'dark',
  },
  {
    title: 'Neelankarai',
    description: 'Beachside calm · established luxury',
    tone: 'sage',
  },
  {
    title: 'Medavakkam',
    description: 'Contemporary · villa-led communities',
    tone: 'gold',
  },
  {
    title: 'Emerging Zones',
    description: 'Future corridors · early-stage value',
    tone: 'sand',
  },
]

const LocationsSection = () => (
  <section className="yara-locations-section">
    <div className="locations-section-shell">
      <motion.div
        className="locations-section-header"
        initial="hidden"
        viewport={{ once: true, amount: 0.28 }}
        whileInView="visible"
        variants={headerVariants}
      >
        <div className="locations-section-header-left">
          <p className="locations-section-eyebrow">CHENNAI · PREMIUM ADDRESSES</p>
          <h2 className="locations-section-heading">Where YARA Builds.</h2>
        </div>

        <p className="locations-section-description">
          Six strategic corridors across Chennai — each chosen for its current
          resonance and future trajectory.
        </p>
      </motion.div>

      <motion.div
        className="locations-section-body"
        initial="hidden"
        viewport={{ once: true, amount: 0.16 }}
        whileInView="visible"
        variants={bodyVariants}
      >
        <motion.figure className="locations-section-map-wrap" variants={mapVariants}>
          <iframe
            allowFullScreen
            aria-label="YARA Estates location map"
            className="locations-section-map"
            frameBorder="0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={MAPS_EMBED}
            title="YARA Estates — Kasturba Nagar, Adyar, Chennai"
          />
        </motion.figure>

        <motion.div className="locations-section-list" variants={bodyVariants}>
          {locations.map((location) => (
            <motion.article
              className="locations-section-item"
              key={location.title}
              variants={itemVariants}
            >
              <div className="locations-section-item-main">
                <span
                  aria-hidden="true"
                  className={`locations-section-item-dot is-${location.tone}`}
                />

                <div className="locations-section-item-copy">
                  <h3 className="locations-section-item-title">{location.title}</h3>
                  <p className="locations-section-item-description">
                    {location.description}
                  </p>
                </div>
              </div>

            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
)

export default LocationsSection
