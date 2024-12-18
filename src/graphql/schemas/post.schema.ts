const postDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Posts" type defines the queryable fields for every book in our data source.
  type Posts {
    userId: String
    id: String
    title: String
    body: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "posts" query returns an array of zero or more Posts (defined above).
  type Query {
    posts: [Posts],
    singlePost(id: Int): Posts
  }
`;

export default postDefs;
