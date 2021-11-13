import {IncommingMessage,OutgoingMessage} from "./Message";

const Messages = () => {
    return (
      <div className="h-full py-4">
          <IncommingMessage text="Heel lekkere text enz"></IncommingMessage>
          <OutgoingMessage text="Heel lekkere text enz"></OutgoingMessage>
      </div>
    );
  };
  
  export default Messages;