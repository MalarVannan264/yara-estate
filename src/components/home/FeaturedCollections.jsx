import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import avanteMain from '../../assets/images/projects/avante/avante-main.jpg'
import iconic8Main from '../../assets/images/projects/iconic8/iconic8-main.jpg'
import './featuredCollections.css'

const headerVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.84,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const textVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.04,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const imageRevealVariants = {
  hidden: { opacity: 0, y: 38, clipPath: 'inset(0 0 14% 0)' },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0 0 0% 0)',
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const avanteDetails = [
  { label: 'Typology', value: 'Premium Apartments' },
  { label: 'Status', value: 'Phase II · 2026' },
  { label: 'Location', value: 'Medavakkam' },
  { label: 'Footprint', value: '3,200 – 4,800 sqft' },
]

const iconicStats = [
  { value: '8', label: 'Villas' },
  { value: '5,800', label: 'Avg Sqft' },
]

const FeaturedCollections = () => (
  <section className="yara-featured-collections">
    <div className="featured-collections-shell">
      <motion.div
        className="featured-collections-header"
        initial="hidden"
        viewport={{ once: true, amount: 0.25 }}
        whileInView="visible"
        variants={headerVariants}
      >
        <div className="featured-collections-header-left">
          <p className="featured-collections-eyebrow">FEATURED COLLECTIONS</p>
          <h2 className="featured-collections-heading">
            A Portfolio of
            <br />
            Quiet Landmarks.
          </h2>
        </div>

        <div className="featured-collections-header-right">
          <p className="featured-collections-intro">
            Each YARA development is conceived as an editorial chapter — distinct
            in mood, restrained in detail, and engineered to age beautifully into
            its landscape.
          </p>
          <Link className="featured-collections-link" to="/collections">
            VIEW ALL DEVELOPMENTS <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </motion.div>

      <div className="featured-projects-flow">
        <article className="featured-project featured-project-avante">
          <motion.figure
            className="featured-project-media featured-project-media-avante"
            initial="hidden"
            viewport={{ once: true, amount: 0.2 }}
            whileInView="visible"
            variants={imageRevealVariants}
          >
            <motion.img
              alt="Avante residences"
              className="featured-project-image"
              src={avanteMain}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.04, y: -8, filter: 'brightness(1.02) saturate(1.05)' }}
            />
          </motion.figure>

          <motion.div
            className="featured-project-copy featured-project-copy-avante"
            initial="hidden"
            viewport={{ once: true, amount: 0.24 }}
            whileInView="visible"
            variants={textVariants}
          >
            <motion.p className="featured-project-index" variants={itemVariants}>
              PROJECT · 01
            </motion.p>
            <motion.h3 className="featured-project-title" variants={itemVariants}>
              AVANTE
            </motion.h3>
            <motion.h4 className="featured-project-subtitle" variants={itemVariants}>
              Contemporary Living
              <br />
              Crafted for Tomorrow.
            </motion.h4>
            <motion.p className="featured-project-description" variants={itemVariants}>
              A composition of premium apartments where contemporary architecture meets
              the rhythms of tropical living — engineered for privacy, light, and
              the inhabitants of tomorrow.
            </motion.p>

            <motion.div className="featured-project-detail-grid" variants={itemVariants}>
              {avanteDetails.map((detail) => (
                <div className="featured-project-detail" key={detail.label}>
                  <p className="featured-project-detail-label">{detail.label}</p>
                  <p className="featured-project-detail-value">{detail.value}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link className="featured-project-button" to="/latest/avante">
                DISCOVER AVANTE <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </motion.div>
        </article>

        <article className="featured-project featured-project-iconic">
          <motion.div
            className="featured-project-copy featured-project-copy-iconic"
            initial="hidden"
            viewport={{ once: true, amount: 0.24 }}
            whileInView="visible"
            variants={textVariants}
          >
            <motion.p className="featured-project-index" variants={itemVariants}>
              PROJECT · 02
            </motion.p>
            <motion.h3 className="featured-project-title" variants={itemVariants}>
              ICONIC 8
            </motion.h3>
            <motion.h4 className="featured-project-subtitle" variants={itemVariants}>
              An exclusive collection of eight
              <br />
              tropical-modern villas.
            </motion.h4>
            <motion.p className="featured-project-description" variants={itemVariants}>
              Eight residences, no two alike — each carved around courtyard light,
              terrace breezes, and the unhurried hospitality of a private estate. A
              boutique address in the truest sense.
            </motion.p>

            <motion.div className="featured-project-stats" variants={itemVariants}>
              {iconicStats.map((stat) => (
                <div className="featured-project-stat" key={stat.label}>
                  <p className="featured-project-stat-value">{stat.value}</p>
                  <p className="featured-project-stat-label">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link className="featured-project-button" to="/latest/iconic-8">
                EXPLORE ICONIC 8 <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.figure
            className="featured-project-media featured-project-media-iconic"
            initial="hidden"
            viewport={{ once: true, amount: 0.18 }}
            whileInView="visible"
            variants={imageRevealVariants}
          >
            <motion.img
              alt="Iconic 8 villas"
              className="featured-project-image"
              src={iconic8Main}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.04, y: -8, filter: 'brightness(1.02) saturate(1.05)' }}
            />
          </motion.figure>
        </article>
      </div>
    </div>
  </section>
)

export default FeaturedCollections
