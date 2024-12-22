import React from "react";
import { gql } from "@apollo/client";
import apolloClient from "@/lib/apollo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

// Defining the structure of a single post response from GraphQL
interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Defining the shape of the expected response for a single post query
type QueryType = {
  singlePost: PostType;
};

// GraphQL query to fetch a single post by its ID
const GET_SINGLE_POST = gql`
  query ($id: Int) {
    singlePost(id: $id) {
      userId
      title
      body
    }
  }
`;

// ContentPage component responsible for fetching and displaying a single post based on the ID in the URL
export default async function ContentPage({
  params,
}: {
  params: Promise<{ id: string }>; // The id parameter from the route
}) {
  const { id } = await params; // Extracting the post ID from the route parameters
  // Making the GraphQL query to fetch the single post using the ID
  const { data } = await apolloClient.query<QueryType>({
    query: GET_SINGLE_POST, // The GraphQL query to be executed
    variables: { id: parseInt(id) }, // Providing the ID as a variable, ensuring it's an integer
    fetchPolicy: 'no-cache'
  });

  return (
    <div className="w-full flex justify-center items-center ">
      <div className="max-w-[800px] w-full mt-16 mb-24">
        <div className="flex justify-start items-center gap-3">
          <Link href={"/blog"}>
            <Button
              variant="secondary"
              className="rounded-[50px] font-semibold flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="var(--foreground)"
                fill="none"
              >
                <path
                  d="M3.99982 11.9998L19.9998 11.9998"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.99963 17C8.99963 17 3.99968 13.3176 3.99966 12C3.99965 10.6824 8.99966 7 8.99966 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>Back</p>
            </Button>
          </Link>
          <Separator orientation="vertical" className="h-7" />
          <h1 className="text-[30px] font-semibold">SSR With GraphQl</h1>
        </div>
        <Separator className="my-4" />
        <div className="mt-5">
          <Badge>Published By ID: {data.singlePost.userId}</Badge>
          <h2 className="font-semibold text-[25px] mt-5">
            {data.singlePost.title}
          </h2>
          <p className="mt-5">{data.singlePost.body}</p>
        </div>
      </div>
    </div>
  );
}
