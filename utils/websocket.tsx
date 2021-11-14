import { Socket, io } from "socket.io-client";
import { createContext, useEffect, useState } from "react";

import { DefaultEventsMap } from "@socket.io/component-emitter";

interface CustomSocket extends Socket {
  reply: (
    ev: string,
    ...args: any[]
  ) => Socket<DefaultEventsMap, DefaultEventsMap>;
}

export const SocketContext = createContext<CustomSocket>(null);

const webSocket = () => {
  const [webSocket, setSocket] = useState<CustomSocket>(null);
  useEffect(() => {
    // connect to socket server
    const socket = io("ws://localhost:4000", {
      autoConnect: true,
    });

    const customSocket = socket as CustomSocket;

    customSocket.reply = (
      ev: string,
      ...args: any[]
    ): Socket<DefaultEventsMap, DefaultEventsMap> => {
      // TODO: Implement encryption here!

      return socket.emit(ev, ...args);
    };

    setSocket(customSocket);
    // log socket connection

    // socket disconnect onUnmount if exists
    if (socket)
      return () => {
        console.log("closing");
        socket.disconnect();
      };
  }, []);

  return webSocket;
};

export default webSocket;
