import CardLayout from "@ui/CardLayout.tsx";
import React from "react";

function MedicalNotesCard({studentData}) {
	return (
		<CardLayout title="Medical Notes" className="p-8">
			<p className="textgray-600 min-h-72 h-fit">
				{studentData?.medical_history?.additional_medical_info ?? "No medical notes"}
			</p>
		</CardLayout>
	);
}

export default MedicalNotesCard;
