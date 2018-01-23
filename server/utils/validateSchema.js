const themes = require('../../themes');

module.exports = (request, response, next) => {
  const { theme } = request.params;

  if (!theme) {
    return response.sendStatus(400);
  }

  const { schema } = themes[theme];
  const schemaKeys = Object.keys(schema);

  let fail = false;

  schemaKeys.forEach((key) => {
    if (schema[key].required && !(key in request.body)) {
      fail = true;
    }

    const type = typeof request.body[key];
    if (type !== schema[key].type) {
      fail = true;
    }
  });

  if (fail) {
    return response.sendStatus(400);
  }

  next();
};
