import { SubmitPlanInput } from '../graphql';
declare type UserPlan = {
    planId: number;
    mealsPerWeek: number;
    firstDeliveryDay: string;
};
declare type UserAddress = {
    postalCode: number;
    address: string;
};
declare type UserData = {
    plan: UserPlan;
    firstName: string;
    lastName: string;
    email: string;
    address: UserAddress;
};
declare type User = {
    id: string;
    data: UserData;
    password: string;
};
export declare class UsersService {
    private users;
    findAll(): User[];
    save(user: SubmitPlanInput): User;
}
export {};
