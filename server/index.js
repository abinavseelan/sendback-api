const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 1337;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes.maintenance);
app.use('/', routes.theme);

app.listen(port, () => {
  console.log(`Running on port ${port}`); // eslint-disable-line
});
