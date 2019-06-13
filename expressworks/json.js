const express = require('express');
const app = express();

app.get('/books', function(req, res) {
  res.json(JSON.parse(require('fs').readFileSync(process.argv[3])));
});

app.listen(process.argv[2]);