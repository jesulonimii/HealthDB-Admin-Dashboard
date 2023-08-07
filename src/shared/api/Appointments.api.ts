import { callApi,  } from "@utils";

const API_URL = import.meta.env.API_URL;

export const GetAppointments = async () => {
	const config = {
		method: "get",
		url: `${API_URL}/appointments`,
		headers: {
			"Content-Type": "application/json",
		},
	};

	return await callApi(config);
};
export const DeleteAppointment = async (id) => {

	const config = {
		method: "delete",
		url: `${API_URL}/appointments/delete?user_id=${id.toLowerCase().trim()}`,
		headers: {
			"Content-Type": "application/json",
		},
	};

	const info = await callApi(config);
	return true;
};

