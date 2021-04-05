import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import client from '../service/apollo-client';

import { ApolloProvider } from "@apollo/client";
// import client from "../apollo-client";
function MyApp({ Component, pageProps }) {
  return <ApolloProvider client={client}>
    <Component {...pageProps} />
    </ApolloProvider>
}

// MyApp.getInitialProps = async () => {
//   const data = await client.query({
//     query: gql`Query A {
//       plans {
//        name
//        id
//        pricePerMeal
//        itemImage
//      }
//    }`,
//   });
//   console.log(data)

//   return {
//     props: data
//   }
// }

export default MyApp
