// const express = require('express');

// const routerTalker = express.Router();
// const { nameAuth } = require('../middleware/name_auth');
// const { tokenAuth } = require('../middleware/token_auth');
// const { talkers } = require('../services/talker');
// const { talkerId } = require('../services/talkerId');
// const { talkerAdd } = require('../services/talkerAdd');
// const { talkerDelete } = require('../services/talkerDelete');
// const { ageAuth } = require('../middleware/age_auth');
// const { talkAuth } = require('../middleware/talk_auth');
// const { talkRate } = require('../middleware/talkRate_auth');
// const { talkWatched } = require('../middleware/talkWatch_auth');

// routerTalker.get('/', talkers);

// routerTalker.get('/:id', talkerId);

// routerTalker
// .post('/', tokenAuth, nameAuth, ageAuth, talkAuth, talkRate, talkWatched, talkerAdd);

// routerTalker.delete('/:id', tokenAuth, talkerDelete);

// module.exports = {
//   routerTalker,
// };
