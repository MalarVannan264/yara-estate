import { Eye, Hammer, PenTool, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import Container from '../common/Container'
import { easeOutExpo } from '../../utils/motion'
import './aboutProcess.css'

const headerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.84,
      ease: easeOutExpo,
    },
  },
}

const cardsVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.82,
      ease: easeOutExpo,
    },
  },
}

const steps = [
  {
    number: '01',
    icon: Eye,
    title: 'Vision',
    description:
      'Understanding the lifestyle, atmosphere, and experience behind every space.',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Design',
    description:
      'Crafting timeless architecture with elegant proportions and refined detailing.',
  },
  {
    number: '03',
    icon: Hammer,
    title: 'Development',
    description:
      'Executing with precision, premium materials, and thoughtful craftsmanship.',
  },
  {
    number: '04',
    icon: Sparkles,
    title: 'Experience',
    description:
      'Delivering spaces that feel luxurious, calm, and emotionally connected.',
  },
]

const AboutProcess = () => (
  <section className="about-process">
    <Container className="about-process__container">
      <motion.div
        className="about-process__header"
        initial="hidden"
        variants={headerVariants}
        viewport={{ once: true, amount: 0.2 }}
        whileInView="visible"
      >
        <motion.div className="about-process__eyebrow" variants={itemVariants}>
          <span aria-hidden="true" className="about-process__eyebrow-line" />
          <p>04 — OUR PROCESS</p>
        </motion.div>

        <div className="about-process__header-grid">
          <motion.h2 className="about-process__title" variants={itemVariants}>
            From Vision to Living
            <br />
            Experience.
          </motion.h2>

          <motion.p className="about-process__intro" variants={itemVariants}>
            A meticulous four-step approach rooted in architectural intent and quiet
            craftsmanship.
          </motion.p>
        </div>

        <motion.span
          aria-hidden="true"
          className="about-process__divider"
          variants={itemVariants}
        />
      </motion.div>

      <motion.div
        className="about-process__grid"
        initial="hidden"
        variants={cardsVariants}
        viewport={{ once: true, amount: 0.16 }}
        whileInView="visible"
      >
        {steps.map((step) => {
          const Icon = step.icon

          return (
            <motion.article
              className="about-process__card"
              key={step.title}
              variants={cardVariants}
            >
              <div className="about-process__card-head">
                <span aria-hidden="true" className="about-process__dot" />
                <p className="about-process__card-number">{step.number}</p>
              </div>

              <div className="about-process__icon">
                <Icon aria-hidden="true" size={35} strokeWidth={1.55} />
              </div>

              <h3 className="about-process__card-title">{step.title}</h3>
              <p className="about-process__card-description">{step.description}</p>
              <span aria-hidden="true" className="about-process__card-line" />
            </motion.article>
          )
        })}
      </motion.div>
    </Container>
  </section>
)

export default AboutProcess
