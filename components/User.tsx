import Image from "next/image";
import UserLogo from '../images/user.svg'

const User = ({ text }) => {
	return (
            <div>
                <Image
                    src={UserLogo}
                    alt="default user"
                    width={125}
                    height={125}
                />
                <p>{text}</p>
            </div>
	);
};

export default User;
