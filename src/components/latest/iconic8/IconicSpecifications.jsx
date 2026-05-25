import { motion } from 'framer-motion'
import {
  Bath,
  Building2,
  Cctv,
  ChefHat,
  DoorOpen,
  Layers3,
  PanelTop,
  Power,
  ShieldCheck,
  Zap,
} from 'lucide-react'
import './iconicSpecifications.css'

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
    title: 'Structure',
    copy: 'RCC frame, seismic Zone III, solar passive design',
    icon: Building2,
  },
  {
    title: 'Flooring',
    copy: 'Italian marble in living areas, teak in bedrooms',
    icon: Layers3,
  },
  {
    title: 'Doors',
    copy: 'Burma teak with brushed brass, hand-polished',
    icon: DoorOpen,
  },
  {
    title: 'Windows',
    copy: 'Aluminium with thermal break, double-glazed',
    icon: PanelTop,
  },
  {
    title: 'Electrical',
    copy: 'Legrand modular, smart-home ready',
    icon: Zap,
  },
  {
    title: 'Security',
    copy: 'Biometric entry, perimeter sensors, 24-hour concierge',
    icon: ShieldCheck,
  },
  {
    title: 'CCTV',
    copy: 'Hikvision 4K coverage, private monitoring room',
    icon: Cctv,
  },
  {
    title: 'Power',
    copy: '100% backup, silent diesel generator',
    icon: Power,
  },
  {
    title: 'Kitchen',
    copy: 'Bosch appliance suite, Quartz island, hidden pantry',
    icon: ChefHat,
  },
  {
    title: 'Bathrooms',
    copy: 'Grohe, Kohler, Toto suite, marble throughout',
    icon: Bath,
  },
]

const IconicSpecifications = () => (
  <section className="iconic-specifications">
    <div className="iconic-specifications__shell">
      <motion.div
        className="iconic-specifications__header"
        initial="hidden"
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
        variants={headerVariants}
      >
        <div className="iconic-specifications__header-left">
          <p className="iconic-specifications__eyebrow">
            MATERIALS &amp; SPECIFICATIONS
          </p>
          <h2 className="iconic-specifications__heading">In the fine print.</h2>
        </div>

        <p className="iconic-specifications__description">
          Every surface, every fitting, every finish — specified. Nothing left
          to assumption.
        </p>
      </motion.div>

      <motion.div
        className="iconic-specifications__grid"
        initial="hidden"
        viewport={{ once: true, amount: 0.16 }}
        whileInView="visible"
        variants={gridVariants}
      >
        {specificationItems.map((item) => {
          const Icon = item.icon

          return (
            <motion.article
              className="iconic-specifications__item"
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="iconic-specifications__item-icon">
                <Icon size={22} strokeWidth={1.8} />
              </div>

              <h3 className="iconic-specifications__item-title">{item.title}</h3>
              <p className="iconic-specifications__item-copy">{item.copy}</p>
            </motion.article>
          )
        })}
      </motion.div>
    </div>
  </section>
)

export default IconicSpecifications
