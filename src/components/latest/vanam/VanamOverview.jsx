import { motion } from 'framer-motion'
import vanamOverlayPanel from '../../../assets/images/projects/vanam/vanam-overlay-panel.webp'
import './vanamOverview.css'

const textVariants = {
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
      duration: 0.84,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 1.08 },
  visible: {
    opacity: 1,
    scale: 1.02,
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const facts = [
  { value: '72%', label: 'Open Green Space' },
  { value: '3.2', label: 'Acres of Sanctuary' },
  { value: '48', label: 'Curated Residences' },
]

const VanamOverview = () => (
  <section className="vanam-overview">
    <div className="vanam-overview__panel vanam-overview__panel--visual">
      <motion.div
        className="vanam-overview__visual-reveal"
        initial="hidden"
        viewport={{ once: true, amount: 0.25 }}
        whileInView="visible"
        variants={imageVariants}
      >
        <img
          alt="Vanam botanical illustration"
          className="vanam-overview__overlay-panel"
          src={vanamOverlayPanel}
        />
      </motion.div>
    </div>

    <div className="vanam-overview__panel vanam-overview__panel--content">
      <motion.div
        className="vanam-overview__content-inner"
        initial="hidden"
        viewport={{ once: true, amount: 0.24 }}
        whileInView="visible"
        variants={textVariants}
      >
        <motion.p className="vanam-overview__eyebrow" variants={itemVariants}>
          THE VANAM EXPERIENCE
        </motion.p>

        <motion.h2 className="vanam-overview__heading" variants={itemVariants}>
          Where Nature
          <br />
          Shapes Every
          <br />
          Experience.
        </motion.h2>

        <motion.div className="vanam-overview__rule" variants={itemVariants} />

        <motion.p className="vanam-overview__paragraph" variants={itemVariants}>
          At YARA VANAM, architecture is designed to exist in harmony with
          nature. Every detail — from pathways and courtyards to light,
          ventilation, and landscape — is crafted to create calmness,
          openness, and emotional comfort.
        </motion.p>

        <motion.p
          className="vanam-overview__paragraph vanam-overview__paragraph--accent"
          variants={itemVariants}
        >
          Inspired by tropical-modern retreat living, VANAM creates spaces
          that feel timeless, immersive, and deeply connected to nature.
        </motion.p>

        <motion.div className="vanam-overview__facts" variants={itemVariants}>
          {facts.map((fact) => (
            <div className="vanam-overview__fact" key={fact.label}>
              <p className="vanam-overview__fact-value">{fact.value}</p>
              <p className="vanam-overview__fact-label">{fact.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
)

export default VanamOverview
