require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT;

const app = express();

app.get('/status', (req, res) => {
  res.send('ok');
});

app.listen(PORT, () => console.log(`mailer at http://localhost:${PORT}`));
