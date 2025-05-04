import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.static('public'));

app.get('/frame1', (req, res) => {
  res.sendFile(__dirname + '/public/iframe1.html');
});

app.get('/frame2', (req, res) => {
  res.sendFile(__dirname + '/public/iframe2.html');
});

app.listen(8002, () => {
  console.log('Listening on port 8000');
});
