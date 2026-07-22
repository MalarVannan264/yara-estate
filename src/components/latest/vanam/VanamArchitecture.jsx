import { motion } from 'framer-motion'
import img1 from '../../../assets/images/projects/vanam/img1.webp'
import img2 from '../../../assets/images/projects/vanam/img2.webp'
import img3 from '../../../assets/images/projects/vanam/img3.webp'
import './vanamArchitecture.css'

const easeOut = [0.22, 1, 0.36, 1]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.84, ease: easeOut } },
}

const features = [
  {
    num: '01',
    title: 'Natural Ventilation',
    desc: 'Cross-flow corridors and shaded courtyards keep interiors cool without compromise.',
  },
  {
    num: '02',
    title: 'Open Courtyards',
    desc: 'Inner gardens that draw daylight, rain and birdsong into daily life.',
  },
  {
    num: '03',
    title: 'Abundant Daylight',
    desc: 'North-facing apertures and clerestories bathe every room in soft light.',
  },
  {
    num: '04',
    title: 'Landscape Integration',
    desc: 'Stone bases melt into the contours of the hill — built and grown become one.',
  },
  {
    num: '05',
    title: 'Timeless Materials',
    desc: 'Local granite, rough teak, lime plaster and copper that weather with grace.',
  },
]

const villas = [
  {
    img: img1,
    alt: 'The Shire — Hill Sanctuary villa at Vanam',
    tag: 'The Shire',
    name: 'Hill Sanctuary',
    desc: 'Elegant hillside living perched among canopy lines, with deep verandahs that hold the morning mist.',
  },
  {
    img: img2,
    alt: 'The Courtyard — Estate villa at Vanam',
    tag: 'The Courtyard',
    name: 'Estate',
    desc: 'Private courtyards and garden experiences — water, stone and shadow as quiet companions.',
  },
  {
    img: img3,
    alt: 'The Grand — Residence villa at Vanam',
    tag: 'The Grand',
    name: 'Residence',
    desc: 'Expansive luxury for multi-generational families, generously composed around a central commons.',
  },
]

const VanamArchitecture = () => (
  <section className="vanam-arch">
    <div className="vanam-arch__shell">
      {/* Header */}
      <motion.div
        className="vanam-arch__header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
      >
        <motion.p className="vanam-arch__eyebrow" variants={fadeUp}>
          03 — THE ARCHITECTURE
        </motion.p>
        <motion.h2 className="vanam-arch__heading" variants={fadeUp}>
          Architecture Crafted
          <br />
          Around Nature
        </motion.h2>
        <motion.p className="vanam-arch__sub" variants={fadeUp}>
          Designed by renowned architects, every villa embraces an honest
          dialogue with the landscape — light, air, stone and shade in
          measured composition.
        </motion.p>
      </motion.div>

      {/* Features grid */}
      <motion.div
        className="vanam-arch__features"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        {features.map((f) => (
          <motion.div className="vanam-arch__feature" key={f.num} variants={fadeUp}>
            <span className="vanam-arch__feature-num">{f.num}</span>
            <h3 className="vanam-arch__feature-title">{f.title}</h3>
            <p className="vanam-arch__feature-desc">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Villa concepts */}
      <div className="vanam-arch__concepts-header">
        <span className="vanam-arch__concepts-label">— VILLA CONCEPTS</span>
      </div>

      <motion.div
        className="vanam-arch__villas"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        {villas.map((v) => (
          <motion.div className="vanam-arch__villa" key={v.tag} variants={fadeUp}>
            <div className="vanam-arch__villa-img-wrap">
              <img
                alt={v.alt}
                className="vanam-arch__villa-img"
                src={v.img}
              />
            </div>
            <div className="vanam-arch__villa-body">
              <p className="vanam-arch__villa-tag">{v.tag}</p>
              <h3 className="vanam-arch__villa-name">{v.name}</h3>
              <div className="vanam-arch__villa-rule" />
              <p className="vanam-arch__villa-desc">{v.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
)

export default VanamArchitecture
