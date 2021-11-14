import { Socket, io } from "socket.io-client";
import { createContext, useEffect, useState } from "react";

export const SocketContext = createContext<Socket>(null);

const webSocket = () => {
  const [webSocket, setSocket] = useState(null);
  useEffect(() => {
    // connect to socket server
    const socket = io("ws://localhost:4000", {
      autoConnect: true,
    });
    setSocket(socket);
    // log socket connection

    // socket disconnect onUnmount if exists
    if (socket)
      return () => {
        console.log("closing")
        socket.disconnect();
      };
  }, []);
  return webSocket;
};

export default webSocket;
