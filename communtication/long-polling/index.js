import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

let initialData = 'gnanesh';

const clientRes = [];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/getData', (req, res) => {
  const { prevData } = req.query;
  if (initialData !== prevData) {
    res.json({ initialData });
  } else {
    clientRes.push(res);
  }
});

app.get('/updateData', (req, res) => {
  initialData = req.query.initialData;

  console.log(initialData);

  while (clientRes.length > 0) {
    const client = clientRes.pop();
    client.json({ initialData });
  }

  res.json({ message: 'update successfully' });
});

app.listen(8000, () => {
  console.log('listening on port 8000');
});
