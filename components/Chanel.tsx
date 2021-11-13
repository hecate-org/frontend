import Link from "next/link";
import Image from "next/image";
import FinaceneLogo from '../images/finance.svg'

const Chanel = ({ text }) => {
	return (
		<Link href="#" >
            <div>
                <Image
                    src={FinaceneLogo}
                    alt="default user"
                    width={125}
                    height={125}
                />
                <p>{text}</p>
            </div>
        </Link>
	);
};

export default Chanel;
