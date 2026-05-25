import { motion } from 'framer-motion'
import diningImage from '../../../assets/images/projects/iconic8/iconic8-dining.jpg'
import './iconicDiningExperience.css'

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
  hidden: { opacity: 0, y: 24, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.92,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const stats = [
  {
    value: 'Solid',
    label: 'TEAK TREADS',
  },
  {
    value: 'Bronze',
    label: 'STEEL SPINE',
  },
]

const IconicDiningExperience = () => (
  <section className="iconic-dining-experience">
    <div className="iconic-dining-experience__shell">
      <div className="iconic-dining-experience__grid">
        <motion.figure
          className="iconic-dining-experience__visual"
          initial="hidden"
          viewport={{ once: true, amount: 0.2 }}
          whileInView="visible"
          variants={imageVariants}
        >
          <img
            alt="Iconic 8 dining and staircase experience"
            className="iconic-dining-experience__image"
            src={diningImage}
          />
        </motion.figure>

        <motion.div
          className="iconic-dining-experience__content"
          initial="hidden"
          viewport={{ once: true, amount: 0.24 }}
          whileInView="visible"
          variants={textVariants}
        >
          <motion.p
            className="iconic-dining-experience__eyebrow"
            variants={itemVariants}
          >
            03 / 06 — ARCHITECTURE
          </motion.p>

          <motion.h2
            className="iconic-dining-experience__heading"
            variants={itemVariants}
          >
            Architecture
            <br />
            as sculpture.
          </motion.h2>

          <motion.div
            className="iconic-dining-experience__rule"
            variants={itemVariants}
          />

          <motion.p
            className="iconic-dining-experience__description"
            variants={itemVariants}
          >
            Solid teak treads cantilever from a single bronze spine. Indoor
            landscaping draws the eye upward; a textured limestone wall holds
            the composition. The staircase isn&apos;t a way up — it&apos;s the
            heart of the home.
          </motion.p>

          <motion.div
            className="iconic-dining-experience__stats"
            variants={textVariants}
          >
            {stats.map((stat) => (
              <motion.div
                className="iconic-dining-experience__stat"
                key={stat.label}
                variants={itemVariants}
              >
                <p className="iconic-dining-experience__stat-value">
                  {stat.value}
                </p>
                <p className="iconic-dining-experience__stat-label">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
)

export default IconicDiningExperience
