import { useReducer, useState, useEffect } from "react";
import webSocket from "../../utils/websocket";
import Layout from "../../components/Layout";
import MessageHeader from "../../components/MessageHeader";
import Messages from "../../components/Messages";
import MessageInput from "../../components/MessageInput";
import { useRouter } from "next/router";
import { Message, MessageTypes } from "@hecate-org/blingaton-types/build";

const Channel = () => {
  const router = useRouter();
  const { channel } = router.query;

  const socketCon = webSocket();

  const [socket, setSocket] = useState(null);

  const sendMessage = (message: string, type: MessageTypes) => {
    const messageObject: Message = {
      content: message,
      type: type,
      timestamp: Number(new Date()),
      channel: Number(channel),
    };
    console.log("1action: ", messageObject);

    dispatch({ type: "SEND_MESSAGE", messageObject });
  };

  const [messages, dispatch] = useReducer((state: Message[], action: any) => {
    switch (action.type) {
      case "SEND_MESSAGE":
        console.log("action: ", action.message);
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
      socketCon.on("message", (message: Message) => {
        dispatch({ type: "RECEIVE_MESSAGE", message });
      });
    }
  }, [socketCon]);

  return (
    <Layout title="Finance">
      <div className="flex flex-col justify-between h-full">
        <MessageHeader text={channel}></MessageHeader>
        <Messages messages={messages}></Messages>
        <MessageInput sendMessage={sendMessage}></MessageInput>
      </div>
    </Layout>
  );
};

export default Channel;
