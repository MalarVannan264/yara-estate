import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { easeOutExpo } from '../../../utils/motion'
import './collectionsGallery.css'

const galleryTabs = [
  { id: 'exterior', label: 'EXTERIOR' },
  { id: 'interiors', label: 'INTERIORS' },
  { id: 'terrace', label: 'TERRACE' },
  { id: 'plans', label: 'PLANS' },
]

const galleryImages = {
  exterior: [
    {
      id: 'ext-1',
      alt: 'Poolside breakfast scene above still water',
      ratio: '1 / 0.62',
      src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'ext-2',
      alt: 'Private residence framed by warm natural materials',
      ratio: '1 / 1.28',
      src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'ext-3',
      alt: 'Minimal courtyard with long facade and layered daylight',
      ratio: '1 / 0.86',
      src: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'ext-4',
      alt: 'Luxury villa exterior with landscape view',
      ratio: '1 / 1.18',
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'ext-5',
      alt: 'Open pavilion home set against a tropical garden',
      ratio: '1 / 0.94',
      src: 'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'ext-6',
      alt: 'Modern concrete home with expansive glazing',
      ratio: '1 / 1.06',
      src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80',
    },
  ],
  interiors: [
    {
      id: 'int-1',
      alt: 'Warm editorial workspace with timber desk',
      ratio: '1 / 1.52',
      src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'int-2',
      alt: 'Soft living room with sculptural table',
      ratio: '1 / 1.12',
      src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'int-3',
      alt: 'White bedroom with calm natural light',
      ratio: '1 / 1.18',
      src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=850&q=80',
    },
    {
      id: 'int-4',
      alt: 'Under stair workspace with clean lines',
      ratio: '1 / 0.92',
      src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=850&q=80',
    },
    {
      id: 'int-5',
      alt: 'Contemporary bedroom with light walls and soft textures',
      ratio: '1 / 1.04',
      src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=820&q=80',
    },
    {
      id: 'int-6',
      alt: 'Textured minimal interior detail',
      ratio: '1 / 0.78',
      src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80',
    },
  ],
  terrace: [
    {
      id: 'terr-1',
      alt: 'Terrace lounge beside water at golden hour',
      ratio: '1 / 0.7',
      src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=920&q=80',
    },
    {
      id: 'terr-2',
      alt: 'Outdoor dining under a shaded roof deck',
      ratio: '1 / 1.16',
      src: 'https://images.unsplash.com/photo-1600566753052-3f5a8d4b84d7?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'terr-3',
      alt: 'Open terrace seating with coastal view',
      ratio: '1 / 0.88',
      src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'terr-4',
      alt: 'Covered outdoor retreat with long horizon',
      ratio: '1 / 1.28',
      src: 'https://images.unsplash.com/photo-1600047509782-20d39509f26d?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'terr-5',
      alt: 'Sunset rooftop pool experience',
      ratio: '1 / 0.94',
      src: 'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'terr-6',
      alt: 'Terrace deck with soft resort lighting',
      ratio: '1 / 1.06',
      src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80',
    },
  ],
  plans: [
    {
      id: 'plan-1',
      alt: 'Architectural floor plan draft on a light desk',
      ratio: '1 / 0.7',
      src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'plan-2',
      alt: 'Design sketches and model pieces arranged on a board',
      ratio: '1 / 1.2',
      src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'plan-3',
      alt: 'Blueprint workspace with ruler and clean materials',
      ratio: '1 / 0.92',
      src: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'plan-4',
      alt: 'Architect reviewing a layout with precise instruments',
      ratio: '1 / 1.08',
      src: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'plan-5',
      alt: 'Material studies beside an architectural sketch',
      ratio: '1 / 1.3',
      src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'plan-6',
      alt: 'Printed master plan spread across a studio table',
      ratio: '1 / 0.82',
      src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
    },
  ],
}

const CollectionsGallery = () => {
  const [activeTab, setActiveTab] = useState(galleryTabs[0].id)

  return (
    <section className="collections-gallery">
      <div className="collections-gallery__shell">
        <div className="collections-gallery__header">
          <motion.div
            className="collections-gallery__header-main"
            initial={{ opacity: 0, y: 24 }}
            viewport={{ once: true, amount: 0.3 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.82, ease: easeOutExpo }}
          >
            <p className="collections-gallery__eyebrow">GALLERY</p>
            <h2 className="collections-gallery__heading">In the light.</h2>
          </motion.div>

          <motion.div
            className="collections-gallery__tabs"
            initial={{ opacity: 0, y: 18 }}
            viewport={{ once: true, amount: 0.4 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: easeOutExpo }}
            role="tablist"
            aria-label="Collections gallery categories"
          >
            {galleryTabs.map((tab) => {
              const isActive = tab.id === activeTab

              return (
                <button
                  key={tab.id}
                  aria-selected={isActive}
                  className={`collections-gallery__tab${isActive ? ' is-active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                  role="tab"
                  type="button"
                >
                  {tab.label}
                </button>
              )
            })}
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="collections-gallery__masonry"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: easeOutExpo }}
          >
            {galleryImages[activeTab].map((image, index) => (
              <motion.figure
                key={image.id}
                className="collections-gallery__item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: easeOutExpo,
                }}
                style={{ aspectRatio: image.ratio }}
              >
                <img
                  alt={image.alt}
                  className="collections-gallery__image"
                  loading="lazy"
                  src={image.src}
                />
              </motion.figure>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default CollectionsGallery
