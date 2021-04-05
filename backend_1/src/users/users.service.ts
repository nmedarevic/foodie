import { Injectable } from '@nestjs/common';
import { SubmitPlanInput } from '../graphql';
import { uuid } from 'uuidv4';

type UserPlan = {
  planId: number;
  mealsPerWeek: number;
  firstDeliveryDay: string;
};
type UserAddress = {
  postalCode: number;
  address: string;
};
type UserData = {
  plan: UserPlan;
  firstName: string;
  lastName: string;
  email: string;
  address: UserAddress;
};

type User = {
  id: string;
  data: UserData;
  password: string;
};

@Injectable()
export class UsersService {
  private users: Array<User> = [];

  findAll(): User[] {
    return this.users;
  }

  save(user: SubmitPlanInput): User {
    const {
      firstName,
      lastName,
      email,
      address,
      postal,
      planId,
      mealsPerWeek,
      firstDeliveryDay,
    } = user;

    const userPlan = <UserPlan>{
      planId,
      mealsPerWeek,
      firstDeliveryDay,
    };
    const userAddress = <UserAddress>{
      address,
      postalCode: postal,
    };
    const userData = <UserData>{
      plan: userPlan,
      firstName,
      lastName,
      email,
      address: userAddress,
    };
    const newUser = <User>{
      id: uuid(),
      data: userData,
      password: '12345',
    };

    this.users.push(newUser);

    return newUser;
  }
}
