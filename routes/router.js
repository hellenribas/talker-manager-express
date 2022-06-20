const express = require('express');

const router = express.Router();
const { readFile } = require('../helpers/readWriteFile');

router.get('/', async (_req, res) => {
  const talker = await readFile('./talker.json');
  if (!talker || talker === undefined) res.status(200).json(JSON.parse([]));
  res.status(200).json(JSON.parse(talker));
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const talker = await readFile('./talker.json');
  const palestrante = JSON.parse(talker).find((e) => e.id === Number(id));
  if (!palestrante || palestrante === undefined) {
    res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  res.status(200).json(palestrante);
});

module.exports = {
  router,
};