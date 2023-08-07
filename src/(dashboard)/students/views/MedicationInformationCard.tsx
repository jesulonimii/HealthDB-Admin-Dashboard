import React from "react";
import UsedDrugsTable from "@src/(dashboard)/students/views/UsedDrugsTable.tsx";
import CardLayout from "@ui/CardLayout.tsx";

const MedicationInformationCard = ({studentData}) => {



	return (
		<CardLayout title="Drugs & Previous Medication Information" className="p-8">

            <UsedDrugsTable data={studentData?.medical_history?.previous_medications} />

		</CardLayout>
	);
};

export default MedicationInformationCard;
