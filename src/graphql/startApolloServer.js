import { ApolloServer } from "apollo-server-express";
import app from "../startup/app.js";
import typeDefs from "./typeDefs.js";
import resolvers from "./resolvers.js";

/** apollo server function */
const startApolloServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground:
      process.env.NODE_ENV !== "development"
        ? false
        : {
            settings: {
              "request.credentials": "include",
            },
          },
  });

  await server.start();
  server.applyMiddleware({ app });
};

export default startApolloServer;
