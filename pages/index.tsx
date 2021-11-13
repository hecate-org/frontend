import Link from "next/link";
import { useReducer, useState, useEffect } from "react";
import Layout from "../components/Layout";
import webSocket from "../utils/websocket";
import { Message } from "../utils/interfaces";

const IndexPage = () => {
  const socketCon = webSocket();

  const [socket, setSocket] = useState(null);

  const [messages, dispatch] = useReducer((state: Message[], action: any) => {
    if (action.message) action.message.id = state.length + 1;
    switch (action.type) {
      case "SEND_MESSAGE":
        socket.emit("message", action.message);
        return [...state, action.message];
      case "RECEIVE_MESSAGE":
        return [...state, action.message];
      case "RESET_MESSAGES":
        return [];
      default:
        new Error("Unknown action type");
        return state;
    }
  }, []);

  useEffect(() => {
    if (socketCon) {
      socketCon.on("connect", () => {
        setSocket(socketCon);
        console.log("connected")
      });
    }
  }, [socketCon]);

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
    </Layout>
  );
};

export default IndexPage;
