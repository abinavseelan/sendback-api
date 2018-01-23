const themes = require('../../themes');

exports.getObjects = (request, response) => {
  const { theme } = request.params;
  const { perPage, page } = response.locals.pagination;

  if (!theme) {
    return response.sendStatus(400);
  }

  const objects = themes[theme].filter((object, index) => {
    if (index >= (perPage * (page - 1)) && index < (perPage * page)) {
      return true;
    }

    return false;
  });

  response.status(200).json(objects);
};

exports.getSingleObject = (request, response) => {
  const { theme, id } = request.params;

  if (!theme || !id) {
    return response.sendStatus(400);
  }

  const object = themes[theme].find((obj) => {
    if (obj.id === id) {
      return true;
    }

    return false;
  });

  if (!object) {
    return response.sendStatus(404);
  }

  response.status(200).json(object);
};
