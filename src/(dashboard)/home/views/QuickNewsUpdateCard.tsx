import CardLayout from "@ui/CardLayout.tsx";
import {Graph} from "react-iconly";
import {COLORS, PERIOD_FILTER} from "@utils";
import DropdownMenu from "@ui/DropdownMenu.tsx";
import React from "react";
import IconStyled from "@ui/IconStyled.tsx";

function QuickNewsUpdateCard({}) {
	return (
		<CardLayout className="w-full h-full p-5 gap-6 justify-between">
			<div className="flex justify-between">

				<IconStyled icon={"MegaphoneIcon"} color={COLORS.primary} />

			</div>

			<div className="flex gap-12">
				<div className="flex flex-col gap-2">
					<p className="w-full text-lg text-black font-outfit font-semibold">
						Good morning everyone!
						<br/>
						All members of staff are required to attend the meeting at 9:00 AM.
					</p>
					<p className="text-gray-400">Health Center Management Update</p>

				</div>

			</div>
		</CardLayout>
	);
}

export default QuickNewsUpdateCard;
