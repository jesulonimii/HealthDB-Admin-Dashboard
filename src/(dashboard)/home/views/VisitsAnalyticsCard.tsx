import CardLayout from "@ui/CardLayout.tsx";
import {Graph} from "react-iconly";
import {COLORS, PERIOD_FILTER} from "@utils";
import DropdownMenu from "@ui/DropdownMenu.tsx";
import React from "react";

function VisitsAnalyticsCard({}) {
	return (
		<CardLayout className="w-full md:w-1/2 h-full p-5 gap-6 justify-between">
			<div className="flex justify-between">
				<div className="w-10 h-10 flex items-center justify-center rounded-xl p-2 bg-primary bg-opacity-20">
					<Graph primaryColor={COLORS.primary} />
				</div>

				<DropdownMenu
					className="bg-transparent text-gray-500"
					items={PERIOD_FILTER}
					currentItem={PERIOD_FILTER[0].name}
				/>
			</div>

			<div className="flex gap-12">
				<div className="flex flex-col gap-2">
					<p className="text-gray-400">Appointments</p>
					<p className="text-black font-outfit text-xl font-semibold">173</p>
				</div>

				<div className="flex flex-col gap-2">
					<p className="text-gray-400">Volume</p>
					<span className="flex items-center gap-3">
						<p className="text-black font-outfit text-xl font-semibold">450</p>
						<p className="tesxt-sm text-status-success">+20.00%</p>
					</span>
				</div>
			</div>
		</CardLayout>
	);
}

export default VisitsAnalyticsCard;
