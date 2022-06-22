const { deleteFile, readFile } = require('../helpers/readWriteFile');

const talkerPut = async (req, res) => {
  const { id } = req.params;
  const { name, age, talk: { watchedAt, rate } } = req.body;
  const array = await readFile('./talker.json');
  const index = JSON.parse(array).findIndex((e) => e.id === Number(id));
  const arrayParse = JSON.parse(array);
  arrayParse[index] = { id: Number(id), name, age, talk: { watchedAt, rate } };
  await deleteFile('./talker.json', arrayParse);
  return res.status(200).send((arrayParse[index]));
};

module.exports = {
  talkerPut,
};