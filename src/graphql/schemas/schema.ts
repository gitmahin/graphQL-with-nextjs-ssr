// Import the GraphQL schema definition for the Post type.
import postDefs from "./post.schema";

// Export the consolidated type definitions, including `postDefs`.
export const typeDefs = `#graphql
  ${postDefs}
  #...more defs
`;
