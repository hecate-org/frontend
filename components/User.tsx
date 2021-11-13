import Image from "next/image";
import UserLogo from '../images/user.svg'

const User = ({ text }) => {
	return (
            <div className="w-full m-4">
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
