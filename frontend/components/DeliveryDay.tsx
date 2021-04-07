import { Section } from "./Common/Section";

export const DeliveryDay = ({availableDays, onClick, selectedIndex}) => (
  <Section>
    <div className='flex flex-col'>
      <h1 className='text-2xl'>Select first delivery day</h1>
      <div className='flex'>
        {
          availableDays.map((day, index) => (
            <div
              onClick={() => onClick(index)}
              key={day}
              className={`mt-5 mr-5 cursor-pointer nline-flex items-center px-6 py-3 ${selectedIndex === index ? 'text-white' : 'text-black'} font-semibold shadow-sm ${selectedIndex === index ? 'bg-blue-500' : 'bg-gray-200'}`}
            >
              {day}
            </div>
          ))
        }
      </div>
    </div>
  </Section>
)
