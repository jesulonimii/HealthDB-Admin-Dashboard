"use client";

import {Link} from "react-router-dom";
import DropdownMenu from "@ui/DropdownMenu.tsx";
import {ChevronDown, Notification, Home} from "react-iconly";
import {COLORS} from "@utils";

type HeaderProps = {
	className?: string;
};

const Header = ({className = ""}: HeaderProps) => {
	return (
		<div className="flex flex-col sticky z-[5000] top-0 h-fit max-h-[90px] bg-white">
			<div className={`w-full flex flex-row justify-between items-center pr-12 py-1 ${className}`}>
				<Link to="/">
					<p className="font-bold font-poppins text-2xl ">Dashboard</p>
				</Link>

				<div className="w-fit flex justify-center items-center gap-8">
					<DropdownMenu
						selector={
							<div className="flex gap-3 px-3 justify-between py-2 rounded-xl bg-accent-secondary">
								<p>Nanny's Shop</p>
								<ChevronDown />
							</div>
						}
					/>

					<Notification size={"xlarge"} set="bold" primaryColor={COLORS.primary} />

					<img className="rounded-xl w-18" src={"/profile-1.png"} alt={"profile image"} />
				</div>
			</div>

			<div className="border-t items-center py-2 flex gap-2">
				<Home set={"bold"} primaryColor={COLORS.primary} size={"small"}/>
			</div>
		</div>
	);
};

export default Header;
