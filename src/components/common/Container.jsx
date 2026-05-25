import { cn } from '../../utils/cn'

const Container = ({ as: Tag = 'div', className, children }) => (
  <Tag className={cn('mx-auto w-full max-w-8xl px-5 sm:px-8 lg:px-10', className)}>
    {children}
  </Tag>
)

export default Container
