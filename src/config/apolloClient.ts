import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://jokely-server.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});
