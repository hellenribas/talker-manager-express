const { readFile, deleteFile } = require('../helpers/readWriteFile');

const talkerDelete = async (req, res) => {
  const { id } = req.params;
  const arrayPalestrante = await readFile('./talker.json');
  const palestrantes = JSON.parse(arrayPalestrante).filter((e) => e.id !== Number(id));
  await deleteFile('./talker.json', palestrantes);
  return res.status(204).send();
};

module.exports = {
  talkerDelete,
};