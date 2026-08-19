import { motion, useReducedMotion } from 'framer-motion'
import {
  Building2,
  CarFront,
  DoorOpen,
  MapPin,
  Ruler,
  Square,
} from 'lucide-react'
import { easeOutExpo } from '../../../utils/motion'
import './infinitySpecifications.css'

const specifications = [
  { Icon: MapPin, label: 'Premium Commercial Address' },
  { Icon: Building2, label: '5 Floors' },
  { Icon: DoorOpen, label: '10 Boutique Office Spaces' },
  { Icon: CarFront, label: '4 Car Parks per Floor' },
  { Icon: Ruler, label: '4200 sq ft Floors' },
  { Icon: Square, label: '1440 sq ft UDS' },
]

const introVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease: easeOutExpo },
  },
}

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
}

const InfinitySpecifications = () => {
  const prefersReducedMotion = useReducedMotion()
  const motionProps = prefersReducedMotion ? { initial: false } : { initial: 'hidden' }

  return (
    <section className="infinity-specifications">
      <div className="infinity-specifications__shell">
        <motion.header
          {...motionProps}
          className="infinity-specifications__intro"
          viewport={{ once: true, amount: 0.25 }}
          whileInView="visible"
          variants={introVariants}
        >
          <div className="infinity-specifications__intro-copy-block">
            <p className="infinity-specifications__eyebrow">
              ARCHITECTURE &amp; SPECIFICATIONS
            </p>
            <h2 className="infinity-specifications__heading">Everything in place.</h2>
          </div>

          <p className="infinity-specifications__intro-note">
            Considered from the arrival court to the last detail of a private terrace.
          </p>
        </motion.header>

        <motion.div
          {...motionProps}
          className="infinity-specifications__grid"
          viewport={{ once: true, amount: 0.12 }}
          whileInView="visible"
          variants={gridVariants}
        >
          {specifications.map(({ Icon, label }) => (
            <motion.article className="infinity-specifications__item" key={label} variants={cardVariants}>
              <Icon aria-hidden="true" className="infinity-specifications__icon" size={28} strokeWidth={1.7} />
              <h4>{label}</h4>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default InfinitySpecifications
