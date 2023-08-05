import {callApi} from "@utils";

const API_URL = import.meta.env.VITE_API_URL;

export const GetUserInfo = async (id: string) => {
	const config = {
		method: "get",
		url: `${API_URL}/users?id=${encodeURI(id.trim().toLowerCase())}`,
		headers: {
			"Content-Type": "application/json",
		},
	};

	return await callApi(config);
};
