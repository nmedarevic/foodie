
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class SubmitPlanInput {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    postal: number;
    planId: number;
    mealsPerWeek: number;
    firstDeliveryDay: string;
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

    abstract users(): User[] | Promise<User[]>;
}

export abstract class IMutation {
    abstract submitPlan(plan?: SubmitPlanInput): NewUserData | Promise<NewUserData>;
}

export class UserPlan {
    planId?: string;
    mealsPerWeek?: number;
    firstDeliveryDay?: string;
}

export class UserAddress {
    postalCode?: number;
    address?: string;
}

export class UserData {
    plan?: UserPlan;
    firstName?: string;
    lastName?: string;
    email?: string;
    address?: UserAddress;
}

export class User {
    id?: string;
    data?: UserData;
    password?: string;
}
