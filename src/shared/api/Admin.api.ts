import {  callApi } from "@utils";

const API_URL = import.meta.env.VITE_API_URL;

export const GetStudentInfo = async (id: string) => {
	const config = {
		method: "get",
		url: `${API_URL}/users?id=${encodeURI(id.trim().toLowerCase())}`,
		headers: {
			"Content-Type": "application/json",
		},
	};

	return await callApi(config);
};

export const EditUserMedicalInfo = async (data: { user_id: any; additional_medical_info: any; allergies: any }) => {
	const { user_id: id, additional_medical_info, allergies } = data;

	console.log(data);

	const payload = {
		medical_history: {
			additional_medical_info: additional_medical_info ? additional_medical_info.trim() : null,
			allergies: allergies ? allergies.trim() : null,
			surgeries: null,
			last_visit: null,
		},
	};

	const config = {
		method: "patch",
		url: `${API_URL}/users/edit?user_id=${id.toLowerCase().trim()}`,
		data: payload,
		headers: {
			"Content-Type": "application/json",
		},
	};

	console.log(config.url);

	return await callApi(config);
};



