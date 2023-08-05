import CardLayout from "@ui/CardLayout.tsx";
import React from "react";
import AppointmentInfoCard from "@src/(dashboard)/home/views/AppointmentInfoCard.tsx";

function PendingAppointmentsCard({}) {

	const booked_appointments = [
		{
			date_time: "2023-08-04T04:44:13.041+00:00",
			appointment_id: "20230804/CSC2019108",
			student_info: {
				first_name: "Jesulonimi",
				last_name: "William",
				matric_number: "CSC/2019/108",
				image: "https://eportal.oauife.edu.ng/pic.php?image_id=CSC/2019/10820212",
			},
		},
	];


	return (
		<CardLayout className="w-full h-full min-h-[75vh] p-5 flex-grow">
			<div className="flex justify-between">
				<p className="font-outfit text-lg font-medium">Pending Appointments</p>
			</div>

			<div className="flex flex-col gap-2 mt-4">
				{booked_appointments.map((item, index) => {
					return <AppointmentInfoCard appointment_details={item} key={index} />
				})}
			</div>
		</CardLayout>
	);
}

export default PendingAppointmentsCard;