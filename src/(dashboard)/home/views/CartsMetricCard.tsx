import CardLayout from "@ui/CardLayout.tsx";
import {Buy} from "react-iconly";
import DropdownMenu from "@ui/DropdownMenu.tsx";
import React from "react";

function CartsMetricCard({}) {

	const period_filter = [
		{name: "This Week", value: "1", icon: ""},
		{name: "Last Week", value: "2", icon: ""},
		{name: "This Month", value: "3", icon: ""},
		{name: "This Year", value: "4", icon: ""},
	];


	return (
		<CardLayout className="w-full h-full p-5 justify-between">
			<div className="flex justify-between">
				<div className="w-10 h-10 flex items-center justify-center rounded-xl p-2 bg-secondary bg-opacity-20">
					<Buy primaryColor="#1C1D22" />
				</div>

				<DropdownMenu className="bg-transparent text-gray-500" items={period_filter} currentItem={period_filter[0].name} />
			</div>

			<div className="flex gap-12">
				<div className="flex flex-col gap-2">
					<p className="text-gray-400">Abandoned Cart</p>
					<span className="flex items-center gap-3">
											<p className="text-black font-poppins text-xl font-semibold">20%</p>
											<p className="tesxt-sm text-status-success">+0.00%</p>
										</span>
				</div>

				<div className="flex flex-col gap-2">
					<p className="text-gray-400">Customers</p>
					<span className="flex items-center gap-3">
											<p className="text-black font-poppins text-xl font-semibold">30</p>
										</span>
				</div>
			</div>
		</CardLayout>
	);
}

export default CartsMetricCard;