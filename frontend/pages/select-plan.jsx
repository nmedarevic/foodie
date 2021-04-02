import cookieCutter from 'cookie-cutter'
import { useRouter } from 'next/router'
import { Fragment, useEffect, useState } from 'react'

const Plan = ({name, price, onClick, planId, itemImage}) => (
  <div
    className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col cursor-pointer"
    onClick={() => onClick(planId)}
  >
    <img className="hover:grow hover:shadow-lg" src={itemImage} />
    <div className="pt-3 flex items-center justify-between">
      <p className="">{name}</p>
    </div>
    <p className="pt-1 text-gray-900">{price}€</p>
  </div>
)

const possibleTimesPerWeek = [1, 2, 3, 4, 5]

const MealsPerWeek = ({onClick, timesPerWeek}) => {
  return (
    <section className="bg-white py-8 flex">
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12 self-center">
      {possibleTimesPerWeek.map((times) => (
        <div className='px-2'>
          <input
            type="radio"
            id={times}
            name={times}
            value={times}
            checked={times === timesPerWeek}
            onClick={() => onClick(times)}
          />
          <label className='px-2' htmlFor={times}>{times}</label>
        </div>
      ))}
    </div>
    </section>
  )
}

const Continue = ({onContinue}) => (
  <section className="bg-white py-8 flex">
    <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12 self-center">
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={onContinue}
      >
        Continue
      </button>
    </div>
  </section>
)

const calculateTotalCost = (availablePlans, planId, timesPerWeek) => {
  const plan = availablePlans.find((plan) => plan.id === planId)

  return timesPerWeek * plan.pricePerMeal
}

function SelectPlan (props) {
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
            props.availablePlans.map((plan) => (
              <Plan
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

export async function getServerSideProps(context) {
  return {
    props: {
      availablePlans
    }
  }
}
