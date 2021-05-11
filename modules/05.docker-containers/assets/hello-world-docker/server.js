'use strict';

const express = require('express');

const PORT = 8080;

const app = express();
app.get('/', (req, res) => {
  res.send('Hello World from Docker to Aminu!');
});

app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);
