import CardLayout from "@ui/CardLayout.tsx";
import React from "react";
import FormInput from "@ui/forms/FormInput.tsx";
import FormTextArea from "@ui/forms/FormTextArea.tsx";
import CustomButton from "@ui/forms/CustomButton.tsx";

function WriteDoctorReport({ studentData }) {
	let doctors_notes = studentData?.medical_history?.doctors_notes;

	doctors_notes = [
		{
			date: "2023-07-16",
			doctor: "Dr. Sanya",
			report: "Patient came in with recurring abdominal pain, particularly after meals. Physical exam revealed tenderness in the upper abdomen. Endoscopy confirmed a gastric ulcer. Prescribed proton pump inhibitors (PPIs) and advised dietary changes. Follow-up scheduled in 4 weeks.",
		},
		{
			date: "2023-08-02",
			doctor: "Dr. Femi",
			report: "Patient presented with fever, chills, headache, and body aches. Blood tests confirmed Plasmodium falciparum parasites. Prescribed Artemether-Lumefantrine for 3 days. Advised rest, hydration, and mosquito precautions. Follow-up scheduled for August 10, 2023.",
		},
	];

	return (
		<CardLayout title="Create Report for this visit." className="p-8">

			<FormTextArea className="h-[40vh]" placeholder="Write your report here..." />

			<div className="flex w-full justify-end">
				<CustomButton className="mt-2 max-w-[30%] float-right">Submit Report</CustomButton>
			</div>


		</CardLayout>
	);
}

export default WriteDoctorReport;
