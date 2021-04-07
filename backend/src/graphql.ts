
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class AddressInput {
    address: string;
    postal: number;
}

export class UserInput {
    firstName: string;
    lastName: string;
    email: string;
    address?: AddressInput;
}

export class PlanInput {
    planId: number;
    mealsPerWeek: number;
    firstDeliveryDay: string;
}

export class SubmitPlanInput {
    user?: UserInput;
    plan?: PlanInput;
}

export class Plan {
    name?: string;
    id?: number;
    pricePerMeal?: number;
    itemImage?: string;
}

export class NewUserData {
    response?: User;
}

export abstract class IQuery {
    abstract plans(): Plan[] | Promise<Plan[]>;

    abstract recipes(): Recipe[] | Promise<Recipe[]>;

    abstract users(): User[] | Promise<User[]>;

    abstract login(email?: string, password?: string): User | Promise<User>;
}

export abstract class IMutation {
    abstract submitPlan(plan?: SubmitPlanInput): NewUserData | Promise<NewUserData>;
}

export class Recipe {
    id?: string;
    name?: string;
    text?: string;
    image?: string;
}

export class UserPlan {
    planId?: number;
    mealsPerWeek?: number;
    firstDeliveryDay?: string;
    weeklyTotal?: number;
}

export class UserAddress {
    postalCode?: number;
    address?: string;
}

export class UserData {
    plan?: UserPlan;
    firstName?: string;
    lastName?: string;
    address?: UserAddress;
}

export class User {
    id?: string;
    email?: string;
    data?: UserData;
    token?: string;
}
