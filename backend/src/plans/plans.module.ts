import { Module } from '@nestjs/common'
import { UsersModule } from './../users/users.module'
import { PlansResolver } from './plans.resolver'
import { PlansService } from './plans.service'

@Module({
  imports: [UsersModule],
  providers: [PlansService, PlansResolver],
})
export class PlansModule {}
