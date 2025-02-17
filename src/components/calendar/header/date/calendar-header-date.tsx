import CalendarHeaderDateChevrons from './calendar-header-date-chevrons'

export default function CalendarHeaderDate() {
  return (
    <div className="w-full flex justify-center items-center">
      <ul className='flex flex-1'>
        <div className='m-[10px]'>
          2123231231235123412
        </div>
        <li className='flex-1 border m-[10px]'>aaa</li>
        <li className='flex-1 border m-[10px]'>bbb</li>

      </ul>
      <div className='flex-1 flex justify-center items-center'>
        <div>
          <CalendarHeaderDateChevrons />
        </div>
      </div>
      <div className='flex-1 flex justify-end'>
        <a href='#'>{'hello >'} </a>
      </div>
    </div>
  )
}
