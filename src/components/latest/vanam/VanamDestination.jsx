import { motion } from 'framer-motion'
import yercaudImg from '../../../assets/images/projects/vanam/yercaud-img.webp'
import './vanamDestination.css'

const easeOut = [0.22, 1, 0.36, 1]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.84, ease: easeOut } },
}

const stats = [
  { value: '1,623 m', label: 'Altitude' },
  { value: '22°C', label: 'Avg. Climate' },
  { value: '1842', label: 'Discovered' },
]

const ticker = [
  { word: '1,623m', label: 'Altitude' },
  { word: 'Pleasant', label: 'Climate' },
  { word: 'Coffee', label: 'Estates' },
  { word: 'Hill', label: 'Living' },
  { word: 'Weekend', label: 'Escape' },
  { word: 'Nature', label: 'Lifestyle' },
]

const VanamDestination = () => (
  <section className="vanam-dest">

    {/* Split — content left, image right */}
    <div className="vanam-dest__split">
      <div className="vanam-dest__content-panel">
        <motion.div
          className="vanam-dest__content-inner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
        >
          <motion.p className="vanam-dest__eyebrow" variants={fadeUp}>
            05 — THE DESTINATION
          </motion.p>
          <motion.h2 className="vanam-dest__heading" variants={fadeUp}>
            The Jewel Of
            <br />
            The South
          </motion.h2>
          <motion.p className="vanam-dest__paragraph vanam-dest__paragraph--lead" variants={fadeUp}>
            Situated at an altitude of 1,623 metres, Yercaud offers year-round
            pleasant weather, breathtaking landscapes and a slower pace of life.
          </motion.p>
          <motion.p className="vanam-dest__paragraph" variants={fadeUp}>
            Surrounded by coffee plantations, mist-covered hills and scenic
            viewpoints, it is a destination that inspires every day.
          </motion.p>
          <motion.div className="vanam-dest__stats" variants={fadeUp}>
            {stats.map((s) => (
              <div className="vanam-dest__stat" key={s.label}>
                <p className="vanam-dest__stat-value">{s.value}</p>
                <p className="vanam-dest__stat-label">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="vanam-dest__img-panel"
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, ease: easeOut }}
      >
        <img
          alt="Misty forest path at Yercaud"
          className="vanam-dest__img"
          src={yercaudImg}
        />
      </motion.div>
    </div>

    {/* Bottom ticker */}
    <div className="vanam-dest__ticker">
      {ticker.map((t) => (
        <div className="vanam-dest__ticker-item" key={t.label}>
          <p className="vanam-dest__ticker-word">{t.word}</p>
          <p className="vanam-dest__ticker-label">{t.label}</p>
        </div>
      ))}
    </div>

  </section>
)

export default VanamDestination
