import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Navigation, FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
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
  {
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    title: 'Warm Interior Details',
    wide: false,
  },
  {
    image:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    title: 'Sculptural Lighting',
    wide: false,
  },
  {
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80&sat=-5',
    title: 'Courtyard Dining',
    wide: true,
  },
  {
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1100&q=80&hue=10',
    title: 'Stone Bath Suite',
    wide: false,
  },
  {
    image:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80',
    title: 'Tropical Residence',
    wide: true,
  },
  {
    image:
      'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=80',
    title: 'Wood and Light',
    wide: false,
  },
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
