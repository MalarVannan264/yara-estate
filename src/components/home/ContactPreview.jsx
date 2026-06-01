import { MapPin, Mail, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import contactPreview from '../../assets/images/homepage/contact-preview.svg'
import Button from '../common/Button'
import Container from '../common/Container'
import { fadeUp, staggerContainer } from '../../utils/motion'

const ContactPreview = () => (
  <section className="section-shell">
    <Container>
      <motion.div
        className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div className="space-y-6" variants={fadeUp}>
          <p className="eyebrow">Contact preview</p>
          <h2 className="editorial-title max-w-lg">Begin Your YARA Journey.</h2>
          <p className="copy-muted max-w-md">
            The final homepage block now reflects the premium consultation pattern from
            the reference while staying frontend-only for now.
          </p>

          <div className="space-y-4 text-sm text-brand-text">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 text-brand-gold" size={16} />
              <span>First Floor, Door No.60, 3rd Main Road, Kasturba Nagar, Adyar, Chennai 600020</span>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-1 text-brand-gold" size={16} />
              <span>info@yaraestates.com</span>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-1 text-brand-gold" size={16} />
              <span>9994392444</span>
            </div>
          </div>

          <img
            alt="YARA contact placeholder"
            className="w-full max-w-lg border border-brand-border bg-white shadow-luxe"
            src={contactPreview}
          />
        </motion.div>

        <motion.div className="border border-brand-border bg-white p-6 sm:p-8" variants={fadeUp}>
          <div className="space-y-3">
            <p className="eyebrow">Private consultation</p>
            <h3 className="font-display text-4xl text-brand-text">Request a Private Consultation</h3>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {['Name', 'Email'].map((label) => (
              <label key={label} className="space-y-3">
                <span className="text-[0.68rem] uppercase tracking-[0.26em] text-brand-muted">
                  {label}
                </span>
                <input
                  className="h-12 w-full border-b border-brand-border bg-transparent px-0 text-sm text-brand-text outline-none placeholder:text-brand-muted/70"
                  placeholder={`Your ${label.toLowerCase()}`}
                  type={label === 'Email' ? 'email' : 'text'}
                />
              </label>
            ))}
          </div>

          <label className="mt-6 block space-y-3">
            <span className="text-[0.68rem] uppercase tracking-[0.26em] text-brand-muted">
              Interest
            </span>
            <select className="h-12 w-full border-b border-brand-border bg-transparent px-0 text-sm text-brand-text outline-none">
              <option>Private Access</option>
              <option>Iconic 8</option>
              <option>Avante</option>
            </select>
          </label>

          <label className="mt-6 block space-y-3">
            <span className="text-[0.68rem] uppercase tracking-[0.26em] text-brand-muted">
              Message
            </span>
            <textarea
              className="min-h-32 w-full border-b border-brand-border bg-transparent px-0 py-2 text-sm text-brand-text outline-none placeholder:text-brand-muted/70"
              placeholder="Tell us a little about what you are looking for."
            />
          </label>

          <div className="mt-8">
            <Button size="md" to="/contact">
              Schedule private consultation
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </Container>
  </section>
)

export default ContactPreview
