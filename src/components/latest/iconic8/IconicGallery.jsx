import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import './iconicGallery.css'

const tabs = ['EXTERIOR', 'INTERIORS', 'TERRACE', 'PLANS']

const gallerySets = {
  EXTERIOR: [
    {
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      alt: 'Tropical modern villa exterior',
      ratio: '1.06',
    },
    {
      image:
        'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1200&q=80',
      alt: 'Courtyard exterior detail',
      ratio: '0.82',
    },
    {
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80&sat=-20',
      alt: 'Minimal architectural facade',
      ratio: '0.94',
    },
    {
      image:
        'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
      alt: 'Soft exterior lounge perspective',
      ratio: '1.18',
    },
    {
      image:
        'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80',
      alt: 'Warm evening elevation',
      ratio: '0.86',
    },
    {
      image:
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
      alt: 'Pool terrace exterior',
      ratio: '0.88',
    },
  ],
  INTERIORS: [
    {
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      alt: 'Soft bedroom interior',
      ratio: '1.42',
    },
    {
      image:
        'https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=1200&q=80',
      alt: 'Minimal studio vignette',
      ratio: '1.14',
    },
    {
      image:
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      alt: 'Premium residence suite',
      ratio: '0.82',
    },
    {
      image:
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
      alt: 'Warm dining and wood details',
      ratio: '0.9',
    },
    {
      image:
        'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80&sat=-8',
      alt: 'Living room with soft light',
      ratio: '1.16',
    },
    {
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80&exp=8',
      alt: 'Layered lounge seating',
      ratio: '0.86',
    },
  ],
  TERRACE: [
    {
      image:
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80&exp=6',
      alt: 'Terrace pool setting',
      ratio: '0.92',
    },
    {
      image:
        'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80&sat=5',
      alt: 'Open air evening lounge',
      ratio: '1.18',
    },
    {
      image:
        'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80',
      alt: 'Outdoor architectural detail',
      ratio: '0.8',
    },
    {
      image:
        'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80&sat=10',
      alt: 'Twilight terrace composition',
      ratio: '1.1',
    },
    {
      image:
        'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1200&q=80&exp=10',
      alt: 'Green skyline terrace view',
      ratio: '0.86',
    },
    {
      image:
        'https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=1200&q=80&sat=-5',
      alt: 'Quiet roof pavilion detail',
      ratio: '1.2',
    },
  ],
  PLANS: [
    {
      image:
        'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80',
      alt: 'Blueprint and model composition',
      ratio: '1.08',
    },
    {
      image:
        'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
      alt: 'Architectural plan table',
      ratio: '0.84',
    },
    {
      image:
        'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
      alt: 'Warm model material board',
      ratio: '1.16',
    },
    {
      image:
        'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
      alt: 'Interior planning sketch',
      ratio: '0.88',
    },
    {
      image:
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
      alt: 'Studio workspace planning scene',
      ratio: '0.92',
    },
    {
      image:
        'https://images.unsplash.com/photo-1529429617124-aee711a5ac1c?auto=format&fit=crop&w=1200&q=80',
      alt: 'Architectural model close-up',
      ratio: '1.22',
    },
  ],
}

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

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const IconicGallery = () => {
  const [activeTab, setActiveTab] = useState('EXTERIOR')

  return (
    <section className="iconic-gallery">
      <div className="iconic-gallery__inner">
        <motion.div
          className="iconic-gallery__header"
          initial="hidden"
          variants={headerVariants}
          viewport={{ amount: 0.25, once: true }}
          whileInView="visible"
        >
          <div className="iconic-gallery__headline">
            <p className="iconic-gallery__eyebrow">GALLERY</p>
            <h2 className="iconic-gallery__heading">In the light.</h2>
          </div>

          <div
            aria-label="Iconic 8 gallery categories"
            className="iconic-gallery__tabs"
            role="tablist"
          >
            {tabs.map((tab) => (
              <button
                aria-selected={activeTab === tab}
                className={`iconic-gallery__tab ${
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
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            animate="visible"
            className="iconic-gallery__masonry"
            initial="hidden"
            key={activeTab}
            variants={gridVariants}
          >
            {gallerySets[activeTab].map((item, index) => (
              <motion.figure
                className="iconic-gallery__item"
                key={`${activeTab}-${index}`}
                variants={itemVariants}
              >
                <div
                  className="iconic-gallery__frame"
                  style={{ aspectRatio: item.ratio }}
                >
                  <img
                    alt={item.alt}
                    className="iconic-gallery__image"
                    loading="lazy"
                    src={item.image}
                  />
                </div>
              </motion.figure>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default IconicGallery
