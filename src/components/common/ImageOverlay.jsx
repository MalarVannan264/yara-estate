import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '../../utils/cn'

const ImageOverlay = ({
  image,
  alt,
  className,
  imageClassName,
  overlayClassName,
  children,
  parallax = 30,
}) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [-parallax, parallax])

  return (
    <motion.figure
      ref={ref}
      className={cn(
        'group relative overflow-hidden rounded-[2rem] border border-brand-border bg-brand-surface',
        className,
      )}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.img
        alt={alt}
        className={cn(
          'h-full w-full object-cover transition-transform duration-700 group-hover:scale-105',
          imageClassName,
        )}
        src={image}
        style={{ y }}
      />
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/20 to-transparent',
          overlayClassName,
        )}
      />
      {children ? <figcaption className="absolute inset-0">{children}</figcaption> : null}
    </motion.figure>
  )
}

export default ImageOverlay
