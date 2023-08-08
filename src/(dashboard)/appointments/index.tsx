import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@utils";
import { GetAppointmentInfo } from "@api";
import CardLayout from "@ui/CardLayout.tsx";
import FindStudentCard from "@src/(dashboard)/home/views/FindStudentCard.tsx";
import MainProfileCard from "../students/views/MainProfileCard";
import MedicationInformationCard from "@src/(dashboard)/students/views/MedicationInformationCard.tsx";
import MedicalNotesCard from "@src/(dashboard)/students/views/MedicalNotesCard.tsx";

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
			medical_notes: string;
			previous_medications: object;
			hospitalizations: object;
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
			medical_notes: "",
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

		return (
			<>
				{status === "loading" ? (
					<LoadingSkeleton />
				) : (
					<div className="flex w-full p-12 md:p-4 h-fit pb-16 min-h-[80vh] flex-col gap-14 flex-grow">
						<section className="w-full gap-6 flex flex-col md:flex-row h-full relative">
							<section className="w-full md:w-[25%] md:sticky top-[10%] h-fit gap-6 flex flex-col">
								<MainProfileCard studentData={appointmentData?.student_info} />
							</section>

							<div className="w-full flex flex-col pb-36 gap-6 md:w-[75%] flex-grow min-h-full">
								<MedicalNotesCard studentData={appointmentData?.student_info} />

								<MedicationInformationCard studentData={appointmentData?.student_info} />
							</div>
						</section>
					</div>
				)}
			</>
		);
	} else
		return (
			<div className="w-full flex h-full items-center justify-center p-36">
				<FindStudentCard />
			</div>
		);
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
