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
