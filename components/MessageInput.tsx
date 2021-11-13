import Link from "next/link";
import Image from "next/image";
import ArowLogo from "../images/send.svg"

const MessageInput = () => {
    return (
        <form action="">
            <div className="flex">
                <input className="p-2 rounded-3xl border-gray-600 bg-gray-600 "  type="text" />
                <Link href="#">
                    <div >
                        <Image
                            src={ArowLogo}
                            alt="Arow"
                            width={40}
                            height={40}
                        />
                    </div>
                </Link>
            </div>
                
        </form>
    );
  };
  
  export default MessageInput;