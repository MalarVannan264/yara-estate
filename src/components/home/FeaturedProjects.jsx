import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import avantePrimary from '../../assets/images/projects/avante/avante-primary.svg'
import iconic8Primary from '../../assets/images/projects/iconic8/iconic8-primary.svg'
import Button from '../common/Button'
import Container from '../common/Container'
import { fadeUp, staggerContainer } from '../../utils/motion'

const projects = [
  {
    title: 'AVANTE',
    subtitle: 'A contemporary living landmark for tomorrow.',
    copy:
      'A modular featured-project layout is now in place so you can replace the placeholder art with final Avante imagery and details.',
    image: avantePrimary,
    reverse: false,
    to: '/latest/avante',
    stats: ['Private Access', 'Phase 01', 'ECR'],
  },
  {
    title: 'ICONIC 8',
    subtitle: 'An exclusive collection of quiet architectural statements.',
    copy:
      'Iconic 8 now has a mirrored showcase row that keeps the homepage feeling editorial instead of repetitive.',
    image: iconic8Primary,
    reverse: true,
    to: '/latest/iconic-8',
    stats: ['08 Residences', '3,800 sq.ft.', 'Boat Club'],
  },
]

const FeaturedProjects = () => (
  <section className="section-shell bg-[#fbf8f2]">
    <Container className="space-y-12">
      <motion.div
        className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp}>
          <p className="eyebrow">Featured projects</p>
          <h2 className="editorial-title max-w-xl">A Portfolio of Quiet Landmarks.</h2>
        </motion.div>
        <motion.p className="copy-muted max-w-2xl lg:justify-self-end" variants={fadeUp}>
          The homepage base structure now supports alternating project narratives, clean
          editorial pacing, and isolated image areas for easy content replacement.
        </motion.p>
      </motion.div>

      <div className="space-y-16">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            className={`grid gap-8 lg:grid-cols-2 lg:items-center ${project.reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp}>
              <img
                alt={`${project.title} placeholder`}
                className="w-full border border-brand-border bg-white shadow-luxe"
                src={project.image}
              />
            </motion.div>

            <motion.div className="space-y-6" variants={fadeUp}>
              <p className="font-display text-4xl text-brand-text">{project.title}</p>
              <div className="space-y-4">
                <h3 className="font-display text-3xl leading-tight text-brand-text">
                  {project.subtitle}
                </h3>
                <p className="copy-muted max-w-xl">{project.copy}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.stats.map((stat) => (
                  <span
                    key={stat}
                    className="border border-brand-border bg-white px-4 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-brand-muted"
                  >
                    {stat}
                  </span>
                ))}
              </div>
              <Button size="sm" to={project.to} variant="secondary">
                Discover more
                <ArrowRight size={16} />
              </Button>
            </motion.div>
          </motion.article>
        ))}
      </div>
    </Container>
  </section>
)

export default FeaturedProjects
