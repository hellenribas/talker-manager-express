const talkAuth = (req, res, next) => { 
  const { talk } = req.body;
  if (!talk || talk === undefined) {
    return res.status(400).json({
      message: 'O campo "talk" é obrigatório',
    });
}
  next();
};

module.exports = {
  talkAuth,
};