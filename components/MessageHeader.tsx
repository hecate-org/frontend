import Image from "next/image";
import FinnanceLogo from "../images/finance.svg";

const MessageHeader = ({ text }) => {
	return (
		<div className="flex items-center border-solid shadow-xl border-4 border-gray-600 bg-gray-600 w-full mr-auto ml-auto mt-2 text-3xl p-4 rounded-3xl">
        <Image src={FinnanceLogo} alt="finance" width={60} height={60} />
			<h1 className="ml-4  text-white">{text}</h1>
		</div>
	);
};

export default MessageHeader;
