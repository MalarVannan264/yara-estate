import { motion } from 'framer-motion'
import Container from './Container'
import { fadeUp, staggerContainer } from '../../utils/motion'

const PageBanner = ({ eyebrow, title, description, image, metrics = [] }) => (
  <section className="page-gradient relative overflow-hidden pt-28">
    <div className="absolute inset-0">
      <img alt={title} className="h-full w-full object-cover opacity-35" src={image} />
      <div className="absolute inset-0 bg-hero-vignette" />
    </div>
    <Container className="relative section-shell">
      <motion.div
        className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
      >
        <motion.div className="space-y-6" variants={fadeUp}>
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[0.95] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-8 text-brand-muted sm:text-lg">
            {description}
          </p>
        </motion.div>

        {metrics.length ? (
          <motion.div
            className="luxury-panel grid gap-4 self-end p-6 sm:grid-cols-3 lg:grid-cols-1 lg:p-8"
            variants={fadeUp}
          >
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="border-b border-brand-border/70 pb-4 last:border-none last:pb-0"
              >
                <p className="text-2xl font-semibold text-brand-text">{metric.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-brand-muted">
                  {metric.label}
                </p>
              </div>
            ))}
          </motion.div>
        ) : null}
      </motion.div>
    </Container>
  </section>
)

export default PageBanner
