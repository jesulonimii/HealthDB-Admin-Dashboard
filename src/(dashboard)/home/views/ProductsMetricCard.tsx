import CardLayout from "@ui/CardLayout.tsx";
import {Folder} from "react-iconly";
import {COLORS} from "@utils";
import React from "react";

function ProductsMetricCard({}) {
	return (
		<CardLayout className="w-full h-full justify-between p-5 bg-primary">
			<div className="flex justify-between">
				<div className="w-10 h-10 flex items-center justify-center rounded-xl p-2 bg-bg-main bg-opacity-20">
					<Folder primaryColor={COLORS["bg-main"]} />
				</div>
			</div>

			<div className="flex gap-12">
				<div className="flex flex-col gap-2">
					<p className="text-white">All Products</p>
					<span className="flex items-center gap-3">
											<p className="text-white font-poppins text-xl font-semibold">45</p>
										</span>
				</div>

				<div className="flex flex-col gap-2">
					<p className="text-white">Active</p>
					<span className="flex items-center gap-3">
											<p className="text-white font-poppins text-xl font-semibold">32</p>
											<p className="tesxt-sm text-white">+24%</p>
										</span>
				</div>
			</div>
		</CardLayout>
	);
}

export default ProductsMetricCard;