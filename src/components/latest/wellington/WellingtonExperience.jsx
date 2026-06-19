import { motion } from 'framer-motion'
import { Compass, Home, Star, Users } from 'lucide-react'
import './wellingtonExperience.css'

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
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.76,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const experiences = [
  {
    number: '01',
    icon: Home,
    title: 'Family Living',
    copy: 'Spaces designed for meaningful moments shared with the people who matter most.',
  },
  {
    number: '02',
    icon: Compass,
    title: 'Contemporary Design',
    copy: 'Clean architecture and timeless aesthetics that age gracefully.',
  },
  {
    number: '03',
    icon: Users,
    title: 'Community Living',
    copy: 'A secure, vibrant neighbourhood with shared experiences.',
  },
  {
    number: '04',
    icon: Star,
    title: 'Everyday Comfort',
    copy: 'Thoughtfully planned homes calibrated for modern family rhythms.',
  },
]

const WellingtonExperience = () => (
  <section className="wellington-experience">
    <div className="wellington-experience__shell">
      <motion.div
        className="wellington-experience__header"
        initial="hidden"
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
        variants={headerVariants}
      >
        <p className="wellington-experience__eyebrow">THE WELLINGTON EXPERIENCE</p>
        <h2 className="wellington-experience__heading">
          Designed around the way
          <br />
          <span className="wellington-experience__heading-accent">you truly live.</span>
        </h2>
      </motion.div>

      <motion.div
        className="wellington-experience__grid"
        initial="hidden"
        viewport={{ once: true, amount: 0.16 }}
        whileInView="visible"
        variants={gridVariants}
      >
        {experiences.map((item) => {
          const Icon = item.icon

          return (
            <motion.article
              className="wellington-experience__item"
              key={item.number}
              variants={itemVariants}
            >
              <div className="wellington-experience__icon">
                <Icon size={28} strokeWidth={1.6} />
              </div>

              <p className="wellington-experience__number">{item.number}</p>
              <h3 className="wellington-experience__title">{item.title}</h3>
              <p className="wellington-experience__copy">{item.copy}</p>
            </motion.article>
          )
        })}
      </motion.div>
    </div>
  </section>
)

export default WellingtonExperience
