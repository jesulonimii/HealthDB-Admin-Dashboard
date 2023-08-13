import CardLayout from "@ui/CardLayout.tsx";
import { useSocket } from "@shared/context/SocketContext.tsx";
import { Key, useEffect, useState } from "react";
import { SOCKET_EVENT_KEYS } from "@utils";
import { useAuth, useLocalStorage } from "@hooks";
import CustomButton from "@ui/forms/CustomButton.tsx";

function Pharmacy({}) {
	const { user } = useAuth();
	const socket = useSocket();

	const { getFromSession, saveToSession, removeFromSession } = useLocalStorage();

	const [prescriptions, setPrescriptions] = useState(getFromSession("received-prescriptions") || []);

	const getPrescriptionFromServer = (message: any) => {
		console.log("Received new prescription alert from server:", message);

		setPrescriptions((prevPrescriptions: any) => {
			const newPrescriptions = [...prevPrescriptions, message];
			saveToSession("received-prescriptions", newPrescriptions);
			return newPrescriptions;
		});
	}


	useEffect(() => {
		socket.once(SOCKET_EVENT_KEYS.prescription_update, getPrescriptionFromServer);

		return ()=> socket.off(SOCKET_EVENT_KEYS.prescription_update)
	}, [prescriptions]);


	useEffect(() => {
		socket.emit("PHARMACY_ONLINE", { attendant: user?.name });
	}, []);

	const removePrescription = () => {
		setPrescriptions((prevPrescriptions: any) => {
			const newPrescriptions = [...prevPrescriptions];
			newPrescriptions.shift();
			removeFromSession("received-prescriptions");
			return newPrescriptions;
		});
	};

	return (
		<div className="p-8 h-full">
			<CardLayout title="The following students are receive prescriptions:" className="h-screen p-8 gap-4">
				<div className="grid grid-cols-3 gap-3 w-full h-fit">
					{prescriptions.length > 0 &&
						prescriptions.map((prescription: any, index: Key) => (
							<div className="w-full border border-gray-400 rounded-lg p-5 flex flex-col" key={index}>
								<p className="text-lg font-bold my-3">
									Appointment ID: {"  "}
									{prescription?.appointment_id}
								</p>
								<span className="text-md font-bold ">
								<span className="font-medium text-md">Student Name:</span>{" "}
									{prescription?.student_info?.personal_info?.first_name}{" "}
									{prescription?.student_info?.personal_info?.last_name}
							</span>
								<span className="text-md font-bold">
								<span className="font-medium text-md">Matriculation Number:</span>{" "}
									{prescription?.student_info?.user_id.toUpperCase()}
							</span>
								<span className="text-md font-bold">
								<span className="font-medium text-md">Phone Number:</span>{" "}
									{prescription?.student_info?.contact_info?.phone}
							</span>

								<p className="mt-4 font-outfit">Medication Details:</p>
								<p className="">{prescription?.name}</p>

								<p className="mt-4 font-outfit">Medication Details:</p>
								<p className="">{prescription?.details}</p>

								<CustomButton onClick={removePrescription} className="bg-status-error mt-4">Remove</CustomButton>
							</div>
						))}
				</div>

				{prescriptions.length === 0 && (
					<div className="flex flex-col items-center justify-center h-full gap-4">
						<h1 className="text-xl font-outfit font-bold">No prescriptions received yet.</h1>
						<p className="text-gray-500">
							Received prescriptions from doctors would appear here in real time.
						</p>
					</div>
				)}
			</CardLayout>
		</div>
	);
}

export default Pharmacy;