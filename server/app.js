const express = require('express');
const path = require('path');
const app = express();
const port = 8778;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (request, response) => {
  response.render('screens/home');
});

app.get('/about', (request, response) => {
  response.render('screens/about');
});

app.get('/collections', (request, response) => {
  response.render('screens/collections');
});

app.get('/details/:', (request, response) => {
  response.render('screens/details');
});

app.listen(port, () => {
  console.log(`Server app listening at http://localhost:${port}`);
});
