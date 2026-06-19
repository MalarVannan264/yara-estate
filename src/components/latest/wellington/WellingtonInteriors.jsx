import { motion } from 'framer-motion'
import interior1 from '../../../assets/images/projects/wellington/interior1.jpg'
import interior2 from '../../../assets/images/projects/wellington/interior2.jpg'
import interior3 from '../../../assets/images/projects/wellington/interior3.jpg'
import interior4 from '../../../assets/images/projects/wellington/interior4.jpg'
import interior5 from '../../../assets/images/projects/wellington/interior5.jpg'
import interior6 from '../../../assets/images/projects/wellington/interior6.jpg'
import './wellingtonInteriors.css'

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

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const spaces = [
  {
    image: interior1,
    title: 'Living Room',
    tag: 'OPEN, LIGHT-FILLED',
    size: 'large',
  },
  {
    image: interior2,
    title: 'Master Bedroom',
    tag: 'QUIET SANCTUARY',
    size: 'large',
  },
  {
    image: interior3,
    title: 'Dining',
    tag: 'CONVERSATIONAL CENTER',
    size: 'small',
  },
  {
    image: interior4,
    title: 'Kitchen',
    tag: 'DESIGNER-LED',
    size: 'small',
  },
  {
    image: interior5,
    title: 'Family Lounge',
    tag: 'CASUAL GATHERING',
    size: 'small',
  },
  {
    image: interior6,
    title: 'Bathrooms',
    tag: 'SPA-GRADE CALM',
    size: 'small',
  },
]

const WellingtonInteriors = () => (
  <section className="wellington-interiors">
    <div className="wellington-interiors__shell">
      <motion.div
        className="wellington-interiors__header"
        initial="hidden"
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
        variants={headerVariants}
      >
        <div className="wellington-interiors__header-left">
          <p className="wellington-interiors__eyebrow">INTERIORS</p>
          <h2 className="wellington-interiors__heading">
            Crafted for
            <br />
            <span className="wellington-interiors__heading-accent">
              everyday luxury.
            </span>
          </h2>
        </div>

        <p className="wellington-interiors__description">
          Every space is carefully curated to deliver elegance, comfort and
          functionality — for the way you live now and the years ahead.
        </p>
      </motion.div>

      <motion.div
        className="wellington-interiors__grid"
        initial="hidden"
        viewport={{ once: true, amount: 0.12 }}
        whileInView="visible"
        variants={gridVariants}
      >
        {spaces.map((space) => (
          <motion.figure
            className={`wellington-interiors__card wellington-interiors__card--${space.size}`}
            key={space.title}
            variants={cardVariants}
          >
            <div className="wellington-interiors__image-wrap">
              <motion.img
                alt={space.title}
                className="wellington-interiors__image"
                src={space.image}
                transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.04 }}
              />
            </div>

            <figcaption className="wellington-interiors__caption">
              <p className="wellington-interiors__caption-title">{space.title}</p>
              <p className="wellington-interiors__caption-tag">{space.tag}</p>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </div>
  </section>
)

export default WellingtonInteriors
