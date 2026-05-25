import { motion } from 'framer-motion'
import iconicKitchenImage from '../../../assets/images/projects/iconic8/iconic8-kitchen.jpg'
import './iconicKitchenExperience.css'

const tags = [
  'ITALIAN MARBLE FINISH',
  'HIDDEN AMBIENT LIGHTING',
  'HANDCRAFTED CABINETRY',
]

const headerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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

const IconicKitchenExperience = () => (
  <section className="iconic-kitchen-experience">
    <div className="iconic-kitchen-experience__shell">
      <motion.div
        className="iconic-kitchen-experience__header"
        initial="hidden"
        viewport={{ once: true, amount: 0.24 }}
        whileInView="visible"
        variants={headerVariants}
      >
        <div className="iconic-kitchen-experience__header-left">
          <motion.p
            className="iconic-kitchen-experience__eyebrow"
            variants={itemVariants}
          >
            04 / 06 — THE KITCHEN
          </motion.p>

          <motion.h2
            className="iconic-kitchen-experience__heading"
            variants={itemVariants}
          >
            Crafted in stone
            <br />
            and warm wood.
          </motion.h2>
        </div>

        <motion.p
          className="iconic-kitchen-experience__description"
          variants={itemVariants}
        >
          A working room and a still life. The chef&apos;s kitchen sits behind a
          sliding panel, so the show kitchen always presents itself.
        </motion.p>
      </motion.div>

      <motion.figure
        className="iconic-kitchen-experience__visual"
        initial="hidden"
        viewport={{ once: true, amount: 0.18 }}
        whileInView="visible"
        variants={imageVariants}
      >
        <img
          alt="Iconic 8 kitchen experience"
          className="iconic-kitchen-experience__image"
          src={iconicKitchenImage}
        />

        <motion.div
          className="iconic-kitchen-experience__tags"
          initial="hidden"
          viewport={{ once: true, amount: 0.18 }}
          whileInView="visible"
          variants={headerVariants}
        >
          {tags.map((tag) => (
            <motion.div
              className="iconic-kitchen-experience__tag"
              key={tag}
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <span
                aria-hidden="true"
                className="iconic-kitchen-experience__tag-dot"
              />
              {tag}
            </motion.div>
          ))}
        </motion.div>
      </motion.figure>
    </div>
  </section>
)

export default IconicKitchenExperience
