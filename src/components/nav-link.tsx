import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface NavLinkProps extends ComponentProps<'a'> {
  children: string
}

export function NavLink({ children, className, ...props }: NavLinkProps) {
  return (
    <a {...props} className={twMerge(`font-medium text-sm `, className)}>
      {children}
    </a>
  )
}
