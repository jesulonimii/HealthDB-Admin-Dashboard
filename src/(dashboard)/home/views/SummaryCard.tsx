import DropdownMenu from "@ui/DropdownMenu.tsx";
import CardLayout from "@ui/CardLayout.tsx";
import React from "react";

// @ts-ignore
import {ReactComponent as BarGraph} from "@assets/images/graphBar.svg"

function SummaryCard({}) {
	return (
		<CardLayout className="w-full h-full justify-between">
			<div className="flex justify-between">
				<div className="flex items-center gap-4">
					<p className="font-poppins font-medium">Summary</p>

					<DropdownMenu
						className="bg-primary bg-opacity-10 text-primary p-1 px-4"
						currentItem={"Sales"}
					/>
				</div>

				<DropdownMenu className="bg-transparent text-black" currentItem={"Last 7 days"} />
			</div>

			<div className="w-full">
				<BarGraph/>
			</div>

		</CardLayout>
	);
}

export default SummaryCard;