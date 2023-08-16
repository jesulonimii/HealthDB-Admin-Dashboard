import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@utils";
import { GetAppointmentInfo } from "@api";
import CardLayout from "@ui/CardLayout.tsx";
import MainProfileCard from "../students/views/MainProfileCard";
import MedicationInformationCard from "@src/(dashboard)/students/views/MedicationInformationCard.tsx";
import MedicalNotesCard from "@src/(dashboard)/students/views/MedicalNotesCard.tsx";
import PendingAppointmentsCard from "@src/(dashboard)/home/views/PendingAppointmentsCard.tsx";
import PreviousDoctorReports from "@src/(dashboard)/appointments/views/PreviousDoctorReports.tsx";
import WriteDoctorReport from "@src/(dashboard)/appointments/views/WriteDoctorReport.tsx";
import moment from "moment";
import CustomButton from "@ui/forms/CustomButton.tsx";
import IconStyled from "@ui/IconStyled.tsx";
import { PencilIcon } from "@heroicons/react/24/outline";
import PrescriptionCard from "@src/(dashboard)/appointments/views/PrescriptionCard.tsx";
import { useAuth } from "@hooks";
import { FinishAppointment } from "@shared/api/Appointments.api.ts";
import { router } from "@shared/router";

type AppointmentDataType = {
	date_time: string;
	appointment_id: string;
	student_info: {
		personal_info: {
			first_name: string;
			last_name: string;
			profile_image: string;
			date_of_birth: string;
			gender: string;
		};
		student: {
			level: string;
			department: string;
			faculty: string;
			matric_number: string;
		};
		contact_info: {
			address: string;
			phone: string;
			email: string;
		};
		medical_history: {
			additional_medical_info: string;
			doctors_notes: Array<object>;
			previous_medications: Array<object>;
			hospitalizations: Array<object>;
			allergies: string;
			last_visit: string;
		};
		health_centre_registration: {
			status: string;
			message: string;
		};
		user_id: string;
		emergency_contacts: any;
		appointments: any;
	};
};

const defaultAppointmentData = {
	appointment_id: "",
	date_time: "",
	student_info: {
		appointments: undefined,
		contact_info: { address: "", email: "", phone: "" },
		emergency_contacts: undefined,
		health_centre_registration: { message: "", status: "" },
		medical_history: {
			allergies: "",
			hospitalizations: [],
			last_visit: "",
			additional_medical_info: "",
			doctors_notes: [],
			previous_medications: [],
		},
		personal_info: { date_of_birth: "", first_name: "", gender: "", last_name: "", profile_image: "" },
		student: { department: "", faculty: "", level: "", matric_number: "" },
		user_id: "",
	},
};

const Appointments = () => {
	const [query] = useSearchParams();
	const appointment_id = query.get("id") ?? "";
	const {userRole} = useAuth();
	const [endAppointmentLoading, setEndAppointmentLoading] = useState(false)


	const [appointmentData, setAppointmentData] = useState<AppointmentDataType>(defaultAppointmentData);

	if (appointment_id) {
		const {
			data,
			status,
			error,
			refetch: refetchStudentData,
		} = useQuery({
			queryKey: [`${QUERY_KEYS.appointment_data}-${appointment_id}`, appointment_id],
			queryFn: () => GetAppointmentInfo(appointment_id),
			onSuccess: (data) => {
				setAppointmentData(data);
				//console.log(data);
			},
		});

		let endAppointment = () => {
			setEndAppointmentLoading(true)
			FinishAppointment(appointmentData, appointmentData.student_info?.user_id).then((res) => {
				if (!res.error) {
					//router.push("/appointments")
					location.replace("/appointments")
					setEndAppointmentLoading(false)
				}
			})
		};
		
		
		return (
			<>
				{status === "loading" ? (
					<LoadingSkeleton />
				) : (
					<div className="flex w-full p-12 md:p-4 h-fit pb-16 min-h-[80vh] flex-col gap-14 flex-grow">
						<section className="w-full gap-6 flex flex-col md:flex-row h-full relative">
							<section className="w-full md:w-[25%] md:sticky top-[10%] h-fit gap-6 flex flex-col">
								<MainProfileCard studentData={appointmentData?.student_info} />

								<CardLayout className="gap-4">
									<div className="flex flex-col gap-2">
										<p>Appointment id:</p>
										<p className="font-semibold">{appointmentData?.appointment_id}</p>
									</div>

									<div className="flex flex-col gap-2">
										<p>Booked:</p>
										<p className="font-semibold">
											{moment(appointmentData?.date_time).format("Do MMM, YYYY [by] hh:mm A")}
										</p>
									</div>

									<Link to={`/students?matric_number=${appointmentData?.student_info?.user_id}`} className="w-full">
										<CustomButton variant="outlined" className="mt-2 w-full	">
											View Student Profile
										</CustomButton>
									</Link>

									<CustomButton loading={endAppointmentLoading} onClick={endAppointment} className="bg-status-error">End Appointment</CustomButton>
								</CardLayout>
							</section>

							{
								(userRole === "doctor" || userRole === "admin") ? (
									<div className="w-full flex flex-col pb-36 gap-6 md:w-[75%] flex-grow min-h-full">
										<MedicalNotesCard studentData={appointmentData?.student_info} />

										<MedicationInformationCard studentData={appointmentData?.student_info} />

										<PreviousDoctorReports studentData={appointmentData?.student_info} />

										<PrescriptionCard appointmentData={appointmentData} />

										<WriteDoctorReport appointmentData={appointmentData} />
									</div>
								) : (
									<div className="flex items-center justify-center w-full md:w-[75%]">
										You need to be a doctor to access this page.
									</div>
									)
							}


						</section>
					</div>
				)}
			</>
		);
	} else {
		return (
			<div className="w-full flex h-full items-center justify-center py-12 px-36">
				<PendingAppointmentsCard />
			</div>
		);
	}
};

const LoadingSkeleton = () => {
	return (
		<div className="animte-pulse flex w-full p-12 md:p-4 h-fit pb-16 min-h-[80vh] flex-col gap-14 flex-grow">
			<section className="w-full gap-6 flex flex-col md:flex-row h-full relative">
				<section className="w-full md:w-[25%] sticky top-[10%] h-fit gap-6 flex flex-col">
					<CardLayout className="h-[50vh] items-center animate-pulse">
						<div className="bg-skeleton w-48 h-48 rounded-2xl"></div>
						<div className="bg-skeleton h-4 w-[80%] my-8 rounded-2xl"></div>

						<div className="bg-skeleton w-full h-3 my-2 rounded-2xl"></div>
						<div className="bg-skeleton w-full h-3 my-2 rounded-2xl"></div>
						<div className="bg-skeleton w-full h-3 my-2 rounded-2xl"></div>
					</CardLayout>

					<CardLayout className="h-[30vh] animate-pulse justify-center">
						<div className="bg-skeleton w-full h-3 my-2 rounded-2xl"></div>
						<div className="bg-skeleton w-full h-3 my-2 rounded-2xl"></div>
						<div className="bg-skeleton w-full h-3 my-2 rounded-2xl"></div>
					</CardLayout>
				</section>

				<div className="w-full flex flex-col gap-6 md:w-[75%] flex-grow min-h-full">
					<CardLayout className="h-[45vh] animate-pulse"></CardLayout>
					<CardLayout className="h-56 animate-pulse"></CardLayout>
					<CardLayout className="h-[45vh] animate-pulse"></CardLayout>
				</div>
			</section>
		</div>
	);
};

export default Appointments;
