import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://graphql-pokeapi.vercel.app/api/graphql",
});

export default client;
