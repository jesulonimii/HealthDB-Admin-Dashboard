import CardLayout from "@ui/CardLayout.tsx";
import React from "react";
import AppointmentInfoCard from "@src/(dashboard)/home/views/AppointmentInfoCard.tsx";

function PendingAppointmentsCard({}) {

	const products = [
		{
			name: "Jesulonimi William",
			pending: true,
			image: "/iphone-1.png",
			date: "12 Sept 2022",
			price: "CSC/2019/108",
			qty: 1,
		},
		{
			name: "iPhone 13",
			pending: false,
			image: "/iphone-2.png",
			date: "12 Sept 2022",
			price: "₦730,000.00",
			qty: 1,
		}
	];


	return (
		<CardLayout className="w-full h-full min-h-[75vh] p-5 flex-grow">
			<div className="flex justify-between">
				<p className="font-outfit font-medium">Pending Appointments</p>
			</div>

			<div className="flex flex-col gap-2 mt-4">
				{products.map((item, index) => {
					return <AppointmentInfoCard item={item} key={index} />
				})}
			</div>
		</CardLayout>
	);
}

export default PendingAppointmentsCard;