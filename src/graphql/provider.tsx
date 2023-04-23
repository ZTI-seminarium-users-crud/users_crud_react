import { ApolloProvider } from "@apollo/client";
import * as React from "react";

import apolloClient from "./client";

type Props = {
  children: React.ReactNode;
};

const GraphQLProvider: React.FC<Props> = ({ children }) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default GraphQLProvider;
