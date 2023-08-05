import React from "react";
import CardLayout from "@ui/CardLayout.tsx";
import {Graph, TwoUsers} from "react-iconly";
import {COLORS} from "@utils";
import DropdownMenu from "@ui/DropdownMenu.tsx";

import PendingAppointmentsCard from "@src/(dashboard)/home/views/PendingAppointmentsCard.tsx";
import FindStudentCard from "@src/(dashboard)/home/views/FindStudentCard.tsx";
import VisitsAnalyticsCard from "./views/VisitsAnalyticsCard";

const Home = () => {
	const period_filter = [
		{name: "This Week", value: "1", icon: ""},
		{name: "Last Week", value: "2", icon: ""},
		{name: "This Month", value: "3", icon: ""},
		{name: "This Year", value: "4", icon: ""},
	];

	return (
		<div className="flex w-full p-8 md:p-4 h-fit pb-4 min-h-[80vh] flex-col gap-6 flex-grow">
			<section className="w-full gap-6 flex flex-col md:flex-row h-full ">
				<section className="w-full md:w-[60%] h-fit gap-6 flex flex-col">
					<div className="w-full h-fit flex flex-col md:flex-row gap-6 hidden">

						<VisitsAnalyticsCard />

						<CardLayout className="w-full md:w-1/2 h-full p-5 gap-6 justify-between">
							<div className="flex justify-between">
								<div className="w-10 h-10 flex items-center justify-center rounded-xl p-2 bg-secondary bg-opacity-20">
									<TwoUsers primaryColor="#1C1D22" />
								</div>

								<DropdownMenu
									className="bg-transparent text-gray-500"
									items={period_filter}
									currentItem={period_filter[0].name}
								/>
							</div>

							<div className="flex gap-12">
								<div className="flex flex-col gap-2">
									<p className="text-gray-400">Customers</p>
									<span className="flex items-center gap-3">
										<p className="text-black font-outfit text-xl font-semibold">1,250</p>
										<p className="tesxt-sm text-status-success">+15.80%</p>
									</span>
								</div>

								<div className="flex flex-col gap-2">
									<p className="text-gray-400">Active</p>
									<span className="flex items-center gap-3">
										<p className="text-black font-outfit text-xl font-semibold">1,180</p>
										<p className="tesxt-sm text-status-success">85%</p>
									</span>
								</div>
							</div>
						</CardLayout>
					</div>

					<FindStudentCard />
				</section>

				<div className="w-full h-full md:w-[40%] flex flex-grow min-h-full">
					<PendingAppointmentsCard />
				</div>
			</section>
		</div>
	);
};

export default Home;
