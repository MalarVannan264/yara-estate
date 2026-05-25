import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useCallback, useEffect, useRef } from 'react'
import avanteHeroImage from '../../../assets/images/projects/avante/avante-hero.jpg'
import './avanteHero.css'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.86,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const AvanteHero = () => {
  const heroRef = useRef(null)
  const frameRef = useRef(0)
  const pointerStateRef = useRef({
    moveX: '0px',
    moveY: '0px',
    mouseX: '50%',
    mouseY: '50%',
  })

  const flushPointerState = useCallback(() => {
    frameRef.current = 0

    if (!heroRef.current) {
      return
    }

    const { moveX, moveY, mouseX, mouseY } = pointerStateRef.current

    heroRef.current.style.setProperty('--avante-move-x', moveX)
    heroRef.current.style.setProperty('--avante-move-y', moveY)
    heroRef.current.style.setProperty('--avante-mouse-x', mouseX)
    heroRef.current.style.setProperty('--avante-mouse-y', mouseY)
  }, [])

  const queuePointerState = useCallback(
    (moveX, moveY, mouseX, mouseY) => {
      pointerStateRef.current = { moveX, moveY, mouseX, mouseY }

      if (!frameRef.current) {
        frameRef.current = window.requestAnimationFrame(flushPointerState)
      }
    },
    [flushPointerState],
  )

  const handleMouseMove = useCallback(
    (event) => {
      if (!heroRef.current) {
        return
      }

      const bounds = heroRef.current.getBoundingClientRect()
      const x = (event.clientX - bounds.left) / bounds.width
      const y = (event.clientY - bounds.top) / bounds.height

      const moveX = `${((x - 0.5) * 18).toFixed(2)}px`
      const moveY = `${((y - 0.5) * 14).toFixed(2)}px`
      const mouseX = `${(x * 100).toFixed(2)}%`
      const mouseY = `${(y * 100).toFixed(2)}%`

      queuePointerState(moveX, moveY, mouseX, mouseY)
    },
    [queuePointerState],
  )

  const handleMouseLeave = useCallback(() => {
    queuePointerState('0px', '0px', '50%', '50%')
  }, [queuePointerState])

  useEffect(
    () => () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current)
      }
    },
    [],
  )

  return (
    <section
      className="avante-hero"
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={heroRef}
      style={{
        '--avante-move-x': '0px',
        '--avante-move-y': '0px',
        '--avante-mouse-x': '50%',
        '--avante-mouse-y': '50%',
      }}
    >
      <motion.div
        animate={{ '--avante-scale': '1.03' }}
        className="avante-hero__bg"
        initial={{ '--avante-scale': '1.085' }}
        style={{ backgroundImage: `url(${avanteHeroImage})` }}
        transition={{ duration: 1.9, ease: [0.22, 1, 0.36, 1] }}
      />
      <div aria-hidden="true" className="avante-hero__overlay" />
      <div aria-hidden="true" className="avante-hero__spotlight" />

      <motion.div
        animate="visible"
        className="avante-hero__content"
        initial="hidden"
        variants={containerVariants}
      >
        <motion.p className="avante-hero__eyebrow" variants={itemVariants}>
          BOUTIQUE RESIDENCES — ADYAR
        </motion.p>

        <motion.h1 className="avante-hero__heading" variants={itemVariants}>
          The Height
          <br />
          of Living.
        </motion.h1>

        <motion.div className="avante-hero__rule" variants={itemVariants} />

        <motion.p className="avante-hero__description" variants={itemVariants}>
          Boutique residences crafted for modern families in the tree-lined heart
          of Adyar — where heritage meets the rare luxury of restraint.
        </motion.p>

        <motion.div className="avante-hero__actions" variants={itemVariants}>
          <Link className="avante-hero__button avante-hero__button--primary" to="/latest/avante#residences">
            EXPLORE RESIDENCES
          </Link>
          <Link className="avante-hero__button avante-hero__button--secondary" to="/contact">
            SCHEDULE A PRIVATE VISIT
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        animate="visible"
        className="avante-hero__footer"
        initial="hidden"
        variants={containerVariants}
      >
        <motion.div className="avante-hero__tag" variants={itemVariants}>
          <span aria-hidden="true" className="avante-hero__tag-dot" />
          INVITATIONS NOW OPEN — LIMITED RESIDENCES
        </motion.div>

        <motion.div className="avante-hero__scroll" variants={itemVariants}>
          <span aria-hidden="true" className="avante-hero__scroll-line" />
          SCROLL
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AvanteHero
