import { ArrowUpRight, Compass, MapPin } from 'lucide-react'
import './contactMap.css'

const MAPS_EMBED =
  'https://maps.google.com/maps?q=Kasturba+Nagar,+Adyar,+Chennai+600020&z=15&output=embed&t=m'

const MAPS_LINK =
  'https://www.google.com/maps/search/?api=1&query=Door+No+60,+3rd+Main+Road,+Kasturba+Nagar,+Adyar,+Chennai+600020'

const ContactMap = () => {
  return (
    <section aria-label="Studio location map" className="cmap-section">

      {/* ── MAP LAYER ─────────────────────────────────── */}
      <div className="cmap-map-wrap">
        <iframe
          allowFullScreen
          aria-hidden="true"
          className="cmap-iframe"
          frameBorder="0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={MAPS_EMBED}
          title="YARA Estates studio location"
        />

        {/* Warm beige tonal overlay — enhances the sepia filter */}
        <div aria-hidden="true" className="cmap-overlay" />

        {/* Right-side editorial fade → solid background (ref. image) */}
        <div aria-hidden="true" className="cmap-fade-right" />

        {/* Perimeter vignette */}
        <div aria-hidden="true" className="cmap-vignette" />

        {/* ── CUSTOM MARKER LABEL ─────────────────────── */}
        <div
          aria-label="YARA Estates – Chennai, Tamil Nadu"
          className="cmap-marker"
          role="img"
        >
          {/* Pin shape */}
          <span aria-hidden="true" className="cmap-marker__pin">
            <MapPin size={18} strokeWidth={1.8} />
          </span>

          {/* Floating identity card */}
          <div className="cmap-marker__label">
            <p className="cmap-marker__name">YARA ESTATES</p>
            <p className="cmap-marker__city">Chennai, Tamil Nadu</p>
          </div>
        </div>
      </div>

      {/* ── EDITORIAL FLOATING CARD ───────────────────── */}
      <aside aria-label="Studio visit information" className="cmap-card">

        <div className="cmap-card__eyebrow-row">
          <Compass
            aria-hidden="true"
            className="cmap-card__icon"
            size={13}
            strokeWidth={1.6}
          />
          <span className="cmap-card__eyebrow">Private Location</span>
        </div>

        <h2 className="cmap-card__heading">
          Visit Our<br />
          Luxury Studio
        </h2>

        <p className="cmap-card__body">
          Quietly located in Chennai's refined coastal district, designed for
          private consultations and architectural presentations.
        </p>

        <span aria-hidden="true" className="cmap-card__divider" />

        <div className="cmap-card__address">
          <MapPin
            aria-hidden="true"
            className="cmap-card__addr-icon"
            size={13}
            strokeWidth={1.7}
          />
          <span className="cmap-card__addr-text">First Floor, Door No.60, 3rd Main Road, Kasturba Nagar, Adyar, Chennai 600020</span>
        </div>

        <a
          className="cmap-card__btn"
          href={MAPS_LINK}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>Open in Google Maps</span>
          <ArrowUpRight aria-hidden="true" size={15} strokeWidth={1.8} />
        </a>

      </aside>

    </section>
  )
}

export default ContactMap
