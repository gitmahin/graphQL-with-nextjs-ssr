import postService from "@/services/posts.service";

// Define the structure of arguments passed to the resolvers.
interface ArgsType {
  page: number;
}

interface SinglePostType {
  id: number;
}

// Resolver logic for the GraphQL `Query` type.
const postsResolver = {
  Query: {
    // Fetch all posts with optional pagination logic.
    posts: async (_: unknown, { page }: ArgsType) => {
      // Example pagination logic (can be implemented as needed):
      const limit = 10;
      const skip = (page - 1) * limit;

      const data = await postService.getAllPosts({
        skip,
        limit
      });
      return data;
    },

    // Fetch a single post based on its id. cause slug is not in data
    singlePost: async (_: unknown, { id }: SinglePostType) => {
      const data = await postService.getSinglePost({ id });
      return data;
    },
  },
};

export default postsResolver;
