import express from 'express';
import 'express-async-errors';
import path from 'path';
import cors from 'cors';
import './routes';
import './bd/connection';
import routes from './routes';
import http from 'http';
import socketio from 'socket.io';

//import Bodyparser from 'body-parser'

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(3333);

const app2 = express();

app2.get("/server", (req, res) => {
    res.send({ response: "I am alive" }).status(200);
});

const server = http.createServer(app2);

const io = new socketio.Server(server);

let interval;

io.on("connection", (socket) => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

const getApiAndEmit = socket => {
    const response = new Date();
    // Emitting a new message. Will be consumed by the client
    socket.emit("FromAPI", response);
  };

server.listen(4444, () => console.log(`Listening on port ${4444}`));
