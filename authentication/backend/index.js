import jwt from 'jsonwebtoken';
import express from 'express';

const app = express();

app.use(express.json());

const users = [
  {
    id: 1,
    username: 'gnanesh',
    password: 'pass',
    isAdmin: true,
  },
  {
    id: 2,
    username: 'bilva',
    password: 'pass',
    isAdmin: false,
  },
];
app.get('/', (req, res) => {
  res.send('hello');
});

const accessKey = 'secreteAccessKey';
const refreshKey = 'secreteRefreshKey';

const refreshTokens = [];

const generateAccessToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
      isAdmin: user.isAdmin,
    },
    accessKey,
    { expiresIn: '1m' },
  );
};
const generateRefreshToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
      isAdmin: user.isAdmin,
    },
    accessKey,
    { expiresIn: '15m' },
  );
};
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password,
  );

  if (user) {
    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);
    refreshTokens.push(newRefreshToken);

    user.accessToken = newAccessToken;
    user.refreshToken = newRefreshToken;
    res.status(200).json({
      user,
    });
  } else {
    res.status(400).json('username and password invalid');
  }
});

const verify = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, accessKey, (err, user) => {
      if (err) {
        res.status(403).json('Token is not valid!');
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json('your not authenticated!');
  }
};

app.delete('/user/:userId', verify, (req, res) => {
  console.log('here', req.user);
  console.log(req.params);
  if (req.user.id === req.params.userId || req.user.isAdmin) {
    res.status(200).json('User has been deleted.');
  } else {
    res.status(403).json('You are not allowed to delete this user!');
  }
});

app.post('/api/logout', verify, (req, res) => {
  const refreshToken = req.body.token;
  refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
  res.status(200).json('You logged out successfully.');
});

app.post('api/refresh', (req, res) => {
  const refreshToken = req.body.token;

  if (!refreshToken) return res.status(401).json('You are not authenticated!');
  if (!refreshTokens.includes(refreshToken)) {
    return res.status(403).json('Refresh token is not valid!');
  }
  jwt.verify(refreshToken, 'myRefreshSecretKey', (err, user) => {
    err && console.log(err);
    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);

    refreshTokens.push(newRefreshToken);

    res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  });
});

app.listen(8000, () => {
  console.log('listening on 8000');
});
