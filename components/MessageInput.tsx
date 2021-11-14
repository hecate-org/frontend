import Link from "next/link";
import Image from "next/image";
import ArowLogo from "../images/send.svg";
import Upload from "../images/upload.svg";

const upload = () => {
  document.getElementById("ref").click();
};

const MessageInput = (props) => {
  return (
    <form action="#">
      <div className="flex items-center">
        <button
          onClick={upload}
          className="border-gray-600 border-1 p-3  bg-gray-600 rounded-xl mr-2"
        >
          <Image src={Upload} alt="upload" width={20} height={20} />
        </button>
        <input id="ref" hidden type="file" />
        <input
          className="p-2 py-3 outline-none rounded-xl text-md text-white border-gray-600 bg-gray-600 w-full focus:border-gray-500 pl-4"
          placeholder="Write a message ..."
          type="text"
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              props.sendMessage(e.currentTarget.value, "text");
              e.currentTarget.value = "";
              e.preventDefault();
            }
          }}
        />
        <div className="border-gray-600 border-2 p-3  bg-gray-600 rounded-xl ml-2border-gray-600 border-2 p-3  bg-gray-600 rounded-xl ml-2   leading-4">
          <Image src={ArowLogo} alt="Arow" width={20} height={20} />
        </div>
      </div>
    </form>
  );
};

export default MessageInput;
