import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

const user = [
  {
    id: 1,
    name: 'Gnanesh',
    age: 27,
  },
  {
    id: 2,
    name: 'nayak',
    age: 29,
  },
];

app.all('/', (req, res) => {
  res.send('hi');
});

app.get('/user', (req, res) => {
  res.send(user);
});

app.post('/user', (req, res) => {
  const newUser = req.body;

  user.push(newUser);

  res.json({ message: 'user as been created' });
});

app.put('/user/:id', (req, res) => {
  const { id } = req.params;
  const updateUser = req.body;

  const indexUser = user.findIndex((u) => u.id === Number(id));
  console.log(indexUser);

  if (indexUser !== -1) {
    user[indexUser] = {
      id,
      ...updateUser,
    };
    res.json({ message: ' user update' });
  } else {
    res.json({ message: ' user not found' });
  }
});
app.delete('/user/:id', (req, res) => {
  const { id } = req.params;
  const updateUser = req.body;

  const indexUser = user.findIndex((u) => u.id === Number(id));

  if (indexUser !== -1) {
    user.splice(indexUser, 1);

    res.json({ message: ' user update' });
  } else {
    res.json({ message: ' user not found' });
  }
});

app.listen(8000, () => {
  console.log('listening on port 8000');
});
