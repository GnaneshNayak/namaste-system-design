import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.listen(8000, () => {
  console.log('listening on port 8000');
});
