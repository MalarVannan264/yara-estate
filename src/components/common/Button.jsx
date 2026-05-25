import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'

const variants = {
  primary:
    'border-brand-gold bg-brand-gold text-white hover:border-[#b59558] hover:bg-[#b59558]',
  secondary:
    'border-brand-border bg-white text-brand-text hover:border-brand-gold hover:bg-brand-bg',
  ghost:
    'border-transparent bg-transparent text-brand-text hover:border-brand-border hover:bg-white/60',
}

const sizes = {
  sm: 'h-11 px-5 text-[0.68rem] tracking-[0.28em]',
  md: 'h-12 px-6 text-[0.7rem] tracking-[0.3em]',
  lg: 'h-14 px-7 text-xs tracking-[0.3em]',
}

const Button = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  to,
  href,
  ...props
}) => {
  const sharedClassName = cn(
    'group relative inline-flex items-center justify-center overflow-hidden rounded-sm border uppercase transition-all duration-500 ease-luxe',
    'before:absolute before:inset-y-0 before:left-[-130%] before:w-[120%] before:skew-x-[-18deg] before:bg-white/20 before:transition-transform before:duration-700 hover:before:translate-x-[220%]',
    'hover:-translate-y-0.5 hover:shadow-gold',
    variants[variant],
    sizes[size],
    className,
  )

  if (to) {
    return (
      <Link className={sharedClassName} to={to} {...props}>
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </Link>
    )
  }

  if (href) {
    return (
      <a className={sharedClassName} href={href} {...props}>
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </a>
    )
  }

  return (
    <button className={sharedClassName} {...props}>
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </button>
  )
}

export default Button
