import React from "react";
import CardLayout from "@ui/CardLayout.tsx";
import {Bag, Graph, TwoUsers} from "react-iconly";
import {COLORS} from "@utils";
import DropdownMenu from "@ui/DropdownMenu.tsx";

const Home = () => {
	return (
		<div className="flex w-full p-4 h-[90vh] min-h-[100vh] flex-col gap-6">
			{/*First Segment*/}
			<section className="w-full gap-6 flex h-[20%] ">

				<div className="w-[60%] flex gap-6">

					<CardLayout className="w-1/2 py-4 justify-between">
						<div className="flex justify-between">
							<div className="w-10 h-10 flex items-center justify-center rounded-2xl p-2 bg-primary bg-opacity-20">
								<Graph primaryColor={COLORS.primary} />
							</div>

							<DropdownMenu className="bg-transparent text-gray-500" currentItem={"This week"} />
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
										<p className="tesxt-sm text-status-success">
											+20.00%
										</p>
									</span>
							</div>
						</div>
					</CardLayout>

					<CardLayout className="w-1/2 py-4 justify-between">
						<div className="flex justify-between">
							<div className="w-10 h-10 flex items-center justify-center rounded-2xl p-2 bg-secondary bg-opacity-20">
								<TwoUsers primaryColor="#1C1D22" />
							</div>

							<DropdownMenu className="bg-transparent text-gray-500" currentItem={"This week"} />
						</div>

						<div className="flex gap-12">
							<div className="flex flex-col gap-2">
								<p className="text-gray-400">Customers</p>
								<span className="flex items-center gap-3">
										<p className="text-black font-poppins text-xl font-semibold">1,250</p>
										<p className="tesxt-sm text-status-success">
											+15.80%
										</p>
								</span>
							</div>

							<div className="flex flex-col gap-2">
								<p className="text-gray-400">Active</p>
								<span className="flex items-center gap-3">
										<p className="text-black font-poppins text-xl font-semibold">1,180</p>
										<p className="tesxt-sm text-status-success">
											85%
										</p>
								</span>
							</div>
						</div>
					</CardLayout>

				</div>

				<div className="w-[40%] flex">
					<CardLayout className="w-full py-4 justify-between">
						<div className="flex justify-between">
							<div className="w-10 h-10 flex items-center justify-center rounded-2xl p-2 bg-secondary bg-opacity-20">
								<Bag primaryColor="#1C1D22" />
							</div>

							<DropdownMenu className="bg-transparent text-gray-500" currentItem={"This week"} />
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

				<div className="w-[60%] bg-gray-200 flex-col flex gap-6">


				</div>

				<div className="w-[40%] flex">
					<CardLayout className="w-full py-4 justify-between">
						<div className="flex justify-between">
							<p className="font-poppins">Recent Orders</p>
						</div>

						<div className="flex gap-12">

						</div>

					</CardLayout>
				</div>


			</section>
		</div>
	);
};

export default Home;
