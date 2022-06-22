const { readFile, writeFile } = require('../helpers/readWriteFile');

const talkerAdd = async (req, res) => {
  const palestrante = req.body;
  const file = await readFile('./talker.json');
  palestrante.id = JSON.parse(file).length + 1;
  await writeFile('./talker.json', palestrante);
  return res.status(201).json(palestrante);
};

module.exports = {
  talkerAdd,
};