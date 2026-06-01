import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Navigation, FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
import gallery1 from '../../assets/images/homepage/gallery1.jpg'
import gallery2 from '../../assets/images/homepage/gallery2.jpg'
import gallery3 from '../../assets/images/homepage/gallery3.jpg'
import gallery4 from '../../assets/images/homepage/gallery4.jpeg'
import gallery5 from '../../assets/images/homepage/gallery5.jpeg'
import gallery6 from '../../assets/images/homepage/gallery6.jpeg'
import gallery7 from '../../assets/images/homepage/gallery7.jpeg'
import gallery8 from '../../assets/images/homepage/gallery8.jpeg'
import gallery9 from '../../assets/images/homepage/gallery9.jpeg'
import gallery10 from '../../assets/images/homepage/gallery10.jpeg'
import gallery11 from '../../assets/images/homepage/gallery11.jpeg'
import gallery12 from '../../assets/images/homepage/gallery12.jpeg'
import gallery13 from '../../assets/images/homepage/gallery13.jpeg'
import './immersiveGallery.css'

const headerVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.82,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const sliderVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.84,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.08,
    },
  },
}

const galleryImages = [
  { image: gallery1,  title: 'Natural Light',       wide: false },
  { image: gallery2,  title: 'Modern Living',        wide: true  },
  { image: gallery3,  title: 'Architectural Detail', wide: false },
  { image: gallery4,  title: 'Elevated Spaces',      wide: false },
  { image: gallery5,  title: 'Interior Craft',       wide: true  },
  { image: gallery6,  title: 'Stone & Timber',       wide: false },
  { image: gallery7,  title: 'Private Retreat',      wide: false },
  { image: gallery8,  title: 'Curated Living',       wide: true  },
  { image: gallery9,  title: 'Refined Details',      wide: false },
  { image: gallery10, title: 'Tropical Modern',      wide: false },
  { image: gallery11, title: 'Sky Terrace',          wide: true  },
  { image: gallery12, title: 'Evening Ambience',     wide: false },
  { image: gallery13, title: 'Premium Residence',    wide: false },
]

const ImmersiveGallery = () => (
  <section className="yara-immersive-gallery">
    <div className="immersive-gallery-header-shell">
      <motion.div
        className="immersive-gallery-header"
        initial="hidden"
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
        variants={headerVariants}
      >
        <div className="immersive-gallery-header-copy">
          <p className="immersive-gallery-eyebrow">FROM THE PORTFOLIO</p>
          <h2 className="immersive-gallery-heading">
            A Cinematic Index of
            <br />
            Light, Stone, and Stillness.
          </h2>
        </div>

        <div className="immersive-gallery-controls">
          <button
            aria-label="Previous slide"
            className="immersive-gallery-nav immersive-gallery-nav-prev"
            type="button"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            aria-label="Next slide"
            className="immersive-gallery-nav immersive-gallery-nav-next is-dark"
            type="button"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </motion.div>
    </div>

    <motion.div
      className="immersive-gallery-slider-shell"
      initial="hidden"
      viewport={{ once: true, amount: 0.14 }}
      whileInView="visible"
      variants={sliderVariants}
    >
      <Swiper
        className="immersive-gallery-swiper"
        freeMode={{
          enabled: true,
          sticky: false,
          momentumBounce: false,
        }}
        grabCursor
        modules={[Navigation, FreeMode]}
        navigation={{
          prevEl: '.immersive-gallery-nav-prev',
          nextEl: '.immersive-gallery-nav-next',
        }}
        slidesPerView="auto"
        spaceBetween={24}
      >
        {galleryImages.map((item) => (
          <SwiperSlide
            className={`immersive-gallery-slide ${item.wide ? 'is-wide' : ''}`}
            key={item.title}
          >
            <article className="immersive-gallery-card">
              <img
                alt={item.title}
                className="immersive-gallery-image"
                src={item.image}
              />
              <div className="immersive-gallery-image-overlay" />
              <div className="immersive-gallery-caption">
                <p>{item.title}</p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  </section>
)

export default ImmersiveGallery
