import React from "react";
import CardLayout from "@ui/CardLayout.tsx";
import moment from "moment/moment";

const GeneralProfileCard = ({studentData}) => {
	return (
		<CardLayout title="Personal Information" className="p-8">
			<div className="grid grid-cols-4 gap-10 w-full mb-5">
				<div className="flex w-full flex-col gap-1">
					<h1 className="text-gray-400">First Name</h1>
					<p className="font-semibold">{studentData?.personal_info?.first_name}</p>
				</div>
				<div className="flex w-full flex-col gap-1">
					<h1 className="text-gray-400">Last Name</h1>
					<p className="font-semibold">{studentData?.personal_info?.last_name}</p>
				</div>
				<div className="flex w-full flex-col gap-1">
					<h1 className="text-gray-400">Age</h1>
					<p className="font-semibold">{moment().diff(studentData?.personal_info?.date_of_birth, "years")}</p>
				</div>
				<div className="flex w-full flex-col gap-1">
					<h1 className="text-gray-400">Birthday</h1>
					<p className="font-semibold">
						{moment(studentData?.personal_info?.date_of_birth).format("DD-MM-YYYY")}
					</p>
				</div>

				{/*Info Group 2*/}
				<div className="flex w-full flex-col  gap-1">
					<h1 className="text-gray-400">Matric No</h1>
					<p className="font-semibold">{studentData?.student?.matric_number.toUpperCase()}</p>
				</div>
				<div className="flex w-full flex-col gap-1">
					<h1 className="text-gray-400">Faculty</h1>
					<p className="font-semibold">{studentData?.student?.faculty}</p>
				</div>
				<div className="flex w-full flex-col gap-1">
					<h1 className="text-gray-400">Department</h1>
					<p className="font-semibold">{studentData?.student?.department}</p>
				</div>
				<div className="flex w-full flex-col gap-1">
					<h1 className="text-gray-400">Level</h1>
					<p className="font-semibold">{studentData?.student?.level}</p>
				</div>

				{/*Info Group 3*/}
				<div className="flex w-full flex-col gap-1">
					<h1 className="text-gray-400">Email</h1>
					<div className="font-semibold whitespace-normal">
						{studentData?.contact_info?.email}
					</div>
				</div>
				<div className="flex w-full flex-col gap-1">
					<h1 className="text-gray-400">Phone Number</h1>
					<p className="font-semibold">{studentData?.contact_info?.phone}</p>
				</div>
				<div className="flex w-full flex-col  gap-1">
					<h1 className="text-gray-400">Address</h1>
					<p className="font-semibold">{studentData?.contact_info?.address}</p>
				</div>
			</div>
		</CardLayout>
	);
};

export default GeneralProfileCard;
