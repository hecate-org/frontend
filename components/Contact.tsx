import Image from "next/image";
import FinaceneLogo from '../images/finance.svg'

const Contact = ({ text }) => {
	return (
		<div>
			<Image
				src={FinaceneLogo}
				alt="default user"
				width={125}
				height={125}
			/>
			<p>{text}</p>
		</div>
	);
};

export default Contact;
