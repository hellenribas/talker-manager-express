const express = require('express');

const routerTalker = express.Router();
const { nameAuth } = require('../middleware/name_auth');
const { tokenAuth } = require('../middleware/token_auth');
const { readFile, writeFile, deleteFile } = require('../helpers/readWriteFile');
const { ageAuth } = require('../middleware/age_auth');
const { talkAuth } = require('../middleware/talk_auth');
const { talkRate } = require('../middleware/talkRate_auth');
const { talkWatched } = require('../middleware/talkWatch_auth');

const jsonFile = './talker.json';

routerTalker.get('/', async (_req, res) => {
  const talker = await readFile(jsonFile);
  if (!talker || talker === undefined) res.status(200).json(JSON.parse([]));
  res.status(200).json(JSON.parse(talker));
});

routerTalker.get('/:id', async (req, res) => {
  const { id } = req.params;
  const talker = await readFile(jsonFile);
  const palestrante = JSON.parse(talker).find((e) => e.id === Number(id));
  if (!palestrante || palestrante === undefined) {
    res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  res.status(200).json(palestrante);
});

routerTalker
.post('/', tokenAuth, nameAuth, ageAuth, talkAuth, talkRate, talkWatched, async (req, res) => {
  const palestrante = req.body;
  const file = await readFile(jsonFile);
  palestrante.id = JSON.parse(file).length + 1;
  writeFile('./talker.json', palestrante);
  res.status(201).json(palestrante);
});

routerTalker.delete('/:id', tokenAuth, async (req, res) => {
  const { id } = req.params;
  const arrayPalestrante = await readFile(jsonFile);
  const palestrantes = JSON.parse(arrayPalestrante).filter((e) => e.id !== Number(id));
  await deleteFile(jsonFile, palestrantes);
  return res.status(204).send(palestrantes);
});

module.exports = {
  routerTalker,
};
