import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Container from '../common/Container'
import mainImage from '../../assets/images/about/philosophy-main.jpg'
import overlayImage from '../../assets/images/about/philosophy-overlay.jpg'
import { easeOutExpo } from '../../utils/motion'
import './aboutPhilosophy.css'

const contentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.88,
      ease: easeOutExpo,
    },
  },
}

const AboutPhilosophy = () => {
  const visualRef = useRef(null)
  const frameRef = useRef(0)
  const pointerStateRef = useRef({
    floatX: '0px',
    floatY: '0px',
    statX: '0px',
    statY: '0px',
  })

  const flushPointerState = () => {
    frameRef.current = 0

    if (!visualRef.current) {
      return
    }

    const { floatX, floatY, statX, statY } = pointerStateRef.current

    visualRef.current.style.setProperty('--philosophy-float-x', floatX)
    visualRef.current.style.setProperty('--philosophy-float-y', floatY)
    visualRef.current.style.setProperty('--philosophy-stat-x', statX)
    visualRef.current.style.setProperty('--philosophy-stat-y', statY)
  }

  const queuePointerState = (floatX, floatY, statX, statY) => {
    pointerStateRef.current = { floatX, floatY, statX, statY }

    if (!frameRef.current) {
      frameRef.current = window.requestAnimationFrame(flushPointerState)
    }
  }

  const handleMouseMove = (event) => {
    if (!visualRef.current) {
      return
    }

    const bounds = visualRef.current.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width
    const y = (event.clientY - bounds.top) / bounds.height

    queuePointerState(
      `${((x - 0.5) * 18).toFixed(2)}px`,
      `${((y - 0.5) * 16).toFixed(2)}px`,
      `${((x - 0.5) * 10).toFixed(2)}px`,
      `${((y - 0.5) * 9).toFixed(2)}px`,
    )
  }

  const handleMouseLeave = () => {
    queuePointerState('0px', '0px', '0px', '0px')
  }

  useEffect(
    () => () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current)
      }
    },
    [],
  )

  return (
    <section className="about-philosophy">
      <Container className="about-philosophy__container">
        <div className="about-philosophy__grid">
          <motion.div
            className="about-philosophy__content"
            initial="hidden"
            variants={contentVariants}
            viewport={{ once: true, amount: 0.25 }}
            whileInView="visible"
          >
            <motion.div className="about-philosophy__eyebrow" variants={itemVariants}>
              <span aria-hidden="true" className="about-philosophy__eyebrow-line" />
              <p>01 — OUR PHILOSOPHY</p>
            </motion.div>

            <motion.h2 className="about-philosophy__title" variants={itemVariants}>
              Luxury Rooted
              <br />
              In Purpose.
            </motion.h2>

            <motion.span
              aria-hidden="true"
              className="about-philosophy__divider"
              variants={itemVariants}
            />

            <motion.p className="about-philosophy__paragraph about-philosophy__paragraph--lead" variants={itemVariants}>
              YARA ESTATES is a premium real estate and architectural development
              brand focused on creating refined living environments that blend modern
              design, functionality, and timeless elegance.
            </motion.p>

            <motion.p className="about-philosophy__paragraph" variants={itemVariants}>
              Every development is thoughtfully crafted with attention to proportion,
              atmosphere, materials, lighting, and lifestyle experience.
            </motion.p>

            <motion.blockquote className="about-philosophy__quote" variants={itemVariants}>
              Rather than building ordinary spaces, we create environments that feel
              personal, elevated, and enduring.
            </motion.blockquote>

            <motion.div className="about-philosophy__label" variants={itemVariants}>
              <span aria-hidden="true" className="about-philosophy__label-line" />
              <p>— YARA ATELIER, CHENNAI</p>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-philosophy__visual"
            initial={{ opacity: 0, y: 42 }}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            ref={visualRef}
            style={{
              '--philosophy-float-x': '0px',
              '--philosophy-float-y': '0px',
              '--philosophy-stat-x': '0px',
              '--philosophy-stat-y': '0px',
            }}
            transition={{ duration: 0.95, ease: easeOutExpo }}
            viewport={{ once: true, amount: 0.25 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="about-philosophy__main-frame">
              <div className="about-philosophy__image-shell about-philosophy__image-shell--main">
                <img
                  alt="YARA architectural residence"
                  className="about-philosophy__image"
                  src={mainImage}
                />
              </div>
            </div>

            <div className="about-philosophy__overlay-frame">
              <div className="about-philosophy__image-shell about-philosophy__image-shell--overlay">
                <img
                  alt="YARA lifestyle pavilion"
                  className="about-philosophy__image"
                  src={overlayImage}
                />
              </div>
            </div>

            <motion.div
              className="about-philosophy__stat-card"
              transition={{ duration: 0.85, delay: 0.22, ease: easeOutExpo }}
              viewport={{ once: true, amount: 0.3 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 26 }}
            >
              <p className="about-philosophy__stat-value">12+</p>
              <p className="about-philosophy__stat-label">
                YEARS OF
                <br />
                CRAFTED LIVING
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default AboutPhilosophy
