import { cn } from '../../utils/cn'

const GlassCard = ({ className, children }) => (
  <div className={cn('luxury-panel', className)}>{children}</div>
)

export default GlassCard
