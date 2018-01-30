exports.ping = (request, response) => {
  response.status(200).send('Pong!🏓');
};

module.exports = exports;
