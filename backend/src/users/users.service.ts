import { Injectable } from '@nestjs/common'
import { User, UserAddress, UserData, UserInput, UserPlan } from '../graphql'
import { uuid } from 'uuidv4'
import { sign } from 'jsonwebtoken'
import { secret } from '../secret'

export class StoredUser extends User {
  password: string
}

@Injectable()
@Injectable()
export class UsersService {
  private users: Array<StoredUser> = []

  findAll(): StoredUser[] {
    return this.users
  }

  save(user: UserInput, plan: UserPlan): StoredUser {
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
      address: userAddress,
    }
    const newUser = <StoredUser>{
      id: uuid(),
      email,
      salt: Date.now(),
      password: '12345',
      data: userData,
    }

    this.users.push(newUser)

    return newUser
  }

  findByEmail(email: string): StoredUser {
    const user = this.findAll().find((user: StoredUser) => user.email === email)

    if (!user) {
      throw new Error('User does not exist!')
    }

    return user
  }

  getUserWithToken(user: StoredUser): User {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...restOfTheUser } = user
    const token = sign(
      {
        email: restOfTheUser,
      },
      secret,
      { expiresIn: '24h' }
    )

    return <User>{ ...restOfTheUser, token }
  }
}
