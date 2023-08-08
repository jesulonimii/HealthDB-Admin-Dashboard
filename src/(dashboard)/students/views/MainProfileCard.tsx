import React from "react";
import AvatarImage from "@ui/AvatarImage.tsx";
import CardLayout from "@ui/CardLayout.tsx";
import moment from "moment";

const MainProfileCard = ({studentData}) => {
	return (
		<CardLayout>
			<div className=" flex justify-center flex-col items-center p-3 gap-4">
				<AvatarImage
					className="h-48"
					status_indicator={{ online: true }}
					statusIndicatorColor="bg-green-500"
					src={studentData?.personal_info?.profile_image}
				/>
				<h3 className="text-2xl font-outfit font-extrabold p-2">
					{studentData?.personal_info?.first_name + " " + studentData?.personal_info?.last_name}
				</h3>
			</div>
			<div className="w-[80%] flex flex-col gap-4 py-4">
				<div className="grid grid-cols-2">
					<span className="w-full text-gray-700 font-bold">Gender:</span>
					<span className="w-full text-gray-900">{studentData?.personal_info?.gender}</span>
				</div>
				<div className="grid grid-cols-2">
					<span className="w-full text-gray-700 font-bold">Age (years) :</span>
					<span className="w-full text-gray-900">
						{moment().diff(studentData?.personal_info?.date_of_birth, "years")}
					</span>
				</div>
				{/*<div className="grid grid-cols-2">
					<span className="w-full text-gray-700 font-bold">Weight:</span>
					<span className="w-full text-gray-900">-</span>
				</div>*/}
			</div>
		</CardLayout>
	);
};

export default MainProfileCard;
