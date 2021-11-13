import Link from "next/link";
import Image from "next/image";
import ArowLogo from "../images/send.svg"

const MessageInput = () => {
    return (
        <form action="#">
            <div className="flex mb-0 mt-auto">
                <input className="p-2 rounded-2xl border-gray-600 bg-gray-600 w-full focus:border-gray-500 pl-4" placeholder="Write a message..."  type="text" />
                <Link href="#">
                    <div className="border-gray-600 bg-gray-600 rounded-xl p-4 ml-2 ">
                        <Image
                            src={ArowLogo}
                            alt="Arow"
                            width={20}
                            height={20}
                        />
                    </div>
                </Link>
            </div>
                
        </form>
    );
  };
  
  export default MessageInput;