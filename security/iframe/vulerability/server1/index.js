import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.static('public'));

app.get('/ex1', (req, res) => {
  res.sendFile(__dirname + '/public/example1.html');
});

app.get('/ex2', (req, res) => {
  res.sendFile(__dirname + '/public/example2.html');
});

app.listen(8001, () => {
  console.log('Listening on port 8000');
});
