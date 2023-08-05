import React, {useState} from "react";
import {twMerge} from "tailwind-merge";
import AvatarImage from "@ui/AvatarImage.tsx";

type productCardProps = {
	appointment_details: {
		date_time: string,
		appointment_id: string,
		student_info: {
			first_name: string,
			last_name: string,
			matric_number: string,
			image: string,
		}
	}
	className? : string
};

function AppointmentInfoCard({ appointment_details, className }: productCardProps) {

	 const {student_info} = appointment_details;

	 const [pending, setPending] = useState(true)

	return (
		<div className={twMerge(`flex gap-4 cursor-pointer hover:bg-gray-50 p-3 border-b justify-between appointment_detailss-center ${className}`)}>
			<AvatarImage src={student_info.image} className="w-10 h-10" />

			<div className="w-[70%] gap-1 justify-center flex flex-col">
				<p className="font-medium text-lg font-outfit">{`${student_info.first_name} ${student_info.last_name}`}</p>
				<p className="text-gray-700">
					{student_info.matric_number}
				</p>
			</div>

			<div className={`w-[20%]  h-full gap-2 justify-center flex flex-col`}>
				<p className="text-sm text-gray-500 text-end min-h-[2vh] h-[50%]">{appointment_details.date_time}</p>
				<span
					className={`h-[50%] font-medium bg-opacity-20 px-3 w-fit flex justify-center rounded-lg ${
						typeof pending === "string"
							? "text-gray-500"
							: typeof pending === "boolean"
							? pending
								? "text-status-error bg-status-error"
								: "text-status-success bg-status-success"
							: "text-black w-full"
					}`}>
					{typeof pending === "string"
						? pending
						: typeof pending === "boolean"
						? pending
							? "Pending"
							: "Completed"
						: pending}
				</span>
			</div>
		</div>
	);
}

export default AppointmentInfoCard;
