import client from './apollo-client';
import { gql } from "@apollo/client";
import { SubmitPlanInput } from '../types/Summary';

let plansCache = []

export const submitPlan = async (props: SubmitPlanInput): Promise<string> => {
  const {data} = await client.mutate({
    mutation: gql`
      mutation m{
        submitPlan(plan:{
          user: {
            firstName: "${props.user.firstName}",
            lastName: "${props.user.lastName}",
            email: "${props.user.email}",
            address: {
              address: "${props.user.address.address}",
              postal: ${props.user.address.postal}
            }
          },
          plan: {
            planId: ${props.plan.planId},
            mealsPerWeek: ${props.plan.mealsPerWeek},
            firstDeliveryDay: "${props.plan.firstDeliveryDay}"
          }
        }) {
          response {
            token
          }
        }
      }
    `,
  });

  return data.submitPlan.response.token
}
export const getPlans = async () => {
  if (plansCache.length) {
    return plansCache
  }

  const {data} = await client.query({
    query: gql`
      query {
        plans {
          name
          id
          pricePerMeal
          itemImage
        }
      }
    `,
  });

  plansCache = data.plans

  return data.plans
}
