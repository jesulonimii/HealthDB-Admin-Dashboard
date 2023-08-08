import {callApi } from "@utils";

const API_URL = import.meta.env.VITE_API_URL;

export const Login = async (email, password) => {

	const payload = {
		email: email.toLowerCase().trim(),
		password: password.trim(),
	};

	console.log(payload);

	const config = {
		method: "post",
		url: `${API_URL}/admin/login`,
		data: payload,
		headers: {
			"Content-Type": "application/json"
		},
	};

	return await callApi(config)
};
export const Signup = async ({ password, first_name, last_name, matric_number }) => {
	const payload = {
		"first_name" : first_name.trim(),
		"last_name" : last_name.trim(),
		"matric_number" : matric_number.toLowerCase().trim(),
		"password": password.trim()
	};

	const config = {
		method: "post",
		url: `${API_URL}/auth/signup`,
		data: payload,
		headers: {
			"Content-Type": "application/json"
		},
	};

	return await callApi(config)
};


