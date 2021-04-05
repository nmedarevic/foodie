import cookie from 'cookie'
import {Section} from './../components/Section'

type SummaryItemType = {
  label: string;
  value: string;
}
type SummaryData = {
  [key:string]: SummaryItemType
}
type SumaryProps = {
  summary: SummaryData
}

type SummaryItemProps = {
  key: string;
  item: SummaryItemType
}

const SummaryItem = ({key, item}: SummaryItemProps) => (
  <div key={key} className='block'>
    <span key={`${key}-key`}>{item.label}</span>
    <span key={`${key}:`}>{':   '}</span>
    <span key={`${key}-value`}>{item.value}</span>
  </div>
)

function Summary (props: SumaryProps) {
  const onContinue = () => {

  }

  return (
    <div className="w-screen h-screen">
      <Section className='space-y-4'>
        {
          Object.keys(props.summary).map((key) => (
            <SummaryItem key={key} item={props.summary[key]} />
          ))
        }
      </Section>
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

export default Summary

const availablePlans = [
  {
    name: 'Breakfast',
    id: 0,
    pricePerMeal: 10,
    itemImage: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'
  },
  {
    name: 'Elevensies',
    id: 1,
    pricePerMeal: 20,
    itemImage: 'https://images.unsplash.com/photo-1608634070674-2db08b533d3a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'
  }
]

const summaryData = {
  fistName: "First Name",
  lastName: "Last Name",
  email: "Email",
  address: "Address",
  postal: "Postal code",
  mealsPerWeek: 'Meals per week',
  firstDeliveryDay: 'First delivery day'
}

const parseCookies = (cookies: any) => Object.keys(cookies).reduce((acc, key) => {
  const item = cookies[key]

  if (key === 'planId') {
    const plan = availablePlans.find((p) => p.id === Number(item))
    const mealsPerWeek = Number(cookies.mealsPerWeek)

    return {
      ...acc,
      [key]: {
        label: plan.name,
        value: plan.pricePerMeal * mealsPerWeek
      }
    }
  }

  return {...acc, [key]: {
    label: summaryData[key],
    value: cookies[key]
  }}
}, {})

export async function getServerSideProps({req}) {
  const cookies = cookie.parse(req.headers.cookie)

  return {
    props: {
      summary: parseCookies(cookies)
    }
  }
}
