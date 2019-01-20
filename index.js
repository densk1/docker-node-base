const express = require('express');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

const graphql = require('./src/Graphql');

app.get('/', (req, res) => {
  res.status(200).send('Server is live');
})

// User graphql
graphql.applyMiddleware({ app });


const { SERVER_PORT } = process.env;
app.listen(SERVER_PORT, () =>
  console.log(`Running @ http://localhost:${SERVER_PORT}${graphql.graphqlPath}`),
);