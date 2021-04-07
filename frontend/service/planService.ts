import client from './apollo-client';
import { gql } from "@apollo/client";

let plansCache = []

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
