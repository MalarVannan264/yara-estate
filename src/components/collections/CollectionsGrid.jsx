import { motion } from 'framer-motion'
import Container from '../common/Container'
import ProjectCard from '../common/ProjectCard'
import SectionHeading from '../common/SectionHeading'
import { fadeUp, staggerContainer } from '../../utils/motion'
import { collectionHighlights, featuredProjects } from '../../utils/siteData'

const collectionProjects = featuredProjects.filter((project) => project.title !== 'Collections')

const CollectionsGrid = () => (
  <section className="section-shell" id="collections-grid">
    <Container>
      <motion.div
        className="space-y-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            description="Collections are arranged to help future content scale cleanly, whether you expand into more launches, new verticals, or media-rich storytelling."
            eyebrow="Portfolio architecture"
            title="A scalable content system for residences, retreats, and prestige workspaces."
          />

          <motion.div className="grid gap-4 sm:grid-cols-3" variants={fadeUp}>
            {[
              ['03', 'Core portfolio worlds'],
              ['02', 'Active latest stories'],
              ['100%', 'Frontend-ready structure'],
            ].map(([value, label]) => (
              <div key={label} className="luxury-panel p-5">
                <p className="text-3xl font-semibold text-brand-text">{value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.24em] text-brand-muted">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div className="grid gap-6 lg:grid-cols-3" variants={fadeUp}>
          {collectionHighlights.map((collection) => (
            <article
              key={collection.title}
              className="rounded-[2rem] border border-brand-border bg-white/[0.03] p-6"
            >
              <p className="eyebrow">{collection.stat}</p>
              <h3 className="mt-4 text-2xl">{collection.title}</h3>
              <p className="mt-4 copy-muted">{collection.description}</p>
            </article>
          ))}
        </motion.div>

        <motion.div className="grid gap-6 lg:grid-cols-2" variants={fadeUp}>
          {collectionProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </motion.div>
    </Container>
  </section>
)

export default CollectionsGrid
