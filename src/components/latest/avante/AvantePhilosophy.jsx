import { motion } from 'framer-motion'
import avanteHeroTexture from '../../../assets/images/projects/avante/avante-hero.jpg'
import avanteLogoPanel from '../../../assets/images/projects/avante/avante-logo-panel.jpg'
import './avantePhilosophy.css'

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

const AvantePhilosophy = () => (
  <section className="avante-philosophy">
    <motion.div
      className="avante-philosophy__panel avante-philosophy__panel--visual"
      initial="hidden"
      viewport={{ once: true, amount: 0.25 }}
      whileInView="visible"
      variants={imageVariants}
    >
      <div
        aria-hidden="true"
        className="avante-philosophy__visual-texture"
        style={{
          backgroundImage: `linear-gradient(rgba(34, 37, 28, 0.72), rgba(34, 37, 28, 0.88)), url(${avanteHeroTexture})`,
        }}
      />
      <img
        alt="Avante logo panel"
        className="avante-logo-panel"
        src={avanteLogoPanel}
      />
      <div aria-hidden="true" className="avante-philosophy__visual-glow" />
    </motion.div>

    <div className="avante-philosophy__panel avante-philosophy__panel--content">
      <motion.div
        className="avante-philosophy__content-inner"
        initial="hidden"
        viewport={{ once: true, amount: 0.24 }}
        whileInView="visible"
        variants={textVariants}
      >
        <motion.p className="avante-philosophy__eyebrow" variants={itemVariants}>
          OUR PHILOSOPHY
        </motion.p>

        <motion.h2 className="avante-philosophy__heading" variants={itemVariants}>
          An address above
          <br />
          al
          to cherish.
        </motion.h2>

        <motion.p className="avante-philosophy__paragraph" variants={itemVariants}>
          Avante is a quiet rebellion against the ordinary. Designed for those
          who measure life not in square feet, but in the way a morning light
          filters through teak shutters, the soft hush of trees along the lane,
          and the certainty that this is a home worth inheriting.
        </motion.p>

        <motion.p className="avante-philosophy__paragraph" variants={itemVariants}>
          A boutique tower of just twelve residences, sited within walking
          distance of Adyar&apos;s most loved corners — yet held apart from the
          noise.
        </motion.p>

        <motion.p className="avante-philosophy__signature" variants={itemVariants}>
          — Yara Estates
        </motion.p>
      </motion.div>
    </div>
  </section>
)

export default AvantePhilosophy
