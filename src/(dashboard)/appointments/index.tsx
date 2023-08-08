import React, { useState } from "react";
import AllergiesCard from "./views/AllergiesCard";
import MedicationInformationCard from "./views/MedicationInformationCard.tsx";
import GeneralProfileCard from "./views/GeneralProfileCard";
import MainProfileCard from "./views/MainProfileCard";
import MedicalNotesCard from "./views/MedicalNotesCard.tsx";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@utils";
import { GetStudentInfo } from "@api";
import CardLayout from "@ui/CardLayout.tsx";
import FindStudentCard from "@src/(dashboard)/home/views/FindStudentCard.tsx";

const Students = () => {
	const [query] = useSearchParams();
	const matric_number = query.get("matric_number") ?? "";

	const [studentData, setStudentData] = useState({});

	if (matric_number) {
		const {
			data,
			status,
			error,
			refetch: refetchStudentData,
		} = useQuery({
			queryKey: [`${QUERY_KEYS.student_data}-${matric_number}`, matric_number],
			queryFn: () => GetStudentInfo(matric_number),
			onSuccess: (data) => {
				setStudentData(data);
				//console.log(data);
			},
		});

		return (
			<>
				{status === "loading" ? (
					<LoadingSkeleton />
				) : (
					<div className="flex w-full p-12 md:p-4 h-fit pb-16 min-h-[80vh] flex-col gap-14 flex-grow">
						<section className="w-full gap-6 flex flex-col md:flex-row h-full relative">
							<section className="w-full md:w-[25%] md:sticky top-[10%] h-fit gap-6 flex flex-col">
								<MainProfileCard studentData={studentData} />

								<AllergiesCard studentData={studentData} />
							</section>

							<div className="w-full flex flex-col pb-36 gap-6 md:w-[75%] flex-grow min-h-full">
								<GeneralProfileCard studentData={studentData} />

								<MedicalNotesCard studentData={studentData} />

								<MedicationInformationCard studentData={studentData} />
							</div>
						</section>
					</div>
				)}
			</>
		);
	} else
		return (
			<div className="w-full flex h-full items-center justify-center p-36">
				<FindStudentCard />
			</div>
		);
};

const LoadingSkeleton = () => {
	return (
		<div className="animte-pulse flex w-full p-12 md:p-4 h-fit pb-16 min-h-[80vh] flex-col gap-14 flex-grow">
			<section className="w-full gap-6 flex flex-col md:flex-row h-full relative">
				<section className="w-full md:w-[25%] sticky top-[10%] h-fit gap-6 flex flex-col">
					<CardLayout className="h-[50vh] items-center animate-pulse">
						<div className="bg-skeleton w-48 h-48 rounded-2xl"></div>
						<div className="bg-skeleton h-4 w-[80%] my-8 rounded-2xl"></div>

						<div className="bg-skeleton w-full h-3 my-2 rounded-2xl"></div>
						<div className="bg-skeleton w-full h-3 my-2 rounded-2xl"></div>
						<div className="bg-skeleton w-full h-3 my-2 rounded-2xl"></div>
					</CardLayout>

					<CardLayout className="h-[30vh] animate-pulse justify-center">
						<div className="bg-skeleton w-full h-3 my-2 rounded-2xl"></div>
						<div className="bg-skeleton w-full h-3 my-2 rounded-2xl"></div>
						<div className="bg-skeleton w-full h-3 my-2 rounded-2xl"></div>
					</CardLayout>
				</section>

				<div className="w-full flex flex-col gap-6 md:w-[75%] flex-grow min-h-full">
					<CardLayout className="h-[45vh] animate-pulse"></CardLayout>
					<CardLayout className="h-56 animate-pulse"></CardLayout>
					<CardLayout className="h-[45vh] animate-pulse"></CardLayout>
				</div>
			</section>
		</div>
	);
};

export default Students;
