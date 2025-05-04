import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static('public'));

app.get('/ex1', (req, res) => {
  res.sendFile(__dirname + '/public/ex1.html');
});

app.get('/ex2', (req, res) => {
  res.sendFile(__dirname + '/public/ex2.html');
});
app.listen(8002, () => {
  console.log('listening on port 33');
});
