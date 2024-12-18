// Import resolver logic for `post`-related queries.
import postsResolver from "./post.resolver";

// Combine all resolvers into a single object for the GraphQL server.
const resolvers = {
    Query: {
        ...postsResolver.Query, // Include `postsResolver` Query fields.
    },
};

export default resolvers;
