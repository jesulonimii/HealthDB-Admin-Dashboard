import React from "react";
import CardLayout from "@ui/CardLayout.tsx";
import {Bag, Buy, Folder, Graph, TwoUsers} from "react-iconly";
import {COLORS} from "@utils";
import DropdownMenu from "@ui/DropdownMenu.tsx";

import RecentOrdersCard from "@src/(dashboard)/home/views/RecentOrdersCard.tsx";
import SummaryCard from "@src/(dashboard)/home/views/SummaryCard.tsx";
import MarketingCard from "@src/(dashboard)/home/views/MarketingCard.tsx";
import ProductsMetricCard from "@src/(dashboard)/home/views/ProductsMetricCard.tsx";
import CartsMetricCard from "@src/(dashboard)/home/views/CartsMetricCard.tsx";

const Home = () => {

	const period_filter = [
		{name: "This Week", value: "1", icon: ""},
		{name: "Last Week", value: "2", icon: ""},
		{name: "This Month", value: "3", icon: ""},
		{name: "This Year", value: "4", icon: ""},
	];


	return (
		<div className="flex w-full p-4 h-full pb-12 min-h-[100vh] flex-col gap-6">
			{/*First Segment*/}
			<section className="w-full gap-6 flex h-[30%] ">
				<div className="w-[60%] h-full flex gap-6">
					<CardLayout className="w-1/2 h-full p-5 gap-6 justify-between">
						<div className="flex justify-between">
							<div className="w-10 h-10 flex items-center justify-center rounded-xl p-2 bg-primary bg-opacity-20">
								<Graph primaryColor={COLORS.primary} />
							</div>

							<DropdownMenu className="bg-transparent text-gray-500" items={period_filter} currentItem={period_filter[0].name} />
						</div>

						<div className="flex gap-12">
							<div className="flex flex-col gap-2">
								<p className="text-gray-400">Sales</p>
								<p className="text-black font-poppins text-xl font-semibold">₦4,000,000.00</p>
							</div>

							<div className="flex flex-col gap-2">
								<p className="text-gray-400">Volume</p>
								<span className="flex items-center gap-3">
									<p className="text-black font-poppins text-xl font-semibold">450</p>
									<p className="tesxt-sm text-status-success">+20.00%</p>
								</span>
							</div>
						</div>
					</CardLayout>

					<CardLayout className="w-1/2 h-full p-5 gap-6 justify-between">
						<div className="flex justify-between">
							<div className="w-10 h-10 flex items-center justify-center rounded-xl p-2 bg-secondary bg-opacity-20">
								<TwoUsers primaryColor="#1C1D22" />
							</div>

							<DropdownMenu className="bg-transparent text-gray-500" items={period_filter} currentItem={period_filter[0].name}  />
						</div>

						<div className="flex gap-12">
							<div className="flex flex-col gap-2">
								<p className="text-gray-400">Customers</p>
								<span className="flex items-center gap-3">
									<p className="text-black font-poppins text-xl font-semibold">1,250</p>
									<p className="tesxt-sm text-status-success">+15.80%</p>
								</span>
							</div>

							<div className="flex flex-col gap-2">
								<p className="text-gray-400">Active</p>
								<span className="flex items-center gap-3">
									<p className="text-black font-poppins text-xl font-semibold">1,180</p>
									<p className="tesxt-sm text-status-success">85%</p>
								</span>
							</div>
						</div>
					</CardLayout>
				</div>

				<div className="w-[40%] h-full flex">
					<CardLayout className="w-full p-5 gap-6 justify-between">
						<div className="flex justify-between">
							<div className="w-10 h-10 flex items-center justify-center rounded-xl p-2 bg-secondary bg-opacity-20">
								<Bag primaryColor="#1C1D22" />
							</div>

							<DropdownMenu className="bg-transparent text-gray-500" items={period_filter} currentItem={period_filter[0].name} />
						</div>

						<div className="flex gap-12">
							<div className="w-1/3 flex flex-col gap-2">
								<p className="text-gray-400">All Orders</p>
								<span className="flex items-center gap-3">
									<p className="text-black font-poppins text-xl font-semibold">450</p>
								</span>
							</div>

							<div className="w-1/3 flex flex-col gap-2">
								<p className="text-gray-400">Pending</p>
								<span className="flex items-center gap-3">
									<p className="text-black font-poppins text-xl font-semibold">5</p>
								</span>
							</div>

							<div className="w-1/3 flex flex-col gap-2">
								<p className="text-gray-400">Completed</p>
								<span className="flex items-center gap-3">
									<p className="text-black font-poppins text-xl font-semibold">445</p>
								</span>
							</div>
						</div>
					</CardLayout>
				</div>
			</section>

			{/*Second Segment*/}
			<section className="w-full gap-6 flex h-[80%] ">
				<div className="w-[60%] flex flex-col gap-6">
					<div className="w-full flex gap-4 h-[45%]">
						<MarketingCard/>
						<div className="w-[50%] h-full flex gap-4 flex-col">
							<ProductsMetricCard/>
							<CartsMetricCard/>
						</div>
					</div>

					<SummaryCard/>
				</div>

				<div className="w-[40%] flex">
					<RecentOrdersCard/>
				</div>
			</section>
		</div>
	);
};

export default Home;
