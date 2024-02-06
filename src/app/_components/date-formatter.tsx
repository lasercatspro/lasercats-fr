import { type ReactNode } from 'react'

interface Props {
  dateString: string
}

const DateFormatter = ({ dateString }: Props): ReactNode => {
  return <time dateTime={dateString}>{new Date(dateString).toLocaleDateString('fr')}</time>
}

export default DateFormatter
