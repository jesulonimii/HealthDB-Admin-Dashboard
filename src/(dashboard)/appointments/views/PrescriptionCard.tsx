import CardLayout from "@ui/CardLayout.tsx";
import React from "react";
import FormInput from "@ui/forms/FormInput.tsx";
import FormTextArea from "@ui/forms/FormTextArea.tsx";
import CustomButton from "@ui/forms/CustomButton.tsx";
import DropdownMenu from "@ui/DropdownMenu.tsx";

function PrescriptionCard({ studentData }) {
	let doctors_notes = studentData?.medical_history?.doctors_notes;


	return (
		<CardLayout title="Send Prescription" className="p-8">

			<div className="flex flex-col gap-4">

				<FormInput placeholder="Enter medication name (e.g medicine, injection) " />

				<FormTextArea placeholder="Enter Additional details" />

			</div>

			<div className="flex w-full justify-end">
				<CustomButton className="mt-2 max-w-[30%] float-right">
					Send Prescription
				</CustomButton>
			</div>


		</CardLayout>
	);
}

export default PrescriptionCard;
