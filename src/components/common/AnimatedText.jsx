import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'
import { easeOutExpo } from '../../utils/motion'

const lineVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
}

const wordVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOutExpo,
    },
  },
}

const AnimatedText = ({ text, className }) => (
  <motion.h1
    className={cn(className)}
    initial="hidden"
    animate="visible"
    variants={lineVariants}
  >
    {text.split(' ').map((word, index) => (
      <motion.span
        key={`${word}-${index}`}
        className="mr-[0.25em] inline-block"
        variants={wordVariants}
      >
        {word}
      </motion.span>
    ))}
  </motion.h1>
)

export default AnimatedText
