const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const app = express();
const schema = buildSchema(`
    type Query {
        hello: String,
        nodejs : Int       
    }
`);

const root = {
    hello: () => "hello world",
    nodejs: () => 20,
};

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true, //gui제공
    })
);

app.listen(4000, () => {
    console.log("running server port 4000");
});
