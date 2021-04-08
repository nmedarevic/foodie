import cookieCutter from 'cookie-cutter'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { MealsPerWeek, possibleTimesPerWeek } from '../components/SelectPlan/MealsPerWeek';
import { Continue } from '../components/SelectPlan/Continue';
import { Plan } from '../components/SelectPlan/Plan';
import * as planService from '../service/planService';
import { SelectPlanProps } from '../types/Plan';

const { getPlans } = planService
const calculateTotalCost = (availablePlans, planId, timesPerWeek) => {
  const plan = availablePlans.find((plan) => plan.id === planId)

  return timesPerWeek * plan.pricePerMeal
}

function SelectPlan ({availablePlans = []}: SelectPlanProps) {
  const router = useRouter()
  const [planId, setPlan] = useState(null)
  const [timesPerWeek, setTimesPerWeek] = useState(possibleTimesPerWeek[0])
  const [timesPerWeekShown, toggleTimesPerWeek] = useState(false)
  const [totalCost, setTotalCost] = useState(0)

  useEffect(() => {
    cookieCutter.set('mealsPerWeek', timesPerWeek)

    if (planId !== null) {
      setTotalCost(
        calculateTotalCost(availablePlans, planId, timesPerWeek)
      )
    }
  }, [timesPerWeek])

  useEffect(() => {
    cookieCutter.set('planId', planId)

    if (!timesPerWeekShown && planId !== null) {
      toggleTimesPerWeek(true)
    }

    if (planId !== null) {
      setTotalCost(
        calculateTotalCost(availablePlans, planId, timesPerWeek)
      )
    }
  }, [planId])

  const onContinue = () => {
    router.push('plan-details')
  }

  return (
    <div className="w-screen h-screen">
      <section className="bg-white py-8 flex flex-col">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12 self-center">
          <h1>Total cost: {totalCost}€</h1>
        </div>
      </section>
      <section className="bg-white py-8 flex flex-col">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12 self-center">
          {
            availablePlans.map((plan) => (
              <Plan
                data-test={plan.name}
                key={plan.name}
                name={plan.name}
                price={plan.pricePerMeal}
                planId={plan.id}
                onClick={setPlan}
                itemImage={plan.itemImage}
              />
            ))
          }
        </div>
        {
          timesPerWeekShown
            ? <MealsPerWeek timesPerWeek={timesPerWeek} onClick={setTimesPerWeek}/>
            : null
        }
        {
          timesPerWeekShown
            ? <Continue onContinue={onContinue}/>
            : null
        }
      </section>
    </div>
  )
}

export default SelectPlan

export async function getServerSideProps(context) {
  const plans = await getPlans()

  return {
    props: {
      availablePlans: plans
    }
  }
}
