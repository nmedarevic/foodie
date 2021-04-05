import { Plan } from './../graphql';
export declare class PlansService {
    private readonly plans;
    findAll(): Plan[];
    findById(id: number): Plan;
}
