"use client"; // Enables client-side rendering for this component in Next.js.

import React from "react";
import { ApolloProvider } from "@apollo/client"; // ApolloProvider integrates Apollo Client with the React app.
import apolloClient from "@/lib/apollo"; // Import the configured Apollo Client instance.

export default function ApolloClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Wraps the React app with ApolloProvider to enable GraphQL operations via Apollo Client.
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
