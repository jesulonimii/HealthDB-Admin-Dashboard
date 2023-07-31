import DropdownMenu from "@ui/DropdownMenu.tsx";
import CardLayout from "@ui/CardLayout.tsx";
import React from "react";

// @ts-ignore
import {ReactComponent as PieChart} from "@assets/images/pieChart.svg"

function MarketingCard({}) {

	const period_filter = [
		{name: "This Week", value: "1", icon: ""},
		{name: "Last Week", value: "2", icon: ""},
		{name: "This Month", value: "3", icon: ""},
		{name: "This Year", value: "4", icon: ""},
	];

	const marketing_summary = [
		{name: "Acquisition", color: "primary"},
		{name: "Purchase", color: "primary-50"},
		{name: "Retention", color: "secondary"},
	]

	return (
		<CardLayout className="w-full md:w-[50%] h-full p-5">
			<div className="flex justify-between">
				<p className="font-poppins font-medium">Marketing</p>

				<DropdownMenu className="bg-transparent text-gray-500" items={period_filter} currentItem={period_filter[0].name} />
			</div>

			<div className="flex flex-col items-center justify-center">

				<div className="flex w-full gap-4 my-6 items-center justify-center">
					{
						marketing_summary.map((category, index)=>{
							return (
								<div key={index} className="flex gap-2 items-center">
									<span className={`w-2 h-2 rounded-full bg-${category.color}`}></span>
									<p className="text-gray-500">{category.name}</p>
								</div>
							);
						})
					}
				</div>

				<PieChart/>

			</div>
		</CardLayout>
	);
}

export default MarketingCard;