import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

let count = 1;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/count', (req, res) => {
  res.json({ count });
});
app.get('/increase', (req, res) => {
  count++;
  res.send({ message: 'increased' });
});
app.listen(8000, () => {
  console.log('Listening on port 8000');
});
