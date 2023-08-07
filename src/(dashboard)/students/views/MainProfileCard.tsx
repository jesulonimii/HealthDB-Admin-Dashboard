import React from "react";
import AvatarImage from "@ui/AvatarImage.tsx";

const MainProfileCard = () => {
	return (
		<div className="flex flex-col bg-white rounded-lg p-3 justify-center items-center">
			<div className=" flex justify-center flex-col items-center p-3 gap-4">
				<AvatarImage className="h-48" status_indicator={{online:true}} statusIndicatorColor="bg-green-500" src="/janet.png"/>
				<h3 className="text-2xl font-outfit font-extrabold p-2">Janet Jones</h3>
			</div>
			<div className="w-[80%] flex flex-col gap-4 py-4">
				<div className="grid grid-cols-2">
					<span className="w-1/4 text-gray-700 font-bold">Gender:</span>
					<span className="w-3/4 text-gray-900">Female</span>
				</div>
				<div className="grid grid-cols-2">
					<span className="w-1/4 text-gray-700 font-bold">Age:</span>
					<span className="w-3/4 text-gray-900">21</span>
				</div>
				<div className="grid grid-cols-2">
					<span className="w-1/4 text-gray-700 font-bold">Weight:</span>
					<span className="w-3/4 text-gray-900">70 Kg</span>
				</div>
			</div>
		</div>
	);
};

export default MainProfileCard;
