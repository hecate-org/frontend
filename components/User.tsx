import Image from "next/image";
import UserLogo from '../images/user.svg'

const User = ({ text }) => {
	return (
            <div className="w-full m-6 flex">
                <Image
                    src={UserLogo}
                    alt="default user"
                    width={75}
                    height={75}
                />
                <p className="ml-8 text-2xl text-white">{text}</p>
            </div>
	);
};

export default User;
