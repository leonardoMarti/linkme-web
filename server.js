const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();

router.use(express.static(path.join(__dirname, 'build')));

router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('/', router);

const isDevMode = process && process.env && process.env.NODE_ENV === 'development';

let PORT = 80;

if (isDevMode) {
  PORT = 4000;
}

app.listen(PORT);
