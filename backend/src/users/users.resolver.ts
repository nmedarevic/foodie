import { Args, Query, Resolver } from '@nestjs/graphql'
import { PlansService } from 'src/plans/plans.service'
import { UsersService } from './users.service'

@Resolver('Plan')
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService // private readonly plansService: PlansService
  ) {}

  @Query('users')
  async users() {
    return this.usersService.findAll()
  }

  // @Query('login')
  // async login(
  //   @Args('email') email: string,
  //   @Args('password') password: string
  // ) {
  //   console.log(email, password, this.plansService.findAll())
  // }
}
