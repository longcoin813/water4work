import { useState } from 'react'
import Calendar from './calendar/calendar'
import { CalendarEvent, Mode } from './calendar/calendar-types'
import { generateMockEvents } from '../../lib/mock-calendar-events'

const CalendarPage: React.FC = () => {

  const [events, setEvents] = useState<CalendarEvent[]>(generateMockEvents())
  const [mode, setMode] = useState<Mode>('month')
  const [date, setDate] = useState<Date>(new Date())


  return (
    <div className="grid grid-rows-[auto_1fr_auto] grid-cols-1 min-h-screen">
      <main className="bg-white p-4 text-center justify-center items-center min-h-screen  ">
        <h1 className="text-2xl font-bold">Main Content</h1>
        {/* flex flex-col md:flex-row:
flex-col: Dành cho màn hình nhỏ hơn (mặc định) — các phần tử con của container sẽ xếp thành một cột.
md:flex-row: Khi màn hình có kích thước từ md trở lên (từ 768px trở lên), các phần tử con sẽ xếp thành một hàng (horizontal layout). */}
        <div className="flex flex-col md:flex-row w-full">

          <div className="flex-1 p-[50px]">
            <div>Item 1</div>
            <div className="flex">
              <div className="flex-1 text-left">1</div>
              <div className="flex-1 text-right">2</div>
            </div>
            <div className="border border-indigo-600">
              <ul >
                <li className="flex">
                  <p className="flex-1 text-left">1</p>
                  <p className="flex-2 text-right">2025/11/21</p>
                </li>
                <li className="flex">
                  <p className="flex-1 text-left">2</p>
                  <p className="flex-2 text-right">2025/11/21</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex-1 p-[50px]">
            <div>Item 2</div>
            <div className="flex ">
              <div className="flex-1 text-left">1</div>
              <div className="flex-1 text-right">2</div>
            </div>
            <div className="border border-indigo-600">
              <ul >
                <li className="flex">
                  <p className="flex-1 text-left">1</p>
                  <p className="flex-2 text-right">2025/11/21</p>
                </li>
                <li className="flex">
                  <p className="flex-1 text-left">2</p>
                  <p className="flex-2 text-right">2025/11/21</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className=" p-[50px]">
          <div className="border">
            <Calendar
              events={events}
              setEvents={setEvents}
              mode={mode}
              setMode={setMode}
              date={date}
              setDate={setDate}
            />

          </div>

        </div>

      </main>

      <footer className="col-span-1 md:col-span-2 bg-gray-800 p-4 text-white text-center">
        Footer
      </footer>
    </div>
  );
};
export default CalendarPage;
