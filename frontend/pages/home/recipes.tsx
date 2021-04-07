import cookie from 'cookie'
import cookieCutter from 'cookie-cutter'
import {Section} from '../components/Common/Section'
import { SumaryProps, SummaryItem } from '../components/SelectPlan/SummaryItem'
import { getPlans, submitPlan } from '../service/planService'
import { getSummary } from '../utils/util'
import {SubmitPlanInput} from '../types/Summary'
import { useRouter } from 'next/router'

function Recipes (props: any) {
  const router = useRouter()

  return (
    <div className="w-screen h-screen">
      <Section className='space-y-4'>
        {
          Object.keys(props.summary).map((key) => (
            <SummaryItem itemKey={key} item={props.summary[key]} />
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

export default Recipes

export async function getServerSideProps({req}) {
  const plans = await getPlans()
  const parsedCookies = cookie.parse(req.headers.cookie)
  const summary = getSummary(parsedCookies, plans)

  return {
    props: {
      summary,
      data: parsedCookies
    }
  }
}
