import React, { useState } from "react";
import CardLayout from "@ui/CardLayout.tsx";
import { useForm } from "react-hook-form";
import { useAuth } from "@hooks";
import { CreateDoctorReport } from "@shared/api/Appointments.api.ts";
import FormTextArea from "@ui/forms/FormTextArea.tsx";
import CustomButton from "@ui/forms/CustomButton.tsx";
import FormInput from "@ui/forms/FormInput.tsx";
import { SendNotification } from "@api";
import toast from "react-hot-toast";

const MedicationInformationCard = ({ studentData }) => {

	const {register, reset, handleSubmit} = useForm()
	const {user}= useAuth()
	const [isLoading, setIsLoading] = useState(false)


	function onSubmit(data: any) {
		setIsLoading(true)

		const payload = {
			student_id : studentData?.user_id,
			...data
		};

		SendNotification(payload).then((res) => {
			setIsLoading(false)
			if (!res?.error){
				console.log(res);
				toast.success("Notification sent successfully")
				reset()
				setIsLoading(false)
			}
			else alert(res?.error)


		}).catch((err) => {
			console.log(err);
		})

	}

	return (
		<CardLayout title={`Send ${studentData?.personal_info?.first_name} an instant notification`} className="p-8">
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormInput register={register("title")} required placeholder="Notification Title..." />

				<FormTextArea
					register={register("message")}
					required
					className="h-[40vh]"
					placeholder="Type message here..."
				/>

				<div className="flex w-full justify-end">
					<CustomButton loading={isLoading} className="mt-2 w-full md:w-[20%] float-right">Send Notification</CustomButton>
				</div>
			</form>
		</CardLayout>
	);
}

export default MedicationInformationCard;
