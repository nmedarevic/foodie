import client from './../../../service/apollo-client'
import { gql } from "@apollo/client";

export const resolvers = {
  Query: {
    plans: async () => {
      const { data } = await client.query({
        query: gql`
          {
            plans {
              name
              id
              pricePerMeal
              itemImage
            }
          }
        `,
      });

      return data.plans
    }
  }
}
