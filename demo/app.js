const express = require('express');
const ejs = require('ejs');
const app = express();

app.use("")


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000);