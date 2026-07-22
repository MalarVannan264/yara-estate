import { motion } from 'framer-motion'
import {
  Briefcase,
  Car,
  GraduationCap,
  HeartPulse,
  Plane,
  ShoppingBag,
  UtensilsCrossed,
} from 'lucide-react'
import locationMap from '../../../assets/images/projects/wellington/location-bg.webp'
import './wellingtonLocation.css'

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

const mapVariants = {
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

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const proximities = [
  { icon: GraduationCap, title: 'Schools', value: '5 MIN DRIVE' },
  { icon: HeartPulse, title: 'Hospitals', value: '8 MIN DRIVE' },
  { icon: Briefcase, title: 'IT Parks', value: '15 MIN DRIVE' },
  { icon: ShoppingBag, title: 'Shopping', value: '10 MIN DRIVE' },
  { icon: Car, title: 'Major Roads', value: '2 MIN DRIVE' },
  { icon: UtensilsCrossed, title: 'Lifestyle Destinations', value: '12 MIN DRIVE' },
  { icon: Plane, title: 'Airport', value: '45 MIN DRIVE' },
]

const WellingtonLocation = () => (
  <section className="wellington-location">
    <div className="wellington-location__shell">
      <motion.div
        className="wellington-location__header"
        initial="hidden"
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
        variants={headerVariants}
      >
        <p className="wellington-location__eyebrow">LOCATION ADVANTAGE</p>
        <h2 className="wellington-location__heading">
          Connected to everything
          <br />
          <span className="wellington-location__heading-accent">that matters.</span>
        </h2>
      </motion.div>

      <div className="wellington-location__body">
        <motion.figure
          className="wellington-location__map"
          initial="hidden"
          viewport={{ once: true, amount: 0.2 }}
          whileInView="visible"
          variants={mapVariants}
        >
          <img alt="Map of Wellington Village location" src={locationMap} />
        </motion.figure>

        <motion.ul
          className="wellington-location__list"
          initial="hidden"
          viewport={{ once: true, amount: 0.16 }}
          whileInView="visible"
          variants={listVariants}
        >
          {proximities.map((item) => {
            const Icon = item.icon

            return (
              <motion.li
                className="wellington-location__item"
                key={item.title}
                variants={itemVariants}
              >
                <div className="wellington-location__item-icon">
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                <div className="wellington-location__item-text">
                  <p className="wellington-location__item-title">{item.title}</p>
                  <p className="wellington-location__item-value">{item.value}</p>
                </div>
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </div>
  </section>
)

export default WellingtonLocation
