import Image from "next/image";
import FinnanceLogo from "../images/finance.svg";

const MessageHeader = ({ text }) => {
	return (
		<div className="flex border-solid border-2 border-gray-800 bg-gray-800 w-9/12 m-auto rounded-xl  mt-2 text-3xl ">
			<div className="ml-2">
        <Image src={FinnanceLogo} alt="finance" width={60} height={60} />
      </div>
			<h1 className="ml-2 text-white">{text}</h1>
		</div>
	);
};

export default MessageHeader;
