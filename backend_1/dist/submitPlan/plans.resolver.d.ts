import { PlansService } from './plans.service';
export declare class PlansResolver {
    private readonly plansService;
    constructor(plansService: PlansService);
    plans(): Promise<any>;
}
