// https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-express
import express = require("express");
const { ApolloServer } = require("apollo-server-express");
import { resolvers } from "./graphql/resolvers";
import { typeDefs } from "./graphql/typeDefs";
const { verifyKunde } = require("./auth/jwt");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }: any) => {
    const token = req.headers.authorization || "";
    const kunde = await verifyKunde(token);
    return { kunde };
  }
});

const app = express();
server.applyMiddleware({ app });

//  https://medium.com/javascript-in-plain-english/typescript-with-node-and-express-js-why-when-and-how-eb6bc73edd5d
app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
