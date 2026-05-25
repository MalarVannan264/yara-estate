import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import './avanteGallery.css'

const tabs = ['ARCHITECTURE', 'RESIDENCES', 'AMENITIES']

const gallerySets = {
  ARCHITECTURE: [
    {
      image:
        'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80',
      alt: 'Minimal architectural detail',
      ratio: '0.8',
    },
    {
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      alt: 'Soft bedroom architecture',
      ratio: '1.46',
    },
    {
      image:
        'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
      alt: 'Bright lounge architecture',
      ratio: '0.82',
    },
    {
      image:
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
      alt: 'Infinity amenity detail',
      ratio: '0.86',
    },
    {
      image:
        'https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=1200&q=80',
      alt: 'Minimal studio desk scene',
      ratio: '1.18',
    },
    {
      image:
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
      alt: 'Warm wood stair detail',
      ratio: '0.92',
    },
  ],
  RESIDENCES: [
    {
      image:
        'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80',
      alt: 'Wood and fabric lounge',
      ratio: '1.12',
    },
    {
      image:
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      alt: 'Premium bedroom with natural light',
      ratio: '1.4',
    },
    {
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      alt: 'Tropical modern residence exterior',
      ratio: '0.88',
    },
    {
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80&sat=-12',
      alt: 'Calm residence seating corner',
      ratio: '0.8',
    },
    {
      image:
        'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1200&q=80',
      alt: 'Courtyard-facing residence detail',
      ratio: '1.16',
    },
    {
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80&exp=6',
      alt: 'Soft interior composition',
      ratio: '0.96',
    },
  ],
  AMENITIES: [
    {
      image:
        'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80&sat=5',
      alt: 'Minimal hospitality lounge',
      ratio: '0.86',
    },
    {
      image:
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80&exp=8',
      alt: 'Quiet wellness pool setting',
      ratio: '0.82',
    },
    {
      image:
        'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80&bri=6',
      alt: 'Architectural amenity detail',
      ratio: '1.18',
    },
    {
      image:
        'https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=1200&q=80&sat=-10',
      alt: 'Private library lounge',
      ratio: '1.16',
    },
    {
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80&hue=12',
      alt: 'Spa-inspired bath suite',
      ratio: '1.42',
    },
    {
      image:
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80&sat=-5',
      alt: 'Curated amenity dining space',
      ratio: '0.92',
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

const AvanteGallery = () => {
  const [activeTab, setActiveTab] = useState('ARCHITECTURE')

  return (
    <section className="avante-gallery">
      <div className="avante-gallery__inner">
        <motion.div
          className="avante-gallery__header"
          initial="hidden"
          variants={headerVariants}
          viewport={{ amount: 0.25, once: true }}
          whileInView="visible"
        >
          <div className="avante-gallery__headline">
            <p className="avante-gallery__eyebrow">GALLERY</p>
            <h2 className="avante-gallery__heading">Look closer.</h2>
          </div>

          <div
            aria-label="Avante gallery categories"
            className="avante-gallery__tabs"
            role="tablist"
          >
            {tabs.map((tab) => (
              <button
                aria-selected={activeTab === tab}
                className={`avante-gallery__tab ${
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
            className="avante-gallery__masonry"
            initial="hidden"
            key={activeTab}
            variants={gridVariants}
          >
            {gallerySets[activeTab].map((item, index) => (
              <motion.figure
                className="avante-gallery__item"
                key={`${activeTab}-${index}`}
                variants={itemVariants}
              >
                <div
                  className="avante-gallery__frame"
                  style={{ aspectRatio: item.ratio }}
                >
                  <img
                    alt={item.alt}
                    className="avante-gallery__image"
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

export default AvanteGallery
