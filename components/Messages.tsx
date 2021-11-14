import {IncommingFile, IncommingMessage,OutgoingFile,OutgoingMessage} from "./Message";

const Messages = () => {
    return (
      <div className="h-full py-4">
          <IncommingMessage text="Heel lekkere text enz"></IncommingMessage>
          <OutgoingMessage text="Heel lekkere text enz"></OutgoingMessage>
          <IncommingFile text="Heel lekkere text enz"></IncommingFile>
          <OutgoingFile text="Heel lekkere text enz"></OutgoingFile>
      </div>
    );
  };
  
  export default Messages;