import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { PlansService } from './plans.service'
import { SubmitPlanInput } from './../graphql'
import { UsersService } from 'src/users/users.service'

@Resolver('Plan')
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
    const user = this.usersService.save(plan)

    return {
      response: user,
    }
  }
}
