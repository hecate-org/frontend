import Layout from "../components/Layout";
import MessageHeader from "../components/MessageHeader";
import Messages from "../components/Messages";
import MessageInput from "../components/MessageInput";

const FinancePage = () => {
  return (
    <Layout title="Finance">
      <div className="flex flex-col justify-between h-full">
        <MessageHeader text="Finance"></MessageHeader>
        <Messages></Messages>
        <MessageInput></MessageInput>
      </div>
    </Layout>
  );
};

export default FinancePage;