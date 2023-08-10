import CardLayout from "@ui/CardLayout.tsx";
import React, { useState } from "react";
import FormInput from "@ui/forms/FormInput.tsx";
import FormTextArea from "@ui/forms/FormTextArea.tsx";
import CustomButton from "@ui/forms/CustomButton.tsx";
import { useForm } from "react-hook-form";
import { useAuth } from "@hooks";
import { CreateDoctorReport } from "@shared/api/Appointments.api.ts";

function WriteDoctorReport({ appointmentData }) {

	const {register, handleSubmit} = useForm()
	const {user}= useAuth()
	const [hasWrittenReport, setHasWrittenReport] = useState(false)
	const [isLoading, setIsLoading] = useState(false)


	function onSubmit(data: any) {
		setIsLoading(true)

		const payload = {
			...data,
			date: new Date().toISOString(),
			doctor: user?.name,
			appointment_id: appointmentData?.appointment_id,
			student_id: appointmentData?.student_info?.user_id,
		};

		CreateDoctorReport(payload).then((res) => {
			setIsLoading(false)
			if (!res?.error){
				console.log(res);
				//TODO: toast.success("report sent successfully")
				setHasWrittenReport(true)
			}
			else alert(res?.error)


		}).catch((err) => {
			console.log(err);
		})

	}

	return (
		<CardLayout title="Create Report For This Visit." className="p-8">


			{
				!hasWrittenReport ? (
					<form onSubmit={handleSubmit(onSubmit)}>
						<FormTextArea register={register("report")} required className="h-[40vh]" placeholder="Write your report here..." />

						<div className="flex w-full justify-end">
							<CustomButton className="mt-2 w-full md:w-[20%] float-right">Submit Report</CustomButton>
						</div>
					</form>
				) : (
					<div className="flex items-center justify-center">
						<p>Medical report recorded.</p>
					</div>
				)
			}


		</CardLayout>
	);
}

export default WriteDoctorReport;
