const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.get('/', (req, res) => {
  res.status(200).send('Server is live');
})

const { SERVER_PORT } = process.env;

app.listen(SERVER_PORT, () => console.log(`Running on port ${SERVER_PORT}`));