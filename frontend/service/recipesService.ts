import client from './apollo-client';
import { gql } from "@apollo/client";

export const getRecipes = async (cookies): Promise<any> => {
  const {data} = await client.query({
    context: {
      headers: {
        Authorization: cookies.token
      }
    },
    query: gql`
      query recipes {
        recipes {
          id
          image
          name
          text
        }
      }
    `,
  });

  return data.recipes
}
