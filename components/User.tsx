import Image from "next/image";
import UserLogo from '../images/user.svg'

const User = ({ name, familyname }) => {
	return (
            <div className="w-full m-6 flex">
                <Image
                    src={UserLogo}
                    alt="default user"
                    width={75}
                    height={75}
                />
                <p className="ml-8 text-3xl text-white"><span>{name}</span>{familyname}</p>
            </div>
	);
};

export default User;
