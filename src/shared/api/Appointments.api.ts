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

export const SendPrescription = async (appointment_id : string, { student_id, ...rest }: any) => {
	const config = {
		method: "post",
		url: `${API_URL}/appointments/prescriptions/create?user_id=${student_id}`,
		headers: {
			"Content-Type": "application/json",
		},
		data: {
			name :  rest.medication_name,
			details : rest.medication_details,
			date: rest.date,
			appointment_id: appointment_id
		},
	};

	return await callApi(config);
};

export const CreateDoctorReport = async ({ student_id, ...rest }: any) => {
	const config = {
		method: "post",
		url: `${API_URL}/appointments/medical-reports/create?user_id=${student_id}`,
		headers: {
			"Content-Type": "application/json",
		},
		data: rest,
	};

	return await callApi(config);
};

export const FinishAppointment = async (appointment_info: { date_time : string, appointment_id : string }, student_id: string) => {
	const config = {
		method: "post",
		url: `${API_URL}/appointments/finish?user_id=${student_id}`,
		headers: {
			"Content-Type": "application/json",
		},
		data: {
			date_time: appointment_info?.date_time,
			appointment_id: appointment_info?.appointment_id,
		},
	};

	return await callApi(config);
};
