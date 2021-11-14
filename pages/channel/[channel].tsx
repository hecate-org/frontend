import { Message, MessageTypes } from "@hecate-org/blingaton-types/build";
import { useContext, useEffect, useReducer, useState } from "react";

import Layout from "../../components/Layout";
import MessageHeader from "../../components/MessageHeader";
import MessageInput from "../../components/MessageInput";
import Messages from "../../components/Messages";
import { SocketContext } from "../../utils/websocket";
import { useRouter } from "next/router";

const Channel = () => {
  const router = useRouter();
  const { channel } = router.query;

  const ws = useContext(SocketContext);

  const [channelObject, setChannelObject] = useState(null);
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
        console.log("action: ", action.messageObject);
        ws.emit("message", action.messageObject);
        return [...state, action.messageObject];
      case "RECEIVE_MESSAGE":
        return [...state, action.messageObject];
      case "RESET_MESSAGES":
        return [];
      default:
        new Error("Unknown action type");
        return state;
    }
  }, []);
  useEffect(() => {
    if (!channel || !ws) return;
    ws.emit("login", "1");
    console.log("channelid: ", Number(channel));
    ws.emit("joinRoom", channel);
    ws.emit("getChannel", channel);
  }, [channel,ws]);
  useEffect(() => {
    if (ws) {
      ws.on("connect", () => {
        setSocket(ws);
        console.log("connected");
      });
      ws.on("message", (message: Message) => {
        dispatch({ type: "RECEIVE_MESSAGE", message });
      });
      ws.on("channelInfo", (channel) => {
        console.log("channelemit", channel);
        setChannelObject(channel);
      });
    }
  }, [ws]);

  return (
    <Layout title="Finance">
      <div className="flex flex-col justify-between h-full">
        <MessageHeader text={channelObject?.name}></MessageHeader>
        <Messages messages={messages}></Messages>
        <MessageInput sendMessage={sendMessage}></MessageInput>
      </div>
    </Layout>
  );
};

export default Channel;
