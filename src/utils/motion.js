export const easeOutExpo = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOutExpo,
    },
  },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

export const pageTransition = {
  initial: { opacity: 0, y: 18 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: easeOutExpo,
    },
  },
  exit: {
    opacity: 0,
    y: -18,
    transition: {
      duration: 0.35,
      ease: [0.64, 0, 0.78, 0],
    },
  },
}
