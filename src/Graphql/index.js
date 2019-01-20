const { ApolloServer, gql } = require('apollo-server-express');
const fs = require('fs');
const schema = fs.readFileSync(__dirname.concat('/mock.schema.gql'), 'utf8')


const typeDefs = gql`${schema}`;

const resolvers = require('./mock.resolvers');


module.exports = new ApolloServer({
    typeDefs,
    resolvers,
});

