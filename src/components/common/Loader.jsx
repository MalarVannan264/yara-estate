import { motion } from 'framer-motion'
import logoMark from '../../assets/logos/yara-mark.svg'

const Loader = () => (
  <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-brand-bg">
    <div className="bg-noise absolute inset-0 opacity-50" />
    <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-brand-gold/12 blur-3xl" />
    <motion.div
      className="relative flex flex-col items-center gap-6 text-center"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="loader-ring relative rounded-full">
        <img alt="YARA Estates" className="h-20 w-20 rounded-[1.4rem]" src={logoMark} />
      </div>
      <div className="space-y-2">
        <p className="eyebrow">YARA Estates</p>
        <p className="text-sm uppercase tracking-[0.32em] text-brand-muted">
          Preparing private access
        </p>
      </div>
    </motion.div>
  </div>
)

export default Loader
