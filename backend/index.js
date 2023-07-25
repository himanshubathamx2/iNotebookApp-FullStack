const connectToMongo = require('./db');
const express = require('express')

connectToMongo();
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hello bats');
})

app.listen(port, () => {
  console.log(`example app listeing at http://localhost:${port}`)
})