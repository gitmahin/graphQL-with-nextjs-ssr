"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { gql } from "@apollo/client";
import apolloClient from "@/lib/apollo";

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

export default function BlogClientComponent({
  initialPosts,
}: {
  initialPosts: PostType[];
}) {
  const [ref, inView] = useInView();
  const [posts, setPosts] = useState<PostType[] | []>(initialPosts);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  async function loadMorePosts() {
    if (!hasMore) return;
    const next = page + 1;

    const { data } = await apolloClient.query<QueryType>({
      query: GET_POSTS, // The query being executed
      variables: { page: next },
    });

    if (!data?.posts.length) {
      setHasMore(false);
      return;
    }

    setPage(next);
    setPosts((prev) => [...prev, ...data.posts]);
  }

  useEffect(() => {
    if (inView) {
      loadMorePosts();
    }
  }, [inView]);

  return (
    <div className="w-full flex justify-center items-center flex-col ">
      <div className="max-w-[1000px] w-full mt-16 mb-5">
        <h1 className="text-[30px] font-semibold border-b pb-5">
          SSR With GraphQl
        </h1>
        <div className="flex justify-start items-start w-full pt-5 flex-wrap gap-3 ">
          {posts.map((item: PostType, i: number) => {
            return (
              <div
                className="border rounded-[10px] p-5 max-w-[300px] w-full overflow-hidden "
                key={i}
              >
                <Badge variant="secondary">Post no. {i + 1}</Badge>
                <h2 className="font-semibold text-[25px]">{item.title}</h2>
                <div className="flex justify-start items-center gap-2 mt-5">
                  <p className="font-semibold text-green-600">Published by</p>
                  <Badge>User: {item.userId}</Badge>
                </div>
                <Link href={`/blog/${item.id}`}>
                  <Button className="w-full mt-2">Button</Button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      {hasMore && (
        <div
          ref={ref}
          className="mt-5 mb-10 flex justify-center items-center w-full"
        >
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}
