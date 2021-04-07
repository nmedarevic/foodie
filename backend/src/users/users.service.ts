import { Injectable } from '@nestjs/common'
import { User, UserAddress, UserData, UserInput, UserPlan } from '../graphql'
import { uuid } from 'uuidv4'

const hashCode = function (input: string): string {
  let hash = 0,
    i,
    chr

  if (input.length === 0) return hash.toString()

  for (i = 0; i < input.length; i++) {
    chr = this.charCodeAt(i)
    hash = (hash << 5) - hash + chr
    hash |= 0
  }

  return hash.toString()
}

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
    const { password, ...restOfTheUser } = user

    return <User>{ ...restOfTheUser, token: hashCode(password) }
  }
}
