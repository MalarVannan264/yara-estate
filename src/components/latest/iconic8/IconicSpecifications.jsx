import { motion } from 'framer-motion'
import {
  Bath,
  Building2,
  ChefHat,
  DoorOpen,
  Droplets,
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
    copy: 'RCC wall frame with solid/AAC blockwork & plastering; BIS456-compliant structural design',
    icon: Building2,
  },
  {
    title: 'Flooring',
    copy: 'Exotic Italian marble in living, kitchen & lobby; engineered wood in master bedrooms; anti-skid vitrified tiles in baths & utility',
    icon: Layers3,
  },
  {
    title: 'Doors',
    copy: '40mm double-veneered teak entrance door; African teak frames throughout; Alumak French doors with Saint Gobain clear glass',
    icon: DoorOpen,
  },
  {
    title: 'Windows',
    copy: 'Alumak aluminium frames with Saint Gobain clear float glass; frosted glass with exhaust fan provision in toilet ventilators',
    icon: PanelTop,
  },
  {
    title: 'Electrical',
    copy: '3-phase supply with Legrand MCB & RCCB; Polycab/Finolex concealed wiring; split AC provision in living & all bedrooms',
    icon: Zap,
  },
  {
    title: 'Security',
    copy: 'Yale digital door lock, video door phone & 24/7 CCTV surveillance with security guards at main entrance',
    icon: ShieldCheck,
  },
  {
    title: 'Plumbing',
    copy: 'CPVC concealed water lines (Astral/Ashirvad); CPVC/PVC external pipes (Supreme/Varun); masonry overhead tank & sump',
    icon: Droplets,
  },
  {
    title: 'Power Backup',
    copy: 'D.G. backup with acoustic enclosure & AMF panel for all common amenities, lighting, motors & pumps',
    icon: Power,
  },
  {
    title: 'Kitchen',
    copy: 'Aquaguard point, exhaust fan & chimney socket; provision for washing machine & dishwasher; full appliance power sockets',
    icon: ChefHat,
  },
  {
    title: 'Bathrooms',
    copy: 'Wall-mounted Catalona EWC; Grohe hot & cold shower mixer; countertop washbasin; vanity counter; false ceiling in all toilets',
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
