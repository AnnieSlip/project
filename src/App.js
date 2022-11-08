import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { ErrorLink, onError } from "@apollo/client/link/error";
import React from "react";
import GetProducts from "./GetProducts";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: "http://localhost:4000/",
    // headers: { "Apollo-Require-Preflight": "true" },
  }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>Annie</div>
        <GetProducts />
      </ApolloProvider>
    );
  }
}

export default App;
