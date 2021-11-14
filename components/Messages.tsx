import {
  IncommingFile,
  IncommingMessage,
  OutgoingFile,
  OutgoingMessage,
} from "./Message";

import { Message } from "@hecate-org/blingaton-types/build";

const Messages = (props) => {
  console.log(props);
  return (
    <div className="h-full py-4 overflow-y-scroll ">
      <IncommingMessage text="Heel lekkere text enz"></IncommingMessage>
      <OutgoingMessage text="Heel lekkere text enz"></OutgoingMessage>
      <IncommingFile text="Heel lekkere text enz"></IncommingFile>
      <OutgoingFile text="Heel lekkere text enz"></OutgoingFile>
      {props.messages &&
        props.messages.map((message: Message, index: number) => {
          console.log(message);
          return (
            <OutgoingMessage
              key={index}
              text={message.content}
            ></OutgoingMessage>
          );
        })}
    </div>
  );
};

export default Messages;
