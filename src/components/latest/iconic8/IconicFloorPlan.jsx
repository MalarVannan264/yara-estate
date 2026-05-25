import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import floorPlanImage from '../../../assets/images/projects/iconic8/iconic8-floor-plan.png'
import './iconicFloorPlan.css'

const floors = {
  GROUND: {
    roomLabel: 'ENTRY LOUNGE',
    title: 'The arrival sequence',
    description:
      'A layered entry with soft seating, a quiet powder room, and a threshold that slows the pace before the home opens outward.',
    statValue: '198',
    statUnit: 'SQ.FT.',
    orientation: 'West',
    orientationLabel: 'ORIENT.',
    rooms: [
      { name: 'Lounge', value: '210 SQ.FT.' },
      { name: 'Dining', value: '160 SQ.FT.' },
      { name: 'Kitchen', value: '128 SQ.FT.' },
      { name: 'Powder Room', value: '48 SQ.FT.' },
    ],
  },
  FIRST: {
    roomLabel: 'MASTER BEDROOM',
    title: 'The east-facing suite',
    description:
      'Held apart from the rest of the home. Linen drapery, a private bath, and a small reading lounge.',
    statValue: '224',
    statUnit: 'SQ.FT.',
    orientation: 'East',
    orientationLabel: 'ORIENT.',
    rooms: [
      { name: 'Lounge', value: '225 SQ.FT.' },
      { name: 'Dining', value: '170 SQ.FT.' },
      { name: 'Kitchen', value: '115 SQ.FT.' },
      { name: 'Home Office', value: '120 SQ.FT.' },
    ],
  },
  SECOND: {
    roomLabel: 'FAMILY SUITE',
    title: 'The evening retreat',
    description:
      'A quieter floor for the family quarters, with soft transitions between bedrooms, baths, and a generous landing lounge.',
    statValue: '236',
    statUnit: 'SQ.FT.',
    orientation: 'South',
    orientationLabel: 'ORIENT.',
    rooms: [
      { name: 'Family Lounge', value: '198 SQ.FT.' },
      { name: 'Bedroom 02', value: '174 SQ.FT.' },
      { name: 'Bedroom 03', value: '168 SQ.FT.' },
      { name: 'Study Niche', value: '82 SQ.FT.' },
    ],
  },
  TERRACE: {
    roomLabel: 'SKY PAVILION',
    title: 'The open-air level',
    description:
      'A roof garden pavilion held to the sea breeze, with entertaining space, sunset seating, and a shaded outdoor pantry.',
    statValue: '312',
    statUnit: 'SQ.FT.',
    orientation: 'Sea',
    orientationLabel: 'OUTLOOK',
    rooms: [
      { name: 'Roof Lounge', value: '242 SQ.FT.' },
      { name: 'Outdoor Dining', value: '186 SQ.FT.' },
      { name: 'Pantry', value: '74 SQ.FT.' },
      { name: 'Deck Garden', value: '290 SQ.FT.' },
    ],
  },
}

const tabs = Object.keys(floors)

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

const imageVariants = {
  hidden: { opacity: 0, y: 26, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.92,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const contentVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.56,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const IconicFloorPlan = () => {
  const [activeTab, setActiveTab] = useState('FIRST')
  const activeFloor = floors[activeTab]

  return (
    <section className="iconic-floor-plan">
      <div className="iconic-floor-plan__shell">
        <motion.div
          className="iconic-floor-plan__heading-block"
          initial="hidden"
          viewport={{ once: true, amount: 0.28 }}
          whileInView="visible"
          variants={headerVariants}
        >
          <p className="iconic-floor-plan__eyebrow">THE BLUEPRINT</p>
          <h2 className="iconic-floor-plan__heading">
            Drawn with the
            <br />
            same care it took
            <br />
            to build.
          </h2>
        </motion.div>

        <div className="iconic-floor-plan__layout">
          <motion.figure
            className="iconic-floor-plan__visual"
            initial="hidden"
            viewport={{ once: true, amount: 0.18 }}
            whileInView="visible"
            variants={imageVariants}
          >
            <img
              alt="Iconic 8 floor plan"
              className="iconic-floor-plan__image"
              src={floorPlanImage}
            />
          </motion.figure>

          <div className="iconic-floor-plan__details">
            <div className="iconic-floor-plan__tabs" role="tablist" aria-label="Iconic 8 floor plan levels">
              {tabs.map((tab) => (
                <button
                  aria-selected={activeTab === tab}
                  className={`iconic-floor-plan__tab ${
                    activeTab === tab ? 'is-active' : ''
                  }`}
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  role="tab"
                  type="button"
                >
                  {tab}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                animate="visible"
                className="iconic-floor-plan__content"
                initial="hidden"
                key={activeTab}
                variants={contentVariants}
              >
                <div className="iconic-floor-plan__card">
                  <p className="iconic-floor-plan__room-label">
                    {activeFloor.roomLabel}
                  </p>

                  <h3 className="iconic-floor-plan__room-title">
                    {activeFloor.title}
                  </h3>

                  <div className="iconic-floor-plan__card-rule" />

                  <p className="iconic-floor-plan__room-description">
                    {activeFloor.description}
                  </p>

                  <div className="iconic-floor-plan__meta-rule" />

                  <div className="iconic-floor-plan__stats">
                    <div className="iconic-floor-plan__stat">
                      <p className="iconic-floor-plan__stat-value">
                        {activeFloor.statValue}
                      </p>
                      <p className="iconic-floor-plan__stat-label">
                        {activeFloor.statUnit}
                      </p>
                    </div>

                    <div className="iconic-floor-plan__stat">
                      <p className="iconic-floor-plan__stat-value">
                        {activeFloor.orientation}
                      </p>
                      <p className="iconic-floor-plan__stat-label">
                        {activeFloor.orientationLabel}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="iconic-floor-plan__rooms">
                  <div className="iconic-floor-plan__rooms-rule" />
                  <p className="iconic-floor-plan__rooms-label">OTHER ROOMS</p>

                  <div className="iconic-floor-plan__rooms-list">
                    {activeFloor.rooms.map((room) => (
                      <div className="iconic-floor-plan__rooms-row" key={room.name}>
                        <span>{room.name}</span>
                        <span>{room.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IconicFloorPlan
