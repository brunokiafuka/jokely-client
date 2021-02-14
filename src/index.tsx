import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { StoreProvider } from "./context/storeContext";
import { ApolloProvider } from "@apollo/client";
import { client } from "./config/apolloClient";
import Routes from "./routes";
import GlobalStyles from "./config/globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <StoreProvider>
        <Routes />
        <GlobalStyles />
      </StoreProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
