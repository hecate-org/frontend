import Image from "next/image";
import FinnanceLogo from "../images/finance.svg";

const MessageHeader = ({ text }) => {
	return (
		<div className="flex items-center border-solid border-2 border-gray-600 bg-gray-600 w-full mr-auto ml-auto rounded-xl mt-2 text-3xl p-2">
        <Image src={FinnanceLogo} alt="finance" width={60} height={60} />
			<h1 className="ml-2 text-white">{text}</h1>
		</div>
	);
};

export default MessageHeader;
