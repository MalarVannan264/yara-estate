import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '../common/Container'
import { footerContact, latestLinks, navigationLinks, socialLinks } from '../../utils/siteData'
import './footer.css'

const InstagramIcon = () => (
  <svg fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
    <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const FacebookIcon = () => (
  <svg fill="currentColor" height="17" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const XIcon = () => (
  <svg fill="currentColor" height="17" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const socialIcons = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  Twitter: XIcon,
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
