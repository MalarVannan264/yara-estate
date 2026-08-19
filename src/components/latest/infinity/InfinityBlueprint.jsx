import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import groundFloorPlan from '../../../assets/images/projects/infinity/ground-floor-plan.webp'
import terraceFloorPlan from '../../../assets/images/projects/infinity/terrace-floor-plan.webp'
import fallbackPlan from '../../../assets/images/projects/infinity/left-image.webp'
import typicalFloorPlan from '../../../assets/images/projects/infinity/typical-floor-plan.webp'
import { easeOutExpo } from '../../../utils/motion'
import './infinityBlueprint.css'

const blueprintPlans = [
  {
    id: 'ground',
    label: 'Ground Floor Plan',
    image: groundFloorPlan,
  },
  {
    id: 'typical',
    label: 'Typical Floor Plan',
    image: typicalFloorPlan,
  },
  {
    id: 'terrace',
    label: 'Terrace Floor Plan',
    image: terraceFloorPlan,
  },
]

const introVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOutExpo },
  },
}

const tabVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
}

const imageVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeOutExpo },
  },
}

const InfinityBlueprint = () => {
  const [activePlanId, setActivePlanId] = useState('ground')

  const activePlan = useMemo(
    () => blueprintPlans.find((plan) => plan.id === activePlanId) ?? blueprintPlans[0],
    [activePlanId],
  )

  const handleImageError = (event) => {
    event.currentTarget.src = fallbackPlan
  }

  return (
    <section className="infinity-blueprint">
      <div className="infinity-blueprint__shell">
        <motion.div
          className="infinity-blueprint__intro"
          initial="hidden"
          viewport={{ once: true, amount: 0.25 }}
          whileInView="visible"
          variants={introVariants}
        >
          <h2 className="infinity-blueprint__heading">
            Spaces designed
            <br />
            around you.
          </h2>

          <p className="infinity-blueprint__description">
            Every boutique office is conceived with a balance of openness, privacy and
            effortless movement.
          </p>
        </motion.div>

        <motion.div
          className="infinity-blueprint__composition"
          initial="hidden"
          viewport={{ once: true, amount: 0.2 }}
          whileInView="visible"
          variants={tabVariants}
        >
          <div className="infinity-blueprint__viewer">
            <div
              className="infinity-blueprint__tabs"
              role="tablist"
              aria-label="Infinity blueprint plans"
            >
              {blueprintPlans.map((plan) => (
                <button
                  key={plan.id}
                  aria-selected={activePlanId === plan.id}
                  className={`infinity-blueprint__tab ${
                    activePlanId === plan.id ? 'is-active' : ''
                  }`}
                  onClick={() => setActivePlanId(plan.id)}
                  role="tab"
                  type="button"
                >
                  {plan.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.figure
                key={activePlan.id}
                animate="visible"
                className="infinity-blueprint__frame"
                exit="hidden"
                initial="hidden"
                variants={imageVariants}
              >
                <img
                  alt={`${activePlan.label} — YARA Infinity`}
                  className="infinity-blueprint__image"
                  onError={handleImageError}
                  src={activePlan.image}
                />
              </motion.figure>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default InfinityBlueprint
