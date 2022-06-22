const { readFile } = require('../helpers/readWriteFile');

const searchAuth = async (req, res) => {
  const { q } = req.query;
  const palestrantes = await readFile('./talker.json');
  if (!q || q === undefined) return res.status(200).send(palestrantes);
  const arrayPalestrantes = JSON.parse(palestrantes).filter((e) => e.name.includes(q));
  if (arrayPalestrantes.length === 0) {
    return res.status(200).json([]);
  }
  return res.status(200).json(arrayPalestrantes);
};

module.exports = {
  searchAuth,
};