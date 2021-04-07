import cookieCutter from 'cookie-cutter'
import cookie from 'cookie'
import { useRouter } from 'next/router'
import { useReducer, useState } from 'react'
import { Section } from './../components/Section'
import { DeliveryAddress } from './../components/DeliveryAddress'
import { DeliveryDay } from './../components/DeliveryDay'

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
