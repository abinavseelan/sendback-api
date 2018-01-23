module.exports = (request, response, next) => {
  let { per_page: perPage, page } = request.query;

  // Set some defaults
  perPage = perPage || 25;
  page = page || 1;

  response.locals = Object.assign(response.locals, {
    pagination: {
      perPage,
      page,
    },
  });

  next();
};
