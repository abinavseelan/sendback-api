module.exports = {
  schema: {
    id: {
      type: 'string',
      required: true,
    },
    username: {
      type: 'string',
      required: true,
    },
    name: {
      type: 'string',
    },
  },
  data: [
    {
      id: '1',
      username: 'thanks',
      name: 'Tom Hanks',
    },
    {
      id: '2',
      username: 'aketchum',
      name: 'Ash Ketchum',
    },
  ],
};
