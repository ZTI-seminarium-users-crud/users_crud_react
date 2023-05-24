import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "https://zti-sem-backend-graphql.onrender.com/graphql",
  cache: new InMemoryCache(),
});

export default apolloClient;
