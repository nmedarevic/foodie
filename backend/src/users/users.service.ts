import { Injectable } from '@nestjs/common'
import {
  SubmitPlanInput,
  User,
  UserAddress,
  UserData,
  UserInput,
  UserPlan,
} from '../graphql'
import { uuid } from 'uuidv4'

class SaveUser extends SubmitPlanInput {
  weeklyTotal: number
}
@Injectable()
export class UsersService {
  private users: Array<User> = []

  findAll(): User[] {
    return this.users
  }

  save(user: UserInput, plan: UserPlan): User {
    const {
      firstName,
      lastName,
      email,
      address: { postal, address },
    } = user
    const { planId, mealsPerWeek, firstDeliveryDay, weeklyTotal } = plan

    const userPlan = <UserPlan>{
      planId,
      mealsPerWeek,
      firstDeliveryDay,
      weeklyTotal,
    }
    const userAddress = <UserAddress>{
      address,
      postalCode: postal,
    }
    const userData = <UserData>{
      plan: userPlan,
      firstName,
      lastName,
      email,
      address: userAddress,
    }
    const newUser = <User>{
      id: uuid(),
      data: userData,
      password: '12345',
    }

    this.users.push(newUser)

    return newUser
  }
}
