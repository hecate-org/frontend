import {
  IncommingFile,
  IncommingMessage,
  OutgoingFile,
  OutgoingImage,
  OutgoingMessage,
} from "./Message";

import { Message } from "@hecate-org/blingaton-types/build";

const Messages = (props) => {
  console.log(props);
  return (
    <div className="h-full py-4 my-2 overflow-y-scroll ">
      {/* <IncommingMessage text="Heel lekkere text enz"></IncommingMessage>
      <OutgoingMessage
        text="Heel lekkere text enz"
        time="12:00"
      ></OutgoingMessage>
      <IncommingFile text="Heel lekkere text enz"></IncommingFile>
      <OutgoingFile text="Heel lekkere text enz" time="12:00"></OutgoingFile> */}
      {props.messages &&
        props.messages.map((message: Message, index: number) => {
          console.log(message);
          if (message.type == "document") {
            return (
              <OutgoingFile
                time={new Date(message.timestamp)}
                key={index}
                text={message.content}
              ></OutgoingFile>
            );
          } else if (message.type == "image") {
            return <OutgoingImage image={message.content}></OutgoingImage>;
          } else {
            return (
              <OutgoingMessage
                time={new Date(message.timestamp)}
                key={index}
                text={message.content}
              ></OutgoingMessage>
            );
          }
        })}
    </div>
  );
};

export default Messages;
