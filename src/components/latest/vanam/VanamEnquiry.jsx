import { motion } from 'framer-motion'
import finalBg from '../../../assets/images/projects/vanam/final-bg.jpg'
import './vanamEnquiry.css'

const easeOut = [0.22, 1, 0.36, 1]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: easeOut } },
}

const VanamEnquiry = () => (
  <section className="vanam-enquiry">
    <div
      className="vanam-enquiry__bg"
      style={{ backgroundImage: `url(${finalBg})` }}
    />
    <div className="vanam-enquiry__overlay" />

    <motion.div
      className="vanam-enquiry__content"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={stagger}
    >
      <motion.p className="vanam-enquiry__eyebrow" variants={fadeUp}>
        — A LIMITED COLLECTION —
      </motion.p>

      <motion.h2 className="vanam-enquiry__heading" variants={fadeUp}>
        An Exclusive Collection
        <br />
        Is Taking Shape
      </motion.h2>

      <motion.div className="vanam-enquiry__rule" variants={fadeUp} />

      <motion.p className="vanam-enquiry__paragraph" variants={fadeUp}>
        YARA Vanam is being thoughtfully crafted for those who seek privacy,
        nature and timeless luxury. Be among the first to discover what awaits.
      </motion.p>

      <motion.div className="vanam-enquiry__actions" variants={fadeUp}>
        <a className="vanam-enquiry__btn vanam-enquiry__btn--filled" href="#enquire">
          REGISTER YOUR INTEREST
        </a>
        <a className="vanam-enquiry__btn vanam-enquiry__btn--outline" href="#access">
          GET EARLY ACCESS
        </a>
      </motion.div>

      <motion.p className="vanam-enquiry__meta" variants={fadeUp}>
        PRIVATE PREVIEWS &nbsp;·&nbsp; BY APPOINTMENT &nbsp;·&nbsp; Q4 2026
      </motion.p>
    </motion.div>
  </section>
)

export default VanamEnquiry
