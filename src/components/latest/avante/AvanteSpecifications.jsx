import { motion } from 'framer-motion'
import {
  DoorOpen,
  Droplets,
  Layers3,
  MoveVertical,
  PanelsTopLeft,
  Shield,
  Trees,
  Zap,
} from 'lucide-react'
import './avanteSpecifications.css'

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

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const specificationItems = [
  {
    number: '01',
    title: 'Italian Marble Flooring',
    copy: 'Sourced from Carrara quarries, hand-finished and matte sealed.',
    icon: Layers3,
  },
  {
    number: '02',
    title: 'Engineered Wooden Floors',
    copy: 'European oak veneer with multi-layer acoustic dampening.',
    icon: Trees,
  },
  {
    number: '03',
    title: 'Teak Entrance Doors',
    copy: 'Solid Burma teak with brushed brass hardware, hand-polished.',
    icon: DoorOpen,
  },
  {
    number: '04',
    title: 'Schindler Elevators',
    copy: 'Whisper-quiet Swiss engineering, private vestibule access.',
    icon: MoveVertical,
  },
  {
    number: '05',
    title: 'Aluminium French Windows',
    copy: 'Floor-to-ceiling double-glazed panels, frame-thin sightlines.',
    icon: PanelsTopLeft,
  },
  {
    number: '06',
    title: 'Modular Electricals',
    copy: 'Legrand modular switches, smart-home ready wiring backbone.',
    icon: Zap,
  },
  {
    number: '07',
    title: 'Imported Sanitaryware',
    copy: 'Grohe and Kohler suites — every fitting hand-selected.',
    icon: Droplets,
  },
  {
    number: '08',
    title: '24-Hour Security',
    copy: 'Concierge entry, biometric access, private vestibules per home.',
    icon: Shield,
  },
]

const AvanteSpecifications = () => (
  <section className="avante-specifications">
    <div className="avante-specifications__shell">
      <motion.div
        className="avante-specifications__header"
        initial="hidden"
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
        variants={headerVariants}
      >
        <div className="avante-specifications__header-left">
          <p className="avante-specifications__eyebrow">
            ARCHITECTURE & SPECIFICATIONS
          </p>
          <h2 className="avante-specifications__heading">Everything in place.</h2>
        </div>

        <p className="avante-specifications__description">
          Each material specified, each finish considered. This is luxury as
          restraint.
        </p>
      </motion.div>

      <motion.div
        className="avante-specifications__grid"
        initial="hidden"
        viewport={{ once: true, amount: 0.16 }}
        whileInView="visible"
        variants={gridVariants}
      >
        {specificationItems.map((item) => {
          const Icon = item.icon

          return (
            <motion.article
              className="avante-specifications__item"
              key={item.number}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="avante-specifications__item-icon">
                <Icon size={22} strokeWidth={1.8} />
              </div>

              <p className="avante-specifications__item-number">{item.number}</p>
              <h3 className="avante-specifications__item-title">{item.title}</h3>
              <p className="avante-specifications__item-copy">{item.copy}</p>
            </motion.article>
          )
        })}
      </motion.div>
    </div>
  </section>
)

export default AvanteSpecifications
