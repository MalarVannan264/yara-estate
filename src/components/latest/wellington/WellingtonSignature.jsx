import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useCallback, useEffect, useRef } from 'react'
import signatureImage from '../../../assets/images/projects/wellington/signature-bg.webp'
import './wellingtonSignature.css'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.84,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const highlights = [
  'Double height living spaces',
  'Floor-to-ceiling glazing',
  'Premium imported finishes',
  'Landscaped private gardens',
]

const WellingtonSignature = () => {
  const sectionRef = useRef(null)
  const frameRef = useRef(0)
  const pointerStateRef = useRef({ moveX: '0px', moveY: '0px' })

  const flushPointerState = useCallback(() => {
    frameRef.current = 0

    if (!sectionRef.current) {
      return
    }

    const { moveX, moveY } = pointerStateRef.current
    sectionRef.current.style.setProperty('--signature-move-x', moveX)
    sectionRef.current.style.setProperty('--signature-move-y', moveY)
  }, [])

  const queuePointerState = useCallback(
    (moveX, moveY) => {
      pointerStateRef.current = { moveX, moveY }

      if (!frameRef.current) {
        frameRef.current = window.requestAnimationFrame(flushPointerState)
      }
    },
    [flushPointerState],
  )

  const handleMouseMove = useCallback(
    (event) => {
      if (!sectionRef.current) {
        return
      }

      const bounds = sectionRef.current.getBoundingClientRect()
      const x = (event.clientX - bounds.left) / bounds.width
      const y = (event.clientY - bounds.top) / bounds.height

      const moveX = `${((x - 0.5) * 16).toFixed(2)}px`
      const moveY = `${((y - 0.5) * 12).toFixed(2)}px`

      queuePointerState(moveX, moveY)
    },
    [queuePointerState],
  )

  const handleMouseLeave = useCallback(() => {
    queuePointerState('0px', '0px')
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
      className="wellington-signature"
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={sectionRef}
      style={{ '--signature-move-x': '0px', '--signature-move-y': '0px' }}
    >
      <motion.div
        animate={{ '--signature-scale': '1.03' }}
        className="wellington-signature__bg"
        initial={{ '--signature-scale': '1.08' }}
        style={{ backgroundImage: `url(${signatureImage})` }}
        transition={{ duration: 2.1, ease: [0.22, 1, 0.36, 1] }}
      />
      <div aria-hidden="true" className="wellington-signature__overlay" />

      <motion.div
        animate="visible"
        className="wellington-signature__content"
        initial="hidden"
        variants={containerVariants}
      >
        <motion.div className="wellington-signature__intro" variants={itemVariants}>
          <p className="wellington-signature__eyebrow">SIGNATURE ARCHITECTURE</p>
          <h2 className="wellington-signature__heading">
            Crafting
            <br />
            <span className="wellington-signature__heading-accent">
              tomorrow&apos;s heritage.
            </span>
          </h2>
        </motion.div>

        <motion.div className="wellington-signature__details" variants={itemVariants}>
          <p className="wellington-signature__paragraph">
            The architecture combines contemporary elegance with functional
            planning.
          </p>

          <p className="wellington-signature__paragraph">
            Large openings, warm materials, landscaped surroundings and
            timeless proportions create homes that remain relevant for
            generations.
          </p>

          <ul className="wellington-signature__list">
            {highlights.map((highlight) => (
              <li className="wellington-signature__list-item" key={highlight}>
                <Plus aria-hidden="true" size={16} strokeWidth={2} />
                {highlight}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default WellingtonSignature
