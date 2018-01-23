exports.sendCode = (request, response) => {
  const { code } = request.params;

  if (!code) {
    return response.status(200).json({
      message: 'Provide a status code 🦄',
    });
  }

  response.sendStatus(code);
};
