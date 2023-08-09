import io from "socket.io-client";
import React, { createContext, useContext, useState } from "react";
import { SOCKET_EVENT_KEYS } from "@utils";

export const SocketContext = createContext(null);

export const useSocket = () => {
	const {socket} = useContext(SocketContext);
	return { socket }
};


const SocketProvider = ({children}: React.PropsWithChildren) => {

	const socketAddress = import.meta.env.VITE_API_URL
	const [socket, setSocket] = useState(io(socketAddress));


	socket.on('connect', () => {
		console.log('Connected to live alert server');
	});

	socket.on('disconnect', () => {
		console.log('Disconnected from server');
	});

	socket.on(SOCKET_EVENT_KEYS.prescription_update, (message: any) => {
		console.log("Received new prescription alert:", message);
	});



	return <SocketContext.Provider value={{ socket, setSocket }}>{children}</SocketContext.Provider>;

};

export default SocketProvider

