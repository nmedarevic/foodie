import { Module } from '@nestjs/common'
// import { PlansService } from 'src/plans/plans.service'
import { UsersResolver } from './users.resolver'
import { UsersService } from './users.service'

@Module({
  providers: [
    UsersService,
    UsersResolver,
    // PlansService
  ],
})
export class UsersModule {}
