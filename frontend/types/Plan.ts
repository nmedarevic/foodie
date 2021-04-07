export type Plan = {
  name: string
  id: number
  pricePerMeal: number
  itemImage: string
}

export type SelectPlanProps = {
  availablePlans: [Plan];
}
