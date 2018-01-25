const themes = require('../../themes');

module.exports = (request, response, next) => {
  const { theme } = request.params;

  if (!theme) {
    return response.sendStatus(400);
  }

  const { schema } = themes[theme];
  const schemaKeys = Object.keys(schema);

  const fail = {};

  schemaKeys.forEach((key) => {
    if (schema[key].required && !(key in request.body)) {
      fail[key] = 'This is a required field';
    }

    const type = typeof request.body[key];
    if (type !== 'undefined' && type !== schema[key].type) {
      fail[key] = `Expected ${schema[key].type}`;
    }
  });

  if (Object.keys(fail).length) {
    return response.status(400).send(fail);
  }

  next();
};
