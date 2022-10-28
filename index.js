require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./authMiddleware');

const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(authMiddleware);

const messagesRouter = require('./routes/messages');

app.use('/messages', messagesRouter);

app.get('/status', (req, res) => {
  res.send('ok');
});

app.listen(PORT, () => console.log(`mailer at http://localhost:${PORT}`));
