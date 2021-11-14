import Image from "next/image";
import FinnanceLogo from "../images/finance.svg";
import DownloadLogo from "../images/download.svg";

const IncommingMessage = ({ text }) => {
  return (
    <div className="bg-gray-600 text-white flex p-3 rounded-r-2xl rounded-b-2xl max-w-md my-4 shadow-xl">
      <div className="px-5 w-24">
        <Image src={FinnanceLogo} alt="finance" width={35} height={35} />
      </div>
      <div className="w-full">{text}</div>
      <div className="px-5 text-gray-400">12:00</div>
    </div>
  );
};

export { IncommingMessage };

const OutgoingMessage = ({ text, time }) => {
  return (
    <div className="bg-gray-600 text-white flex p-3 rounded-l-2xl rounded-b-2xl max-w-md my-4 shadow-xl ml-auto">
      <div className="px-5 text-gray-400">{time.getHours()+":"+time.getMinutes()}</div>
      <div className="w-full">{text}</div>
      <div className="px-5 w-24">
        <Image src={FinnanceLogo} alt="finance" width={35} height={35} />
      </div>
    </div>
  );
};

export { OutgoingMessage };

const IncommingFile = ({ text }) => {
  return (
    <div className="bg-gray-600 text-white flex p-3 rounded-r-2xl rounded-b-2xl max-w-md my-4 shadow-xl">
      <div className="px-5 w-24">
        <Image src={FinnanceLogo} alt="finance" width={35} height={35} />
      </div>
      <div className="pr-5 w-24">
        <Image src={DownloadLogo} alt="finance" width={35} height={35} />
      </div>
      <div className="w-full">{text}</div>
      <div className="px-5 text-gray-400">12:00</div>
    </div>
  );
};

export { IncommingFile };

const OutgoingFile = ({ text, time }) => {
  const name = text.substring(0, text.indexOf("|"));
  console.log(typeof time)
  return (
    <div className="bg-gray-600 text-white flex p-3 rounded-l-2xl rounded-b-2xl max-w-md my-4 shadow-xl ml-auto">
      <div className="px-5 text-gray-400">{time.getHours()+":"+time.getMinutes()}</div>
      <div className="w-full">{name}</div>
      <div className="pl-5 w-24">
        <Image src={DownloadLogo} alt="finance" width={35} height={35} />
      </div>
      <div className="px-5 w-24">
        <Image src={FinnanceLogo} alt="finance" width={35} height={35} />
      </div>
    </div>
  );
};

export { OutgoingFile };

const IncommingImage = ({ image }) => {
  return (
    <div className="rounded-2xl">
      <Image src={image}></Image>
    </div>
  );
};

export { IncommingImage };

const OutgoingImage = ({ image }) => {
  return (
    <div className="rounded-2xl ml-auto max-w-sm">
      <img src={image} className="rounded-2xl"></img>
    </div>
  );
};

export { OutgoingImage };
