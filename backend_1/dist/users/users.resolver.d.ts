import { UsersService } from './users.service';
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    users(): Promise<{
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
    }[]>;
    login(email: string, password: string): Promise<void>;
}
