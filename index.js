const express = require('express');
const bodyParser = require('body-parser');
const { router } = require('./routes/router');
const { emailAuth } = require('./middleware/login_auth');
const { passwordAuth } = require('./middleware/password_auth');
const { routerTalker } = require('./routes/talkerRoutes');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use('/talker', routerTalker);
app.use('/login', emailAuth, passwordAuth, router);

app.listen(PORT, () => {
  console.log('Online');
});
