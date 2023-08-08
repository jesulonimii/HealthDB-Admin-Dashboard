import CardLayout from "@ui/CardLayout.tsx";
import React from "react";

function PreviousDoctorReports({ studentData }) {
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
		<CardLayout title="Previous Doctors' Reports" className="p-8">
			{doctors_notes.length === 0 ? (
				<p className="text-gray-400">No previous doctors reports.</p>
			) : (
				doctors_notes.map((note: any, index: any) => {
					return (
						<div key={index} className="w-full flex border-b border-gray-400 py-4 my-2 flex-col gap-4">
							<div className="w-full flex flex-col gap-2">
								<span className="font-medium text-primary flex gap-2">
									<p className="text-black">Date:</p>
									<p className="font-bold">{note?.date}</p>
								</span>
								<span className="font-medium text-primary flex gap-2">
									<p className="text-black">Doctor:</p>
									<p className="font-bold">{note?.doctor}</p>
								</span>
							</div>
							<span className="font-medium my-3 max-w-[70%] flex flex-col">
								<p className="text-gray-700  mb-2">Report:</p>
								<p>{note?.report}</p>
							</span>
						</div>
					);
				})
			)}
		</CardLayout>
	);
}

export default PreviousDoctorReports;
