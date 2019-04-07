import express = require("express");
import graphqlHTTP = require("express-graphql");
import GraphQLSchema = require("./graphql/graphqlSchema");

// Create a new express application instance
const app: express.Application = express();

//  https://medium.com/javascript-in-plain-english/typescript-with-node-and-express-js-why-when-and-how-eb6bc73edd5d
app.get("/", function(req, res) {
  res.send("Hello World!");
});

//  TODO: Rest routes

// https://github.com/graphql/express-graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema: GraphQLSchema,
    graphiql: true
  })
);

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
