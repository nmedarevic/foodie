import React from 'react'
import { render } from '@testing-library/react'
import SelectPlan from './select-plan'

jest.mock('../service/planService', () => ({
  getPlans: jest.fn(),
  submitPlan: jest.fn()
}))

const plans = [
  {
    name: 'Small Breakfast',
    id: 0,
    pricePerMeal: 10,
    itemImage:
      'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
  },
  {
    name: 'Breakfast + Second Breakfast + Elevenses + Luncheon',
    id: 1,
    pricePerMeal: 20,
    itemImage:
      'https://images.unsplash.com/photo-1608634070674-2db08b533d3a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
  },
]

test('should render wihtout any props', () => {
  const { container } = render(<SelectPlan />)

  const examplePlanDataTest = `plan-item-${plans[0].name.replace(' ', '')}`
  expect(container.querySelector(`[data-test="${examplePlanDataTest}"]`)).toBeNull()
})

test('should render plans', () => {
  const { container } = render(<SelectPlan availablePlans={plans} />)

  const renderedPlans = container.querySelectorAll(`[data-test*="plan-item"]`)
  expect(renderedPlans.length).toBe(plans.length)
})
