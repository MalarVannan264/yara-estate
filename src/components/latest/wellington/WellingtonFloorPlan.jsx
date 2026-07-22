import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import floorplanImage from '../../../assets/images/projects/wellington/floorplan-bp.jpg'
import plan3810TypeAGround from '../../../assets/images/projects/wellington/3810-type-a-ground.png'
import plan3810TypeBFirst from '../../../assets/images/projects/wellington/3810-type-b-first.png'
import plan3810TypeBSecond from '../../../assets/images/projects/wellington/3810-type-b-second.png'
import plan4232TypeBGround from '../../../assets/images/projects/wellington/4232-type-b-ground.png'
import plan4232TypeBFirst from '../../../assets/images/projects/wellington/4232-type-b-first.png'
import plan4232TypeBSecond from '../../../assets/images/projects/wellington/4232-type-b-second.png'
import plan4287TypeCGround from '../../../assets/images/projects/wellington/4287-type-c-ground.png'
import plan4287TypeCFirst from '../../../assets/images/projects/wellington/4287-type-c-first.png'
import plan4287TypeCSecond from '../../../assets/images/projects/wellington/4287-type-c-second.png'
import plan4670TypeDGround from '../../../assets/images/projects/wellington/4670-type-d-ground.png'
import plan4670TypeDFirst from '../../../assets/images/projects/wellington/4670-type-d-first.png'
import plan4670TypeDSecond from '../../../assets/images/projects/wellington/4670-type-d-second.png'
import './wellingtonFloorPlan.css'

const floors = ['GROUND', 'FIRST', 'SECOND']

const villaTypes = {
  '3810': {
    type: 'TYPE A',
    sqft: '3810 Sq.Ft',
    title: '4 BHK Villa',
    specs: [
      { label: 'Plot Area', value: '2,609 sq.ft' },
      { label: 'Common Area', value: '1,056 sq.ft' },
      { label: 'Bedrooms', value: '4' },
      { label: 'Bathrooms', value: '4' },
      { label: 'Parking', value: '2 Cars' },
      { label: 'Floors', value: 'G + 2' },
    ],
    plans: {
      GROUND: plan3810TypeAGround,
      FIRST: plan3810TypeBFirst,
      SECOND: plan3810TypeBSecond,
    },
  },
  '4232': {
    type: 'TYPE B',
    sqft: '4232 Sq.Ft',
    title: '4 BHK Premium Villa',
    specs: [
      { label: 'Plot Area', value: '2,676 sq.ft' },
      { label: 'Common Area', value: '1,085 sq.ft' },
      { label: 'Bedrooms', value: '4' },
      { label: 'Bathrooms', value: '5' },
      { label: 'Parking', value: '2 Cars' },
      { label: 'Floors', value: 'G + 2' },
    ],
    plans: {
      GROUND: plan4232TypeBGround,
      FIRST: plan4232TypeBFirst,
      SECOND: plan4232TypeBSecond,
    },
  },
  '4287': {
    type: 'TYPE C',
    sqft: '4287 Sq.Ft',
    title: '4 BHK Grand Villa',
    specs: [
      { label: 'Plot Area', value: '2,752 sq.ft' },
      { label: 'Common Area', value: '1,105 sq.ft' },
      { label: 'Bedrooms', value: '4 + Study + Den' },
      { label: 'Bathrooms', value: '5' },
      { label: 'Parking', value: '2 Cars' },
      { label: 'Floors', value: 'G + 2' },
    ],
    plans: {
      GROUND: plan4287TypeCGround,
      FIRST: plan4287TypeCFirst,
      SECOND: plan4287TypeCSecond,
    },
  },
  '4670': {
    type: 'TYPE D',
    sqft: '4670 Sq.Ft',
    title: '4 BHK Signature Villa',
    specs: [
      { label: 'Plot Area', value: '3,392 sq.ft' },
      { label: 'Common Area', value: '1,376 sq.ft' },
      { label: 'Bedrooms', value: '4' },
      { label: 'Bathrooms', value: '6' },
      { label: 'Parking', value: '2 Cars' },
      { label: 'Floors', value: 'G + 2' },
    ],
    plans: {
      GROUND: plan4670TypeDGround,
      FIRST: plan4670TypeDFirst,
      SECOND: plan4670TypeDSecond,
    },
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
  const [activeSize, setActiveSize] = useState(sizeOptions[0])
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
                  src={villa.plans[activeFloor]}
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
