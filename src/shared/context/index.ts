import { createContext } from "react";

type userContextProps = {
	user: {
		_id: object
		email: string,
		role: string,
		name: string,
		phone: string
	};
	setUser: (user: object) => {};
};

export const UserContext = createContext <userContextProps> (<userContextProps>{
	user: null,
	setUser: (user) => {
	},
});
