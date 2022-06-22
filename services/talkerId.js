const { readFile } = require('../helpers/readWriteFile');

const talkerId = async (req, res) => {
  const { id } = req.params;
  const talker = await readFile('./talker.json');
  const palestrante = JSON.parse(talker).find((e) => e.id === Number(id));
  if (!palestrante || palestrante === undefined) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  return res.status(200).json(palestrante);
};

module.exports = {
  talkerId,
};