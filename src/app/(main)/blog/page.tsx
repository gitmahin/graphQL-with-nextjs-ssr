import React from "react"; // Importing React library for JSX syntax
import BlogClientComponent from "./blog-client-comp"; // Importing the client-side component that will display the blog posts
import apolloClient from "@/lib/apollo"; // Importing the configured Apollo client instance for GraphQL queries
import { gql } from "@apollo/client"; // Importing gql template literal to define GraphQL queries

// Defining the shape of a single Post object
interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// GraphQL query to fetch posts, requesting only necessary fields
const GET_POSTS = gql`
  query ($page: Int) {
    posts(page: $page) {
      userId
      id
      title
    }
  }
`;

// Defining the structure of the expected response for posts from the GraphQL query
type QueryType = {
  posts: PostType[];
};

// The main BlogPage component that fetches and displays posts
export default async function BlogPage() {
  // Fetching the posts from the GraphQL API, with 'no-cache' fetch policy to ensure fresh data every time
  const { data } = await apolloClient.query<QueryType>({
    query: GET_POSTS, // The query being executed
    variables: { page: 1 },
    fetchPolicy: "no-cache",
  });

  return <BlogClientComponent initialPosts={data.posts} />;
}
