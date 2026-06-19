import { motion } from 'framer-motion'
import featuredImg from '../../../assets/images/projects/vanam/featured-img.jpg'
import './vanamClub.css'

const easeOut = [0.22, 1, 0.36, 1]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.84, ease: easeOut } },
}

const amenities = [
  {
    num: '01',
    title: 'Daily Harvest Café',
    desc: 'Estate-grown coffee, sourdough and seasonal produce served from sunrise.',
  },
  {
    num: '02',
    title: 'Library & Office',
    desc: 'A wood-panelled sanctuary for quiet reading and considered work.',
  },
  {
    num: '03',
    title: 'Sports & Recreation',
    desc: 'Tennis, badminton and outdoor games set within landscaped clearings.',
  },
  {
    num: '04',
    title: 'Yoga Pavilion',
    desc: 'An open-air pavilion oriented toward the eastern ridge for sunrise practice.',
  },
  {
    num: '05',
    title: 'Restaurant',
    desc: 'Slow-cooked regional cuisine, garden-to-table by candlelight.',
  },
  {
    num: '06',
    title: 'Spa & Gym',
    desc: 'Herbal therapies and a full strength suite framed by treetop views.',
  },
  {
    num: '07',
    title: 'Swimming Pool',
    desc: 'A heated infinity pool that meets the horizon at first light.',
  },
  {
    num: '08',
    title: 'Outdoor Gathering',
    desc: 'Bonfire courts and amphitheatre lawns for celebrations under the stars.',
  },
]

const VanamClub = () => (
  <section className="vanam-club">
    <div className="vanam-club__shell">

      {/* Header */}
      <motion.div
        className="vanam-club__header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
      >
        <div className="vanam-club__header-left">
          <motion.p className="vanam-club__eyebrow" variants={fadeUp}>
            04 — CLUB VANAM
          </motion.p>
          <motion.h2 className="vanam-club__heading" variants={fadeUp}>
            Wellness.&nbsp; Leisure.
            <br />
            Community.
          </motion.h2>
        </div>
        <motion.p className="vanam-club__intro" variants={fadeUp}>
          A thoughtfully curated clubhouse experience inspired by wellness
          and connection — where mornings begin with cold-press harvests
          and evenings end under a canopy of stars.
        </motion.p>
      </motion.div>

      {/* Split panel */}
      <motion.div
        className="vanam-club__panel"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.96, ease: easeOut }}
      >
        <div className="vanam-club__panel-img-wrap">
          <img
            alt="Misty forest canopy at Club Vanam"
            className="vanam-club__panel-img"
            src={featuredImg}
          />
        </div>
        <div className="vanam-club__panel-quote">
          <span className="vanam-club__quote-mark">&ldquo;</span>
          <blockquote className="vanam-club__blockquote">
            A clubhouse that breathes — where stone walls hold the warmth
            of fireplaces and the hush of the forest.
          </blockquote>
          <p className="vanam-club__attribution">— DESIGN BRIEF, CLUB VANAM</p>
        </div>
      </motion.div>

      {/* Amenities grid */}
      <motion.div
        className="vanam-club__amenities"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        {amenities.map((a) => (
          <motion.div className="vanam-club__amenity" key={a.num} variants={fadeUp}>
            <span className="vanam-club__amenity-num">{a.num}</span>
            <h3 className="vanam-club__amenity-title">{a.title}</h3>
            <p className="vanam-club__amenity-desc">{a.desc}</p>
          </motion.div>
        ))}
      </motion.div>

    </div>
  </section>
)

export default VanamClub
