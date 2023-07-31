import {Link, useLocation} from "react-router-dom";
import {twMerge} from "tailwind-merge";
import LogoutConfirmModal from "./views/LogoutConfirmModal";
import Logo from "@shared/ui/Logo";
import {useState} from "react";
import {Bag, Category, Chat, ChevronRight, Folder, Logout, Setting, TwoUsers} from "react-iconly";
import {COLORS} from "@utils";
import {Gift, Headphones} from "@assets/icons";

const SidebarLayout = ({className = ""}) => {
	const pathname = useLocation().pathname;

	const [showHomeMenu, setShowHomeMenu] = useState(false);

	const links = [
		{
			name: "Dashboard",
			icon: <Category primaryColor={"#fff"} set={"bulk"} />,
			link: "/",
			badge: 0,
		},
		{
			name: "Orders",
			icon: <Bag />,
			link: "/orders",
			badge: 3,
		},
		{
			name: "Customers",
			icon: <TwoUsers />,
			link: "/customers",
			badge: 0,
		},
		{
			name: "Inventory",
			icon: <Folder />,
			badge: 0,
			link: "/inventory",
		},
		{
			name: "Conversations",
			icon: <Chat />,
			link: "/conversations",
			badge: 16,
		},
		{
			name: "settings",
			icon: <Setting />,
			badge: 0,
			link: "/settings",
		},
	];

	return (
		<div
			className={twMerge(
				`bg-bg-main w-[296px]  z-[5000] hidden h-screen flex-col justify-between px-10 py-8 md:flex ${className}`
			)}>
			<Link to="/">
				<Logo className="w-36" />
			</Link>

			<div className="h-fit mt-">
				{links.map((link, index) => (
					<div key={index} className="my-3">
						<Link to={link.link}>
							<div
								className={twMerge(
									`group flex w-full items-center rounded-2xl p-4 px-6 transition duration-500 hover:bg-black hover:bg-opacity-20 ${
										link.link === pathname &&
										"bg-primary text-white hover:bg-secondary hover:bg-opacity-100"
									}`
								)}>
								<span
									className={`mr-4 w-8 transition duration-500  ${
										link.link === pathname && "fill-white"
									}`}>
									{link.icon}
								</span>
								<p
									className={twMerge(
										`w-full items-center capitalize ${
											link.link === pathname ? "text-white" : "text-gray-500"
										}`
									)}>
									{link.name}
								</p>
								{link.badge > 0 && (
									<span className="rounded-full w-7 h-7 text-sm items-center justify-center flex aspect-square p-2 bg-secondary">
										{link.badge}
									</span>
								)}
							</div>
						</Link>
					</div>
				))}
			</div>

			<div className="flex flex-col gap-6">
				<div className="rounded-2xl cursor-pointer items-center p-4 bg-accent-primary flex gap-4">
					<Headphones className="" />
					<p>Contact Support</p>
				</div>

				<div className="rounded-2xl cursor-pointer p-4 bg-accent-secondary flex flex-col gap-2">
					<div className="flex gap-4 items-center">
						<Gift className="" />
						<p>Contact Support</p>
					</div>
					<div className="text-gray-500 items-center gap-6 flex">
						<p>Upgrade your account</p>
						<ChevronRight size={"small"}/>
					</div>
				</div>

				<div className="flex cursor-pointer items-center gap-2" onClick={() => setShowHomeMenu(true)}>
					<Logout set={"two-tone"} primaryColor={COLORS.status.error} secondaryColor={COLORS.status.error} />
					<p className="text-status-error">Logout</p>
				</div>

				<LogoutConfirmModal show={showHomeMenu} setShow={setShowHomeMenu} />
			</div>
		</div>
	);
};

export default SidebarLayout;
