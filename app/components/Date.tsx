import { format, parseISO } from 'date-fns'

export default function Date({ dateString, additionalStyles="" }: { dateString: string, additionalStyles?: string }) {
  const date: Date = parseISO(dateString);
  return <time className={additionalStyles} dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}