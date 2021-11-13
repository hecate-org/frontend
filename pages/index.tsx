import { useReducer, useState, useEffect } from "react";
import Layout from "../components/Layout";
import webSocket from "../utils/websocket";
import { Message } from "../utils/interfaces";

const IndexPage = () => {
  const socketCon = webSocket();

  const [socket, setSocket] = useState(null);

  const sendMessage = (message:Message) =>{
    dispatch(message)
  }

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
        console.log("connected");
      });
      socketCon.on("message", () => {
        
        console.log("message");
      });
    }
  }, [socketCon]);

  return (
    <Layout title="Home">
      <div className="w-1/2 mx-auto mt-52">
        <p className="text-white text-3xl font-bold">You don’t have a channel selected</p>
        <p className="text-gray-300">Choose one from your existing channels</p>
      </div>
    </Layout>
  );
};

export default IndexPage;
