import React from "react";
import CardLayout from "@ui/CardLayout.tsx";

const AllergiesCard = ({studentData}) => {
	return (
		<CardLayout title="Allergies" className="p-8">
			<div className="gap-4 flex flex-col">
				<p>
					{studentData?.medical_history?.allergies ?? "No allergies recorded."}
				</p>
				{/*<div className="grid grid-cols-2">
					<span className="w-1/4 text-gray-700 mr-10 font-bold">Tilorone:</span>
					<span className="w-3/4 text-blue-700 font-semibold">Medium</span>
				</div>*/}
			</div>
		</CardLayout>
	);
};

export default AllergiesCard;
