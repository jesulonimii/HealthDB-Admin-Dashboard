import CardLayout from "@ui/CardLayout.tsx";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import AppointmentInfoCard from "@src/(dashboard)/home/views/AppointmentInfoCard.tsx";
import { COLORS, QUERY_KEYS, SOCKET_EVENT_KEYS } from "@utils";
import { GetAppointments } from "@shared/api";
import LoadingSpinner from "@ui/LoadingSpinner.tsx";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useSocket } from "@shared/context/SocketContext.tsx";

function PendingAppointmentsCard({}) {
	const [booked_appointments, setBookedAppointments] = useState([]);

	const {
		data: appointmentsData,
		status,
		error,
		refetch: refetchAppointments,
	} = useQuery({
		queryKey: [QUERY_KEYS.appointments],
		queryFn: () => GetAppointments(),
		onSuccess: (data) => {
			setBookedAppointments(data);
		},
	});

	const { socket } = useSocket();

	socket.on(SOCKET_EVENT_KEYS.appointments_update, (message: any) => {
		refetchAppointments().then(r => console.log("Refetched appointments"));
	});

	return (
		<CardLayout className="w-full min-h-[75vh] flex p-5 flex-grow">
			<div className="flex justify-between">
				<p className="font-outfit text-lg font-medium">Pending Appointments</p>

				{/* @ts-ignore */}
				<div className="w-fit h-fit" onClick={refetchAppointments}>
					<ArrowPathIcon
						className={`w-6 h-6 text-gray-500 cursor-pointer ${status === "loading" && "animate-spin"}`}
					/>
				</div>
			</div>

			{booked_appointments.length > 0 ? (
				<div className="flex flex-col gap-2 mt-4">
					{booked_appointments.map((item, index) => {
						return <AppointmentInfoCard appointment_details={item} key={index} />;
					})}
				</div>
			) : status === "loading" ? (
				<div className="h-[80vh] w-full flex justify-center items-center">
					<LoadingSpinner className="my-4" color={COLORS.primary} />
					<p className="text-gray-500 text-center">Loading Health Center News</p>
				</div>
			) : (
				<div className="h-[80vh] w-full flex justify-center items-center">
					<p className="text-gray-500 text-center">No Appointments yet.</p>
				</div>
			)}
		</CardLayout>
	);
}

export default PendingAppointmentsCard;
