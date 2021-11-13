import Link from "next/link";
import Image from "next/image";
import FinanceLogo from '../images/finance.svg'
import Arrow from '../images/arrow.svg'

const Chanel = ({ name, lastMessage }) => {
	return (
		<Link href={`/${name}`} >
            <div className="flex cursor-pointer items-center">
                <Image
                    src={FinanceLogo}
                    alt="Finance"
                    width={60}
                    height={60}
                />
                <div className="ml-2 text-white">
                    <p className="text-xl">{name}</p>
                    <p className="text-sm">{lastMessage}</p>
                </div>
                <div className="ml-auto">
                    <Image
                        src={Arrow}
                        alt="Arrow"
                        width={25}
                        height={25}
                    />
                </div>
            </div>
        </Link>
	);
};

export default Chanel;
