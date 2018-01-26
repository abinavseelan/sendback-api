const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 1337;

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.resolve(__dirname, '..', 'client')));

app.use('/api', routes.maintenance);
app.use('/api', routes.theme);
app.use('/status-code', routes.code);

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Running on port ${port}`); // eslint-disable-line
  });
}

module.exports = app;
