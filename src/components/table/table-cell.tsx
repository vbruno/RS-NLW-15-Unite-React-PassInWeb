import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type TableCellProps = ComponentProps<'td'>

export function TableCell({ className, ...props }: TableCellProps) {
  return (
    <td
      className={twMerge('px-3 py-4 text-sm text-zinc-300', className)}
      {...props}
    />
  )
}
