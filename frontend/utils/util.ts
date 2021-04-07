import { Plan } from "../types/Plan"

export const summaryData = {
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email",
  address: "Address",
  postal: "Postal code",
  mealsPerWeek: 'Meals per week',
  firstDeliveryDay: 'First delivery day'
}

export const getSummary = (cookies: any, availablePlans: [Plan]) => Object.keys(cookies).reduce((acc, key) => {
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
