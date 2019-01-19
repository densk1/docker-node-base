const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');
const router = require('express').Router();

// GraphQL schema
const schema = buildSchema(`
    type Query {
        message: String
    }
`);
// Root resolver
const root = {
    message: () => 'Hello World!'
};
// Create an express server and a GraphQL endpoint

router.use(express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));


module.exports = router;
