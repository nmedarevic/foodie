import cookie from 'cookie'
import {Section} from '../components/Common/Section'
import { SumaryProps, SummaryItem } from '../components/SelectPlan/SummaryItem'
import { getPlans } from '../service/planService'
import { getSummary } from '../utils/util'

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

export async function getServerSideProps({req}) {
  const plans = await getPlans()

  const summary = getSummary(cookie.parse(req.headers.cookie), plans)

  return {
    props: { summary }
  }
}
