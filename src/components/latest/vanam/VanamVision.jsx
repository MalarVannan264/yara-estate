import { motion } from 'framer-motion'
import visionImage from '../../../assets/images/projects/vanam/vision-bg.jpg'
import './vanamVision.css'

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

const imageVariants = {
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

const footerVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const VanamVision = () => (
  <section className="vanam-vision">
    <div className="vanam-vision__shell">
      <motion.div
        className="vanam-vision__header"
        initial="hidden"
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
        variants={headerVariants}
      >
        <div className="vanam-vision__header-left">
          <p className="vanam-vision__eyebrow">02 — THE VISION</p>
          <h2 className="vanam-vision__heading">
            Where The Mist
            <br />
            Greets You
          </h2>
        </div>

        <div className="vanam-vision__header-right">
          <p className="vanam-vision__lead">
            Conceived by YARA Estates and envisioned by acclaimed architects,
            Vanam is designed as a retreat from the ordinary.
          </p>

          <p className="vanam-vision__paragraph">
            Every residence is thoughtfully positioned within the landscape,
            creating a seamless connection between architecture and nature.
            A whisper of stone, timber and greenery — held in quiet
            conversation with the hills.
          </p>
        </div>
      </motion.div>

      <motion.figure
        className="vanam-vision__image-wrap"
        initial="hidden"
        viewport={{ once: true, amount: 0.2 }}
        whileInView="visible"
        variants={imageVariants}
      >
        <motion.img
          alt="Misty forest hills at Yercaud"
          className="vanam-vision__image"
          src={visionImage}
          transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.03 }}
        />
      </motion.figure>

      <motion.div
        className="vanam-vision__footer"
        initial="hidden"
        viewport={{ once: true, amount: 0.4 }}
        whileInView="visible"
        variants={footerVariants}
      >
        <p className="vanam-vision__footer-text">YERCAUD HILLS &middot; TAMIL NADU</p>
        <p className="vanam-vision__footer-text">11.7745&deg; N &middot; 78.2095&deg; E</p>
      </motion.div>
    </div>
  </section>
)

export default VanamVision
