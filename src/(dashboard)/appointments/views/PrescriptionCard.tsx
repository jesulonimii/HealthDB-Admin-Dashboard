import CardLayout from "@ui/CardLayout.tsx";
import React, { useState } from "react";
import FormInput from "@ui/forms/FormInput.tsx";
import FormTextArea from "@ui/forms/FormTextArea.tsx";
import CustomButton from "@ui/forms/CustomButton.tsx";
import DropdownMenu from "@ui/DropdownMenu.tsx";
import { useForm } from "react-hook-form";
import { SendPrescription } from "@shared/api/Appointments.api.ts";

function PrescriptionCard({ appointmentData }) {

	const { register, handleSubmit, formState: { errors } } = useForm();

	const [hasPrescribedMedication, setHasPrescribedMedication ] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	function onSubmit(data:any) {
		setIsLoading(true)

		const payload = {
			...data,
			date: new Date().toISOString(),
			student_id: appointmentData?.student_info?.user_id,
		}


		SendPrescription(appointmentData.appointment_id, payload).then((res) => {
			setIsLoading(false)

			if (!res?.error){
				console.log(res);
				//TODO: toast.success("Prescription sent successfully")
				setHasPrescribedMedication(true)
			}
			else alert(res?.error)

		}).catch((err) => {
			console.log(err);
		})

	}

	return (
		<CardLayout title="Send Prescription" className="p-8">

			{
				!hasPrescribedMedication ? (
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="flex flex-col gap-4">

							<FormInput register={register("medication_name")} placeholder="Enter medication name (e.g medicine, injection) " />

							<FormTextArea required register={register("medication_details")} placeholder="Enter Additional details" />

						</div>

						<div className="flex w-full justify-end">
							<CustomButton loading={isLoading} className="mt-2 w-full md:w-[20%] float-right">
								Send Prescription
							</CustomButton>
						</div>
					</form>
				) :
					(
						<div className="flex items-center justify-center">
							<p>Prescription has been sent to pharmacy.</p>
						</div>
					)
			}


		</CardLayout>
	);
}

export default PrescriptionCard;
