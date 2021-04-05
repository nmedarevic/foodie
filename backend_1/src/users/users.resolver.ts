import { Args, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';

@Resolver('Plan')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query('users')
  async users() {
    return this.usersService.findAll();
  }

  @Query('login')
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    console.log(email, password);
  }
}
