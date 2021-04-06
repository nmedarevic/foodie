import { Injectable } from '@nestjs/common'
import { Plan } from './../graphql'

const availablePlans: Plan[] = [
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

@Injectable()
export class PlansService {
  private readonly plans: Array<Plan> = availablePlans

  findAll(): Plan[] {
    return this.plans
  }

  findById(id: number): Plan {
    return this.plans.find(({ id: planId }) => planId === id)
  }
}
