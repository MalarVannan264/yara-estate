import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'
import { fadeUp } from '../../utils/motion'

const alignments = {
  left: 'items-start text-left',
  center: 'items-center text-center',
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  action,
}) => (
  <motion.div
    className={cn('flex flex-col gap-5', alignments[align], className)}
    variants={fadeUp}
  >
    {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
    <div className="space-y-4">
      <h2 className="editorial-title text-balance">{title}</h2>
      {description ? (
        <p className="copy-muted max-w-2xl text-balance">{description}</p>
      ) : null}
    </div>
    {action}
  </motion.div>
)

export default SectionHeading
