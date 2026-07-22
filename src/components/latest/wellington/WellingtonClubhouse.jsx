import { motion } from 'framer-motion'
import {
  Activity,
  Armchair,
  Baby,
  BookOpen,
  CircleDot,
  Disc3,
  Dumbbell,
  Feather,
  Film,
  Footprints,
  Gamepad2,
  LayoutGrid,
  PartyPopper,
  PersonStanding,
  Target,
  Thermometer,
  ToyBrick,
  Trees,
  Waves,
  Wind,
} from 'lucide-react'
import clubhouseImage from '../../../assets/images/projects/wellington/ambitions-bg.jpg'
import './wellingtonClubhouse.css'

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

const heroVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.92,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const stats = [
  { value: '20+', label: 'CURATED AMENITIES' },
  { value: '3', label: 'COURT TYPES' },
  { value: '12', label: 'INDOOR ACTIVITIES' },
]

const amenities = [
  { icon: Waves, label: 'Swimming Pool' },
  { icon: Baby, label: 'Kids Pool' },
  { icon: Dumbbell, label: 'Gymnasium' },
  { icon: PersonStanding, label: 'Yoga Deck' },
  { icon: Wind, label: 'Steam Room' },
  { icon: Thermometer, label: 'Sauna' },
  { icon: Gamepad2, label: 'Indoor Games' },
  { icon: Target, label: 'Table Tennis' },
  { icon: CircleDot, label: 'Pool Table' },
  { icon: Film, label: 'Mini Theatre' },
  { icon: BookOpen, label: 'Library' },
  { icon: LayoutGrid, label: 'Multipurpose Hall' },
  { icon: Footprints, label: 'Jogging Track' },
  { icon: Trees, label: 'Landscaped Gardens' },
  { icon: ToyBrick, label: 'Play Area' },
  { icon: Armchair, label: 'Senior Zone' },
  { icon: Activity, label: 'Outdoor Fitness' },
  { icon: Feather, label: 'Badminton' },
  { icon: Disc3, label: 'Basketball' },
  { icon: PartyPopper, label: 'Party Lawn' },
]

const WellingtonClubhouse = () => (
  <section className="wellington-clubhouse">
    <div className="wellington-clubhouse__shell">
      <motion.div
        className="wellington-clubhouse__header"
        initial="hidden"
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
        variants={headerVariants}
      >
        <p className="wellington-clubhouse__eyebrow">THE CLUBHOUSE</p>
        <h2 className="wellington-clubhouse__heading">
          A clubhouse designed around
          <br />
          <span className="wellington-clubhouse__heading-accent">
            wellness &amp; leisure.
          </span>
        </h2>
      </motion.div>

      <div className="wellington-clubhouse__hero">
        <motion.figure
          className="wellington-clubhouse__image-wrap"
          initial="hidden"
          viewport={{ once: true, amount: 0.2 }}
          whileInView="visible"
          variants={heroVariants}
        >
          <img
            alt="Premium clubhouse interior at Wellington Village"
            className="wellington-clubhouse__image"
            src={clubhouseImage}
          />
          <div className="wellington-clubhouse__image-caption">
            {/* <p className="wellington-clubhouse__image-tag">40,000 SQ.FT</p> */}
            <p className="wellington-clubhouse__image-title">Premium Clubhouse</p>
          </div>
        </motion.figure>

        <motion.div
          className="wellington-clubhouse__stats"
          initial="hidden"
          viewport={{ once: true, amount: 0.2 }}
          whileInView="visible"
          variants={heroVariants}
        >
          {stats.map((stat) => (
            <div className="wellington-clubhouse__stat" key={stat.label}>
              <p className="wellington-clubhouse__stat-value">{stat.value}</p>
              <p className="wellington-clubhouse__stat-label">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="wellington-clubhouse__grid"
        initial="hidden"
        viewport={{ once: true, amount: 0.1 }}
        whileInView="visible"
        variants={gridVariants}
      >
        {amenities.map((amenity) => {
          const Icon = amenity.icon

          return (
            <motion.div
              className="wellington-clubhouse__item"
              key={amenity.label}
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <div className="wellington-clubhouse__item-icon">
                <Icon size={26} strokeWidth={1.6} />
              </div>
              <p className="wellington-clubhouse__item-label">{amenity.label}</p>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  </section>
)

export default WellingtonClubhouse
