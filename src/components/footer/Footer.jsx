import { AtSign, Globe, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '../common/Container'
import { footerContact, latestLinks, navigationLinks, socialLinks } from '../../utils/siteData'
import './footer.css'

const socialIcons = {
  Instagram: Globe,
  LinkedIn: AtSign,
  Email: Mail,
}

const footerContactsWithIcons = [
  { icon: MapPin, ...footerContact[2] },
  { icon: Phone, ...footerContact[0] },
  { icon: Mail, ...footerContact[1] },
]

const Footer = () => (
  <footer className="yara-footer">
    <Container className="section-shell space-y-14">
      <div className="yara-footer__grid">
        <div className="space-y-6">
          <p className="yara-footer__logo">YARA</p>
          <p className="max-w-sm text-sm leading-7 text-brand-muted">
            YARA Estates curates premium real-estate experiences across Chennai with an
            editorial, design-led approach to homes, hospitality, and long-term value.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((item) => {
              const Icon = socialIcons[item.label]

              return (
                <a
                  key={item.label}
                  aria-label={item.label}
                  className="yara-footer__social"
                  href={item.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon size={17} />
                </a>
              )
            })}
          </div>
        </div>

        <div>
          <p className="yara-footer__title">Quick Links</p>
          <div className="space-y-3 text-sm">
            {navigationLinks.map((item) => (
              <Link key={item.to} className="yara-footer__link block" to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="yara-footer__title">Latest</p>
          <div className="space-y-3 text-sm">
            {latestLinks.map((item) => (
              <Link key={item.to} className="yara-footer__link block" to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="yara-footer__title">Contact</p>
          <div className="space-y-4">
            {footerContactsWithIcons.map((item) => {
              const Icon = item.icon

              return (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="mt-1 text-brand-gold">
                    <Icon size={16} />
                  </span>
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.24em] text-brand-muted">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-brand-text">{item.value}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t border-brand-border pt-5 text-[0.72rem] uppercase tracking-[0.22em] text-brand-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 YARA Estates. All rights reserved.</p>
        <p>Chennai-based premium property company.</p>
      </div>
    </Container>
  </footer>
)

export default Footer
