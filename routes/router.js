const express = require('express');
const generator = require('generate-password');

const router = express.Router();

router.post('/', async (_req, res) => {
  const token = generator.generate({
    length: 16,
    numbers: true,
  });
  console.log(token);
  res.status(200).send({ token });
});

module.exports = {
  router,
};