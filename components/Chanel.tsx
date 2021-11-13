import Link from "next/link";
import Image from "next/image";
import FinanceLogo from '../images/finance.svg'

const Chanel = ({ text }) => {
	return (
		<Link href={`/${text}`} >
            <div>
                <Image
                    src={FinanceLogo}
                    alt="Finance"
                    width={125}
                    height={125}
                />
                <p>{text}</p>
            </div>
        </Link>
	);
};

export default Chanel;
