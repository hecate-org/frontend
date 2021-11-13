import Image from "next/image";
import UserLogo from '../images/user.svg'

const User = ({ name, familyname }) => {
	return (
            <div className="w-full m-6 flex border-b border-indigo-600">
                <Image
                    src={UserLogo}
                    alt="default user"
                    width={75}
                    height={75}
                />
                <p className="ml-8 text-3xl text-white"><span className="block">{name}</span>{familyname}</p>
            </div>
	);
};

export default User;
