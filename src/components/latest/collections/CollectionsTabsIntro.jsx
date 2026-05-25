import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { fadeUp, staggerContainer } from '../../../utils/motion'
import './collectionsTabsIntro.css'

export const categories = [
  {
    id: 'premium-residential',
    label: 'PREMIUM RESIDENTIAL',
    count: '03',
  },
  {
    id: 'retreat-living',
    label: 'RETREAT LIVING',
    count: '03',
  },
  {
    id: 'luxury-commercial',
    label: 'LUXURY COMMERCIAL',
    count: '03',
  },
]

const CollectionsTabsIntro = ({
  defaultCategory = categories[0].id,
  onCategoryChange,
}) => {
  const [activeCategory, setActiveCategory] = useState(defaultCategory)

  useEffect(() => {
    onCategoryChange?.(activeCategory)
  }, [activeCategory, onCategoryChange])

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId)
  }

  return (
    <section className="collections-tabs-intro" id="collections-tabs-intro">
      <div className="collections-tabs-intro__shell">
        <motion.div
          className="collections-tabs-intro__header"
          initial="hidden"
          viewport={{ once: true, amount: 0.35 }}
          whileInView="visible"
          variants={staggerContainer}
        >
          <motion.div className="collections-tabs-intro__header-left" variants={fadeUp}>
            <p className="collections-tabs-intro__eyebrow">THE PORTFOLIO</p>
            <h2 className="collections-tabs-intro__title">
              Three Worlds.
              <br />
              One Philosophy.
            </h2>
          </motion.div>

          <motion.div className="collections-tabs-intro__header-right" variants={fadeUp}>
            <p className="collections-tabs-intro__description">
              Every YARA development is curated within one of three refined collections
              — each shaped by atmosphere, architecture, and emotional living
              experience.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="collections-tabs-intro__tabs-wrap"
          initial="hidden"
          viewport={{ once: true, amount: 0.4 }}
          whileInView="visible"
          variants={fadeUp}
        >
          <div
            aria-label="Collections portfolio categories"
            className="collections-tabs-intro__tabs"
            role="tablist"
          >
            {categories.map((category) => {
              const isActive = category.id === activeCategory

              return (
                <button
                  key={category.id}
                  aria-selected={isActive}
                  className={`collections-tabs-intro__tab${isActive ? ' is-active' : ''}`}
                  onClick={() => handleCategoryClick(category.id)}
                  role="tab"
                  type="button"
                >
                  <span aria-hidden="true" className="collections-tabs-intro__tab-dot" />
                  <span className="collections-tabs-intro__tab-label">{category.label}</span>
                  <span className="collections-tabs-intro__tab-count">{category.count}</span>
                </button>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CollectionsTabsIntro
