import Image from "next/image";
import UserLogo from '../images/user.svg'

const User = ({ name, familyname }) => {
	return (
        <div className="w-full flex border-b border-blue-300 pb-4 mb-6">
            <Image
                src={UserLogo}
                alt="default user"
                width={40}
                height={40}
            />
            <p className="ml-4 text-xl text-white mt-1">{name} {familyname}</p>
        </div>
	);
};

export default User;
