import React from "react";
import { useDispatch } from "react-redux";
import io from "socket.io-client";
import { Authority, Message } from "./IF";
import { addSignInMessage, addMessage } from "./features/Chat/chatSlice";

let socket: SocketIOClient.Socket;

export default function Socket() {
  const dispatch = useDispatch();

  if (!socket) {
    socket = io(":3000");
    socket.on("userAdd", (message: Message) => {
      console.log("userAdd: " + message);
      dispatch(addSignInMessage(message));
    });
    socket.on("chatMessage", (message: Message) => {
      console.log("chatMessage:" + message);
      // dispatch(incremantRecvValue(data));
      dispatch(addMessage(message));
    });
  }

  return <></>;
}

export function signIn(userName: string): void {
  const message: Message = {
    auth: Authority.system,
    name: userName,
    uuid: null,
    message: null,
  };
  socket.emit("signIn", message);
}

export function sendChat(data: Message): void {
  console.log("auth2: " + data.auth);
  console.log("name2: " + data.name);
  console.log("uuid2: " + data.uuid);
  console.log("message2: " + data.message);
  socket.emit("chatMessage", data);
}
