const axios = require('axios');

module.exports = (request, response, next) => {
  if (request.url.indexOf('/status-code') !== -1) {
    axios({
      method: 'post',
      url: 'https://www.google-analytics.com/collect',
      data: `v=1&t=event&tid=UA-96285546-2&cid=555&ec=${request.url}&ea=hit`,
      config: { headers: { 'Content-Type': 'multipart/form-data' } },
    })
    .then(() => console.log('Logged to analytics')); // eslint-disable-line
  }
  next();
};
