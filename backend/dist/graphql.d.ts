export declare class SubmitPlanInput {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    postal: number;
    planId: number;
    mealsPerWeek: number;
    firstDeliveryDay: string;
}
export declare class Plan {
    name?: string;
    id?: number;
    pricePerMeal?: number;
    itemImage?: string;
}
export declare class NewUserData {
    response: User;
}
export declare abstract class IQuery {
    abstract plans(): Plan[] | Promise<Plan[]>;
    abstract users(): User[] | Promise<User[]>;
    abstract login(email?: string, password?: string): User | Promise<User>;
}
export declare abstract class IMutation {
    abstract submitPlan(plan?: SubmitPlanInput): NewUserData | Promise<NewUserData>;
}
export declare class UserPlan {
    plan?: Plan;
    mealsPerWeek?: number;
    firstDeliveryDay?: string;
}
export declare class UserAddress {
    postalCode?: number;
    address?: string;
}
export declare class UserData {
    plan?: UserPlan;
    firstName?: string;
    lastName?: string;
    email?: string;
    address?: UserAddress;
}
export declare class User {
    id?: string;
    data?: UserData;
    password?: string;
}
