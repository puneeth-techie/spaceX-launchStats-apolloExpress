import app from "./src/startup/app.js";
import http from "http";
import startApolloServer from "./src/graphql/startApolloServer.js";

/** init server */
const server = http.createServer(app);
const port = process.env.PORT || 4000;

/** init apollo server */
startApolloServer();

/** starting server */
server.listen(port, () => {
  console.log(`Server started listening on port: ${port}`);
});
