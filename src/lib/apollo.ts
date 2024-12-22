import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const link = new HttpLink({
  uri: "http://localhost:3000/api/graphql", // The GraphQL server endpoint (relative path for server-side rendering compatibility).
  fetchOptions: {
    cache: "no-store", // Disable caching on the network level
  },
});

// Create an instance of ApolloClient with GraphQL API endpoint and caching strategy.
const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache({ resultCaching: false })
});

export default apolloClient;
