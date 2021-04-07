import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { PlansService } from './plans.service'
import { SubmitPlanInput, UserPlan } from './../graphql'
import { UsersService } from './../users/users.service'
import { Injectable } from '@nestjs/common'

@Resolver('Plan')
@Injectable()
export class PlansResolver {
  constructor(
    private readonly plansService: PlansService,
    private readonly usersService: UsersService
  ) {}

  @Query('plans')
  async plans() {
    return this.plansService.findAll()
  }

  @Mutation('submitPlan')
  async submitPlan(@Args('plan') plan: SubmitPlanInput) {
    const desiredPlan = this.plansService.findById(plan.plan.planId)
    const weeklyTotal = desiredPlan.pricePerMeal * plan.plan.mealsPerWeek

    const userPlan: UserPlan = {
      planId: plan.plan.planId,
      weeklyTotal,
      mealsPerWeek: plan.plan.mealsPerWeek,
      firstDeliveryDay: plan.plan.firstDeliveryDay,
    }
    const newUser = this.usersService.save(plan.user, userPlan)

    return {
      response: newUser,
    }
  }
}
