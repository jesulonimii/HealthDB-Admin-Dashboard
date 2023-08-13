import io from "socket.io-client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { SOCKET_EVENT_KEYS } from "@utils";
import { useLocalStorage } from "@hooks";

const socketAddress = import.meta.env.VITE_API_URL;
const socket = io(socketAddress)
export const SocketContext = createContext(null);

export const useSocket = () => {
	return useContext(SocketContext);
};


const SocketProvider = ({children}: React.PropsWithChildren) => {

	const {getFromSession, saveToSession } = useLocalStorage()

	const [prescriptions, setPrescriptions] = useState(getFromSession('received-prescriptions') || []);


	useEffect(() => {

		if (socket) {
			socket.on("connect", () => {
				console.log("Connected to backend server");
			});

			socket.on("disconnect", () => {
				console.log("Disconnected from server");
			});


		}
	}, [socket]);



	return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;

};

export default SocketProvider

