import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.get('/sse', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('Cache-Control', 'no-cache');

  res.write('data: welcome to sse \n\n');

  const intervalId = setInterval(() => {
    res.write(`data: new seconds ${new Date().getSeconds()} \n\n`);
  }, 1000);

  res.on('close', () => clearInterval(intervalId));
});
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(8000, () => {
  console.log('Listening on port 8000');
});
