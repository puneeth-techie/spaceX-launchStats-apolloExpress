import logo from "./logo.png";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import Launches from "./components/Launches";
import "./App.css";

const client = new ApolloClient({
  uri: process.env.API_URL,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <img
          src={logo}
          alt="spaceX"
          style={{ width: 400, display: "block", margin: "auto" }}
        />
      </div>
      <Launches />
    </ApolloProvider>
  );
}

export default App;
