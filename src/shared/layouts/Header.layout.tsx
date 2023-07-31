"use client";

import {Link, useLocation} from "react-router-dom";
import DropdownMenu from "@ui/DropdownMenu.tsx";
import {Category, ChevronRight, Home, Notification} from "react-iconly";
import {COLORS} from "@utils";
import {useState} from "react";
import UserMenuModal from "@layouts/views/UserMenuModal.tsx";
import SidebarMenuModal from "@layouts/views/SidebarMenuModal.tsx";

type HeaderProps = {
	className?: string;
};

const Header = ({className = ""}: HeaderProps) => {
	const path = useLocation().pathname;
	const pathname = path.replaceAll("/", "");

	const workspaces = [
		{name: "Nanny's Shop", value: "1", icon: ""},
		{name: "Joe's", value: "2", icon: ""},
		{name: "Work Organization", value: "3", icon: ""},
	];



	const [showUserMenu, setShowUserMenu] = useState(false);
	const [showSidebarMenu, setShowSidebarMenu] = useState(false);

	return (
		<>
			<div className="flex flex-col shadow sticky z-[5000] top-0 h-fit max-h-[110px] bg-white px-8 py-4 md:px-4 overflow-x-clip">
				<UserMenuModal show={showUserMenu} setShow={setShowUserMenu} />
				<SidebarMenuModal show={showSidebarMenu} setShow={setShowSidebarMenu} />

				<div className={`w-full flex flex-row justify-between items-center pt-2 pb-4 ${className}`}>
					<Link to="/" className="flex items-center gap-4">
						<span className="flex md:hidden" onClick={()=>setShowSidebarMenu(!showSidebarMenu)}>
							<Category size={"medium"} />
						</span>
						<p className="font-bold font-poppins text-2xl capitalize">
							{pathname === "" ? "dashboard" : pathname}
						</p>
					</Link>

					<div className="w-fit flex justify-center items-center gap-8">
						<DropdownMenu
							items={workspaces}
							currentItem={workspaces[0].name}
							className="bg-accent-secondary text-black rounded-xl py-2  hidden sm:flex"
						/>

						<div className="cursor-pointer hidden md:flex">
							<Notification set="bold" primaryColor={COLORS.primary} />
						</div>

						<span onClick={()=>setShowUserMenu(true)}>
							<img
								className="rounded-xl w-18 cursor-pointer"
								src={"/profile-1.png"}
								alt={"profile image"}
							/>
						</span>
					</div>
				</div>

				<div className="border-t items-center py-4 flex gap-2">
					<Link to={"/"}>
						<Home set={"bold"} primaryColor={COLORS.primary} size={"small"} />
					</Link>
					<div className="text-sm text-gray-500">{path.replaceAll("/", `\u{2800}/\u{2800}`)}</div>
				</div>
			</div>
		</>
	);
};

export default Header;
