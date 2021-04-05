import  {  gql  }  from  "apollo-server-micro";

export const typeDefs = gql`
  type Plan {
    name: String
    id: Int
    pricePerMeal: Int
    itemImage: String
  }

  type Query {
    plans: [Plan]
  }
`
