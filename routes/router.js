const express = require('express');
const generator = require('generate-password');
const { nameAuth } = require('../middleware/name_auth');
const { tokenAuth } = require('../middleware/token_auth');
const { talkers } = require('../services/talker');
const { talkerId } = require('../services/talkerId');
const { talkerAdd } = require('../services/talkerAdd');
const { talkerDelete } = require('../services/talkerDelete');
const { ageAuth } = require('../middleware/age_auth');
const { talkAuth } = require('../middleware/talk_auth');
const { talkRate } = require('../middleware/talkRate_auth');
const { talkWatched } = require('../middleware/talkWatch_auth');
const { emailAuth } = require('../middleware/login_auth');
const { passwordAuth } = require('../middleware/password_auth');
const { talkerPut } = require('../services/talkerPut');

const router = express.Router();

router.get('/talker', talkers);

router.get('/talker/:id', talkerId);

router
.post('/talker', tokenAuth, nameAuth, ageAuth, talkAuth, talkRate, talkWatched, talkerAdd);

router.post('/login', emailAuth, passwordAuth, async (_req, res) => {
  const token = generator.generate({
    length: 16,
    numbers: true,
  });
  console.log(token);
  res.status(200).send({ token });
});

router.put(
'/talker/:id', tokenAuth, nameAuth, ageAuth, talkAuth, talkRate, talkWatched, talkerPut,
);

router.delete('/talker/:id', tokenAuth, talkerDelete);

module.exports = {
  router,
};