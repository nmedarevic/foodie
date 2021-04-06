import { Module } from '@nestjs/common'
import { UsersModule } from 'src/users/users.module'
import { UsersService } from 'src/users/users.service'
import { PlansResolver } from './plans.resolver'
import { PlansService } from './plans.service'

@Module({
  imports: [UsersModule],
  providers: [PlansService, PlansResolver, UsersService],
})
export class PlansModule {}
