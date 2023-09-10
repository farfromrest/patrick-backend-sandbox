const fs = require('node:fs');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

const validUser = {
  email: 'john@doe.com',
  password: 'changeme',
};

app.set('view engine', 'pug');

app.use(express.urlencoded());

app.use(express.static('public'));

app.use(bodyParser.json());

app.use(cookieParser());

app.get('/', (req, res) => {
  console.log('cookies:', req.cookies);
  res.render('index');
});

app.post('/login', (req, res) => {
  if (
    req.body.email === validUser.email &&
    req.body.password === validUser.password
  ) {
    res.send('yup');
  } else {
    res.send('nope');
  }
});

app.post('/new-login', (req, res) => {
  console.log('req:', req);
  res.cookie('user', '1', { maxAge: 900000, httpOnly: true });
  res.json({
    status: 'success',
  });
});

app.listen(3000, () => {
  console.log('express is running on port 3000');
});
