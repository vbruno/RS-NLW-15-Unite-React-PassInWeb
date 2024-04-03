import { ComponentProps } from 'react'

type TableHeaderProps = ComponentProps<'th'>

export function TableHeader({ ...props }: TableHeaderProps) {
  return <th className="px-3 py-4 text-sm font-semibold text-left" {...props} />
}
