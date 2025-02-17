import { useCalendarContext } from '../calendar-context'
import CalendarBodyMonth from './month/calendar-body-month'

export default function CalendarBody() {
  const { mode } = useCalendarContext()

  return (
    <>
      {mode === 'month' && <CalendarBodyMonth />}
    </>
  )
}
