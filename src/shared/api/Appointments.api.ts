import { callApi,  } from "@utils";

const API_URL = import.meta.env.VITE_API_URL;

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

export const GetAppointmentInfo = async (appointment_id : string) => {
	const config = {
		method: "get",
		url: `${API_URL}/appointments/fetch?id=${appointment_id}`,
		headers: {
			"Content-Type": "application/json",
		},
	};

	return await callApi(config);
};


export const DeleteAppointment = async (id:string) => {

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

