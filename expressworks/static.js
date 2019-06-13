const express = require('express');
const app = express();

app.use(express.static(process.argv[3]||Path2D.join(__dirname, 'public')));

app.listen(process.argv[2]);