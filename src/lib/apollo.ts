import { ApolloClient, InMemoryCache } from "@apollo/client";

// Create an instance of ApolloClient with GraphQL API endpoint and caching strategy.
const apolloClient = new ApolloClient({
  uri: "http://localhost:3000/api/graphql", // The GraphQL server endpoint (relative path for server-side rendering compatibility).
  cache: new InMemoryCache(), // In-memory cache for efficient query data management.
});

export default apolloClient;
