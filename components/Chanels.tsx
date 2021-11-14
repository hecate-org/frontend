import { useContext, useEffect, useState } from "react";
import Chanel from "./Chanel";
import { SocketContext } from "../utils/websocket";


const Chanels = () => {
	const ws = useContext(SocketContext);
	const [channels, setChannels] = useState([])
	useEffect(() => {
		if(ws){
			ws.reply("login", "1");
			ws.reply("getChannels")
			ws.on("allChannels",channels=>{
				setChannels(channels)
				console.log(channels)
			})
		}
	}, [ws])
	return (
		<div>
			{channels.map(channel=>{
				return(<Chanel name={channel.name} id={channel.id} lastMessage={channel.description}></Chanel>)
			})}
		</div>
	);
};

export default Chanels;
