import cookieCutter from 'cookie-cutter'
import { useRouter } from 'next/router'
import cookie from 'cookie'
import { useEffect, useReducer, useState } from 'react'

const Section = (props) => (
  <section className="bg-white py-8 flex">
    <div className="container mx-auto flex items-center flex-wrap flex-col pt-4 pb-12 self-center">
      {props.children}
    </div>
  </section>
)

function Summary (props) {
  return (
    <div className="w-screen h-screen">
      <Section className='space-y-4'>
        {
          Object.keys(props.parsed).map((key) => (
            <div key={key} className='block'>
              <span key={`${key}-key`}>{props.parsed[key].label}</span>
              <span key={`${key}:`}>{':   '}</span>
              <span key={`${key}-value`}>{props.parsed[key].value}</span>
            </div>
          ))
        }
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

export async function getServerSideProps({req}) {
  const cookies = cookie.parse(req.headers.cookie)

  const parsed = Object.keys(cookies).reduce((acc, key) => {
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

  return {
    props: {
      parsed
    }
  }
}
