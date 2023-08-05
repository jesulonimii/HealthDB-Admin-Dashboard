import React from "react";

import PendingAppointmentsCard from "@src/(dashboard)/home/views/PendingAppointmentsCard.tsx";
import FindStudentCard from "@src/(dashboard)/home/views/FindStudentCard.tsx";
import QuickNewsUpdateCard from "@src/(dashboard)/home/views/QuickNewsUpdateCard.tsx";

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
					<QuickNewsUpdateCard />

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
