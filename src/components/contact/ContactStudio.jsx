import { Mail, MapPin, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from '../common/Button'
import Container from '../common/Container'
import GlassCard from '../common/GlassCard'
import { fadeUp, staggerContainer } from '../../utils/motion'
import { contactStudios } from '../../utils/siteData'

const contactIcons = [MapPin, MapPin, Phone]

const ContactStudio = () => (
  <section className="section-shell" id="contact-studio">
    <Container>
      <motion.div
        className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div className="space-y-6" variants={fadeUp}>
          <p className="eyebrow">Contact studio</p>
          <h2 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            Begin with a private briefing, a gallery appointment, or a curated site visit.
          </h2>
          <p className="copy-muted max-w-xl">
            This is a frontend-only showcase, so the enquiry form is intentionally
            non-operational for now. The layout is ready for future integration with a
            CRM, email workflow, or concierge backend.
          </p>

          <div className="space-y-4">
            {contactStudios.map((studio, index) => {
              const Icon = contactIcons[index]

              return (
                <GlassCard key={studio.title} className="flex items-start gap-4 p-5">
                  <div className="mt-1 rounded-full border border-brand-border bg-white/[0.05] p-3 text-brand-gold">
                    <Icon size={18} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg">{studio.title}</h3>
                    <p className="text-sm uppercase tracking-[0.22em] text-brand-muted">
                      {studio.detail}
                    </p>
                    <p className="copy-muted">{studio.copy}</p>
                  </div>
                </GlassCard>
              )
            })}
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <GlassCard className="p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              {['Name', 'Email'].map((field) => (
                <label key={field} className="space-y-3">
                  <span className="text-xs uppercase tracking-[0.26em] text-brand-muted">
                    {field}
                  </span>
                  <input
                    className="h-14 w-full rounded-2xl border border-brand-border bg-black/20 px-4 text-sm text-brand-text outline-none transition focus:border-brand-gold"
                    placeholder={`Your ${field.toLowerCase()}`}
                    type={field === 'Email' ? 'email' : 'text'}
                  />
                </label>
              ))}
            </div>

            <label className="mt-5 block space-y-3">
              <span className="text-xs uppercase tracking-[0.26em] text-brand-muted">
                Interest
              </span>
              <select className="h-14 w-full rounded-2xl border border-brand-border bg-black/20 px-4 text-sm text-brand-text outline-none transition focus:border-brand-gold">
                <option>Iconic 8</option>
                <option>Avante</option>
                <option>Collections</option>
              </select>
            </label>

            <label className="mt-5 block space-y-3">
              <span className="text-xs uppercase tracking-[0.26em] text-brand-muted">
                Project brief
              </span>
              <textarea
                className="min-h-40 w-full rounded-[1.6rem] border border-brand-border bg-black/20 px-4 py-4 text-sm text-brand-text outline-none transition focus:border-brand-gold"
                placeholder="Tell us about the kind of address, atmosphere, or investment brief you are considering."
              />
            </label>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Button size="lg" type="button">
                Request private presentation
              </Button>
              <a
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-brand-muted transition hover:text-brand-text"
                href="mailto:concierge@yaraestates.com"
              >
                <Mail size={16} />
                concierge@yaraestates.com
              </a>
            </div>
          </GlassCard>
        </motion.div>
      </motion.div>
    </Container>
  </section>
)

export default ContactStudio
