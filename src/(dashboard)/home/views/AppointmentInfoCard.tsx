import React, {useState} from "react";
import {twMerge} from "tailwind-merge";
import AvatarImage from "@ui/AvatarImage.tsx";
import moment from "moment";
import {Link} from "react-router-dom";

type appointmentCardProps = {
	appointment_details: {
		date_time: string,
		appointment_id: string,
		student_info: {
			personal_info: {
				first_name: string,
				last_name: string,
				profile_image: string,
				date_of_birth: string,
				gender: string,
			},
			student: {
				level: string,
				department: string,
				faculty: string,
				matric_number: string,
			},
			contact_info: {
				address: string,
				phone: string,
				email: string,
			},
			medical_history: {
				medical_notes: string,
				previous_medications: [],
				hospitalizations: [],
				allergies: string,
				last_visit: string,
			},
			health_centre_registration: {
				status: string,
				message: string,
			},
			user_id: string,
			emergency_contacts: any,
			appointments: any,
		}
	}
	className? : string
};

function AppointmentInfoCard({ appointment_details, className }: appointmentCardProps) {

	 const {student_info} = appointment_details;

	 const [pending, setPending] = useState(true)

	return (
		<Link to={`/appointments?id=${appointment_details.appointment_id}`} className={twMerge(`flex gap-4 cursor-pointer hover:bg-gray-50 p-3 border-b justify-between items-center ${className}`)}>
			<AvatarImage src={student_info?.personal_info?.profile_image} className="w-12 h-12" />

			<div className="w-[50%] gap-1 justify-center flex flex-col">
				<p className="font-medium text-lg font-outfit">{`${student_info.personal_info?.first_name} ${student_info.personal_info?.last_name}`}</p>
				<p className="text-gray-700">
					{student_info.student?.matric_number}
				</p>
			</div>

			<div className={`w-[40%]  h-full gap-2 justify-center items-end flex flex-col`}>
				<p className="text-sm text-gray-500 text-end h-[50%]">{moment(appointment_details.date_time).format("Do MMM, YYYY")}</p>
				<span
					className={`h-[50%] font-medium bg-opacity-20 px-3 w-fit flex justify-center rounded-lg bg-primary text-primary`}>
					{moment(appointment_details.date_time).format("hh:mm a")}
				</span>
			</div>
		</Link>
	);
}

export default AppointmentInfoCard;
