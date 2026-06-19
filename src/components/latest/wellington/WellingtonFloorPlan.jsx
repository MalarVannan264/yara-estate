import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import floorplanImage from '../../../assets/images/projects/wellington/floorplan-bp.jpg'
import './wellingtonFloorPlan.css'

const floors = ['GROUND', 'FIRST', 'SECOND']

const villaTypes = {
  '2747': {
    type: 'TYPE A',
    sqft: '2747 Sq.Ft',
    title: '4 BHK Villa',
    specs: [
      { label: 'Built-up Area', value: '2,747 sq.ft' },
      { label: 'Plot Size', value: '2,200 sq.ft' },
      { label: 'Bedrooms', value: '4' },
      { label: 'Bathrooms', value: '4' },
      { label: 'Parking', value: '2 Cars' },
      { label: 'Floors', value: 'G + 2' },
    ],
  },
  '3200': {
    type: 'TYPE B',
    sqft: '3200 Sq.Ft',
    title: '4 BHK Premium Villa',
    specs: [
      { label: 'Built-up Area', value: '3,200 sq.ft' },
      { label: 'Plot Size', value: '2,400 sq.ft' },
      { label: 'Bedrooms', value: '4 + Study' },
      { label: 'Bathrooms', value: '5' },
      { label: 'Parking', value: '2 Cars' },
      { label: 'Floors', value: 'G + 2' },
    ],
  },
  '4000': {
    type: 'TYPE C',
    sqft: '4000 Sq.Ft',
    title: '4 BHK Grand Villa',
    specs: [
      { label: 'Built-up Area', value: '4,000 sq.ft' },
      { label: 'Plot Size', value: '3,000 sq.ft' },
      { label: 'Bedrooms', value: '4 + Study + Den' },
      { label: 'Bathrooms', value: '6' },
      { label: 'Parking', value: '2 Cars' },
      { label: 'Floors', value: 'G + 2' },
    ],
  },
  '5100': {
    type: 'TYPE D',
    sqft: '5100 Sq.Ft',
    title: '5 BHK Signature Villa',
    specs: [
      { label: 'Built-up Area', value: '5,100 sq.ft' },
      { label: 'Plot Size', value: '3,600 sq.ft' },
      { label: 'Bedrooms', value: '5 + Study' },
      { label: 'Bathrooms', value: '6' },
      { label: 'Parking', value: '3 Cars' },
      { label: 'Floors', value: 'G + 2' },
    ],
  },
}

const sizeOptions = Object.keys(villaTypes)

const headerVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.84,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const contentVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const WellingtonFloorPlan = () => {
  const [activeSize, setActiveSize] = useState('3200')
  const [activeFloor, setActiveFloor] = useState('GROUND')

  const villa = villaTypes[activeSize]

  return (
    <section className="wellington-floorplan">
      <div className="wellington-floorplan__shell">
        <motion.div
          className="wellington-floorplan__header"
          initial="hidden"
          viewport={{ once: true, amount: 0.3 }}
          whileInView="visible"
          variants={headerVariants}
        >
          <div className="wellington-floorplan__header-left">
            <p className="wellington-floorplan__eyebrow">FLOOR PLANS</p>
            <h2 className="wellington-floorplan__heading">
              Intelligent planning.
              <br />
              <span className="wellington-floorplan__heading-accent">
                Exceptional living.
              </span>
            </h2>
          </div>

          <div
            aria-label="Select villa size"
            className="wellington-floorplan__sizes"
            role="tablist"
          >
            {sizeOptions.map((size) => (
              <button
                aria-selected={activeSize === size}
                className={`wellington-floorplan__size-pill${
                  activeSize === size ? ' is-active' : ''
                }`}
                key={size}
                onClick={() => setActiveSize(size)}
                role="tab"
                type="button"
              >
                {villaTypes[size].sqft}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="wellington-floorplan__layout">
          <div className="wellington-floorplan__card wellington-floorplan__card--plan">
            <div className="wellington-floorplan__plan-header">
              <div>
                <p className="wellington-floorplan__type-label">
                  {villa.type} / {villa.sqft.toUpperCase()}
                </p>
                <h3 className="wellington-floorplan__villa-title">{villa.title}</h3>
              </div>

              <div
                aria-label="Select floor level"
                className="wellington-floorplan__floor-tabs"
                role="tablist"
              >
                {floors.map((floor) => (
                  <button
                    aria-selected={activeFloor === floor}
                    className={`wellington-floorplan__floor-pill${
                      activeFloor === floor ? ' is-active' : ''
                    }`}
                    key={floor}
                    onClick={() => setActiveFloor(floor)}
                    role="tab"
                    type="button"
                  >
                    {floor}
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.figure
                animate="visible"
                className="wellington-floorplan__visual"
                initial="hidden"
                key={`${activeSize}-${activeFloor}`}
                variants={contentVariants}
              >
                <img
                  alt={`${villa.title} ${activeFloor.toLowerCase()} floor plan`}
                  className="wellington-floorplan__image"
                  src={floorplanImage}
                />
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="wellington-floorplan__card wellington-floorplan__card--specs">
            <p className="wellington-floorplan__specs-eyebrow">SPECIFICATIONS</p>
            <h3 className="wellington-floorplan__specs-heading">At a glance</h3>

            <AnimatePresence mode="wait">
              <motion.div
                animate="visible"
                className="wellington-floorplan__specs-list"
                initial="hidden"
                key={activeSize}
                variants={contentVariants}
              >
                {villa.specs.map((spec) => (
                  <div className="wellington-floorplan__specs-row" key={spec.label}>
                    <span className="wellington-floorplan__specs-label">
                      {spec.label}
                    </span>
                    <span className="wellington-floorplan__specs-value">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            <button className="wellington-floorplan__download" type="button">
              DOWNLOAD PLAN
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WellingtonFloorPlan
