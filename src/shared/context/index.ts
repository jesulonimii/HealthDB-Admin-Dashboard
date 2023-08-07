import { createContext } from "react";

type userContextProps = {
	user: object;
	setUser: (user: object) => {};
};

export const UserContext = createContext <userContextProps> (<userContextProps>{
	user: null,
	setUser: (user) => {
	},
});
