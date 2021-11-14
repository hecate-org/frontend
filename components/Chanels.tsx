import { useContext } from "react";
import Chanel from "./Chanel";
import { SocketContext } from "../utils/websocket";


const Chanels = () => {
	const ws = useContext(SocketContext);

	return (
		<div>

			<Chanel name="finance" lastMessage="Yo betaal je tax en shit" ></Chanel>
		</div>
	);
};

export default Chanels;
