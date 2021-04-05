import cookieCutter from 'cookie-cutter'
import { useRouter } from 'next/router'
import cookie from 'cookie'
import { useReducer, useState } from 'react'
import { Section } from './../components/Section'
import { DeliveryForm } from './../components/DeliveryForm'

const DeliveryDay = ({availableDays, onClick, selectedIndex}) => (
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




const DeliveryAddress = (props) => (
  <Section>
    <div className='flex flex-col'>
      <h2 className='text-2xl'>Add delivery address</h2>
      <DeliveryForm onChange={props.onChange} />
    </div>
  </Section>
)

const formReducer = (state = {}, action) => {
  switch(action.type) {
    case 'ON_CHANGE':
      return {
        ...state,
        [action.field]: action.value
      }
    default:
      return state
  }
}

function PlanDetails (props) {
  const router = useRouter()
  const [dayIndex, setDayIndex] = useState(null)
  const [data, dispatch] = useReducer(formReducer, {})

  const onDeliveryAddressChange = ({field, value}) => {
    dispatch({ type: 'ON_CHANGE', field, value });
  }

  const onContinue = () => {
    cookieCutter.set('firstDeliveryDay', props.availableStartDates[dayIndex])

    for(let prop in data) {
      cookieCutter.set(prop, data[prop])
    }

    router.push('/summary')
  }

  return (
    <div className="w-screen h-screen">
      <DeliveryDay
        selectedIndex={dayIndex}
        onClick={setDayIndex}
        availableDays={props.availableStartDates}
      />
      <DeliveryAddress onChange={onDeliveryAddressChange}/>
      <Section>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={onContinue}
        >
          Continue
        </button>
      </Section>
    </div>
  )
}

export default PlanDetails

const oneDay = 86400000

export async function getServerSideProps({req}) {
  const cookies = cookie.parse(req.headers.cookie)

  return {
    props: {
      availableStartDates: new Array(7).fill(1).map((_, index) => (
        new Date(Date.now() + (index * oneDay)).toDateString()
      ))
    }
  }
}
