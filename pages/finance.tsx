import Layout from "../components/Layout";
import MessageHeader from "../components/MessageHeader";
import Messages from "../components/Messages";
import MessageInput from "../components/MessageInput";

const FinancePage = () => {
  return (
    <Layout title="Finance">
      <MessageHeader text="Finance"></MessageHeader>
      <Messages></Messages>
      <MessageInput></MessageInput>
    </Layout>
  );
};

export default FinancePage;