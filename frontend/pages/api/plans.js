// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from "../../service/apollo-client";
import { gql } from "@apollo/client";
export default (req, res) => {
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  });

  // return {
  //   props: {
  //     countries: data.countries.slice(0, 4),
  //   },
  // };
  res.status(200).json({...data })
}
