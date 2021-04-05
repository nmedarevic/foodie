import { PlansService } from './plans.service';
import { SubmitPlanInput } from './../graphql';
import { UsersService } from 'src/users/users.service';
export declare class PlansResolver {
    private readonly plansService;
    private readonly usersService;
    constructor(plansService: PlansService, usersService: UsersService);
    plans(): Promise<import("./../graphql").Plan[]>;
    submitPlan(plan: SubmitPlanInput): Promise<{
        response: {
            id: string;
            data: {
                plan: {
                    planId: number;
                    mealsPerWeek: number;
                    firstDeliveryDay: string;
                };
                firstName: string;
                lastName: string;
                email: string;
                address: {
                    postalCode: number;
                    address: string;
                };
            };
            password: string;
        };
    }>;
}
