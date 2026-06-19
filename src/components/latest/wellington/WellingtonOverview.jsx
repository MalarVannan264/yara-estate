import { motion } from 'framer-motion'
import wellingtonLogoPanel from '../../../assets/images/projects/wellington/wellington-logo-panel.jpg'
import './wellingtonOverview.css'

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
  { label: 'LOCATION', value: 'Coimbatore' },
  { label: 'TYPOLOGY', value: '4 BHK Villas' },
  { label: 'STATUS', value: 'Pre-Launch' },
]

const WellingtonOverview = () => (
  <section className="wellington-overview">
    <div className="wellington-overview__panel wellington-overview__panel--visual">
      <motion.div
        className="wellington-overview__visual-reveal"
        initial="hidden"
        viewport={{ once: true, amount: 0.25 }}
        whileInView="visible"
        variants={imageVariants}
      >
        <img
          alt="Yara Wellington logo mark"
          className="wellington-overview__logo-panel"
          src={wellingtonLogoPanel}
        />
      </motion.div>
      <div aria-hidden="true" className="wellington-overview__visual-glow" />
    </div>

    <div className="wellington-overview__panel wellington-overview__panel--content">
      <motion.div
        className="wellington-overview__content-inner"
        initial="hidden"
        viewport={{ once: true, amount: 0.24 }}
        whileInView="visible"
        variants={textVariants}
      >
        <motion.p className="wellington-overview__eyebrow" variants={itemVariants}>
          PROJECT OVERVIEW
        </motion.p>

        <motion.h2 className="wellington-overview__heading" variants={itemVariants}>
          A way of life,
          <br />
          <span className="wellington-overview__heading-accent">not just a home.</span>
        </motion.h2>

        <motion.p className="wellington-overview__paragraph" variants={itemVariants}>
          YARA Wellington is a premium villa enclave created for families who
          value space, privacy and refined living.
        </motion.p>

        <motion.p className="wellington-overview__paragraph" variants={itemVariants}>
          Every residence is designed with modern architecture, natural
          ventilation, abundant daylight and thoughtfully planned layouts that
          elevate everyday life.
        </motion.p>

        <motion.div className="wellington-overview__facts" variants={itemVariants}>
          {facts.map((fact) => (
            <div className="wellington-overview__fact" key={fact.label}>
              <p className="wellington-overview__fact-label">{fact.label}</p>
              <p className="wellington-overview__fact-value">{fact.value}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
)

export default WellingtonOverview
