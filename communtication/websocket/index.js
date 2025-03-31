import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { Server } from 'socket.io';
import { createServer } from 'node:http';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get('/', (req, res) => res.sendFile(join(__dirname, './index.html')));

io.on('connection', (socket) => {
  console.log('user connected');

  socket.on('chat message', (msg) => {
    console.log('message received:', msg);
    io.emit('chat message', msg); // emit to all clients
  });

  socket.on('disconnected', () => {
    console.log('user disconnected');
  });
});

server.listen(8000, () => console.log('listening on port 8000'));
