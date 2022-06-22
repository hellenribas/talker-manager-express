const { readFile } = require('../helpers/readWriteFile');

const talkers = async (_req, res) => {
  const talker = await readFile('./talker.json');
  if (!talker || talker === undefined) return res.status(200).json(JSON.parse([]));
  return res.status(200).json(JSON.parse(talker));
};

module.exports = {
  talkers,
};
