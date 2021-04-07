import { ApolloProvider } from "@apollo/client";
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import client from '../service/apollo-client';


function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
