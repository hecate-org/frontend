import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import MessageHeader from "../../components/MessageHeader";
import Messages from "../../components/Messages";
import MessageInput from "../../components/MessageInput";

const Channel = () => {
  const router = useRouter();
  const { channel } = router.query;
  return (
    <Layout title="Finance">
      <div className="flex flex-col justify-between h-full">
        <MessageHeader text={channel}></MessageHeader>
        <Messages></Messages>
        <MessageInput></MessageInput>
      </div>
    </Layout>
  );
};

export default Channel;
