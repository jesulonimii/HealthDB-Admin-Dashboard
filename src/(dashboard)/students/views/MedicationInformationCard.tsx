import React from "react";
import UsedDrugsTable from "@src/(dashboard)/students/views/UsedDrugsTable.tsx";
import CardLayout from "@ui/CardLayout.tsx";

const data = [
	{
		id: 1,
		brandName: "Apo-Ciproflux",
		genericName: "Ciprofloxacibe Hydrochloroc",
		strength: "500mg",
		pack: "100",
		form: "Syrup",
		manufacturer: "Apotex Industries",
	},
	{
		id: 2,
		brandName: "Acetamonophen",
		genericName: "Acetamoniphen",
		strength: "250mg",
		pack: "50",
		form: "Capsule",
		manufacturer: "Pemigo Company",
	},
	{
		id: 3,
		brandName: "Amoxicillin",
		genericName: "Amoxicillin",
		strength: "300mg",
		pack: "15",
		form: "Tablet",
		manufacturer: "Dr Femi's Lab",
	},
];

const MedicationInformationCard = () => {
	return (
		<CardLayout title="Drugs & Medication Information" className="p-8">

            <UsedDrugsTable />

		</CardLayout>
	);
};

export default MedicationInformationCard;
