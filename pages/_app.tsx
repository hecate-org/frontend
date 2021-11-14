import "../styles/index.css";

import webSocket, { SocketContext } from "../utils/websocket";

import { AppProps } from "next/app";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const ws = webSocket();
  ws.emit("login", "1");
  return (
    <SocketContext.Provider value={ws}>
      <Component {...pageProps} />
    </SocketContext.Provider>
  );
}

export default MyApp;
