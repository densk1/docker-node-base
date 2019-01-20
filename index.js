const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))

const mongodb = require('./src/MongoDb');


// const graphql = require('./src/Graphql');

app.get('/', (req, res) => {
  res.status(200).send('Server is live');
})

// User graphql
// graphql.applyMiddleware({ app });


const { SERVER_PORT } = process.env;
app.listen(SERVER_PORT, () =>
  console.log(`Running @ http://localhost:${SERVER_PORT}${false ? graphql.graphqlPath : '________'}`),
);