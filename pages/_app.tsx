import "../styles/index.css";

import webSocket, { SocketContext } from "../utils/websocket";

import { AppProps } from "next/app";
import React, { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const ws = webSocket();
  return (
    <SocketContext.Provider value={ws}>
      <Component {...pageProps} />
    </SocketContext.Provider>
  );
}

export default MyApp;
