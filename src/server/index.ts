import express from "express";
import http from "http";
import Server from "socket.io";
import uuid from "uuid";
import { Message } from "../IF";

const app: express.Express = express();
const server: http.Server = http.createServer(app);
const io = new Server.Server(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("connection");
  socket.on("signIn", (message: Message) => {
    console.log("signIn: " + message);
    message.uuid = uuid.v4();
    socket.emit("userAdd", message);
    socket.nsp.emit("chatMessage", message);
  });
  socket.on("chatMessage", (msg: string) => {
    console.log("chatMessage: " + msg);
    socket.nsp.emit("chatMessage", msg);
  });
  socket.on("disconnect", () => {
    console.log("disconnected");
  });
});

server.listen(3000, () => console.log("listening on *:3000"));
