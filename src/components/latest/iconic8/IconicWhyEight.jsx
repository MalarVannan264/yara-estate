import { motion } from 'framer-motion'
import './iconicWhyEight.css'

const cards = [
  {
    number: '01',
    title: 'Only Eight Residences',
    copy: 'Boutique by intent — each home individually crafted.',
  },
  {
    number: '02',
    title: 'Private Terrace Lounges',
    copy: 'A rooftop sanctuary that belongs to one family alone.',
  },
  {
    number: '03',
    title: 'Tropical Modern Architecture',
    copy: "Drawn to age beautifully in Chennai's climate.",
  },
  {
    number: '04',
    title: 'Boutique Community Living',
    copy: 'Quiet neighbours, shared landscape, private lives.',
  },
]

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
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const IconicWhyEight = () => (
  <section className="iconic-why-eight">
    <div className="iconic-why-eight__shell">
      <motion.div
        className="iconic-why-eight__header"
        initial="hidden"
        viewport={{ once: true, amount: 0.24 }}
        whileInView="visible"
        variants={headerVariants}
      >
        <p className="iconic-why-eight__eyebrow">WHY ONLY EIGHT</p>
        <h2 className="iconic-why-eight__heading">
          True luxury
          <br />
          is rare.
        </h2>
        <p className="iconic-why-eight__description">
          Iconic 8 was conceived around a single discipline — to never build
          more than we can build with care.
        </p>
      </motion.div>

      <motion.div
        className="iconic-why-eight__grid"
        initial="hidden"
        viewport={{ once: true, amount: 0.14 }}
        whileInView="visible"
        variants={gridVariants}
      >
        {cards.map((card) => (
          <motion.article
            className="iconic-why-eight__card"
            key={card.number}
            variants={itemVariants}
            whileHover={{ y: -6 }}
          >
            <p className="iconic-why-eight__card-number">{card.number}</p>
            <h3 className="iconic-why-eight__card-title">{card.title}</h3>
            <p className="iconic-why-eight__card-copy">{card.copy}</p>
          </motion.article>
        ))}
      </motion.div>
    </div>
  </section>
)

export default IconicWhyEight
