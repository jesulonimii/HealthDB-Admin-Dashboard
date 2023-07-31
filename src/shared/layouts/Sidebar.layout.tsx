import {Link, useLocation} from "react-router-dom";
import {twMerge} from "tailwind-merge";
import LogoutConfirmModal from "./views/LogoutConfirmModal";
import Logo from "@shared/ui/Logo";
import {useState} from "react";
import {ChevronLeft, ChevronRight, Iconly, Logout} from "react-iconly";
import {COLORS} from "@utils";
import {Gift, Headphones} from "@assets/icons";

type sidebarProps = {
	className : string,
	minimizeSidebar : boolean,
	setMinimizeSidebar: any,
	onHover? : any,
	onHoverLeave : any
}

const SidebarLayout = ({className = "", minimizeSidebar, setMinimizeSidebar, onHover, onHoverLeave}) => {
	const pathname = useLocation().pathname;

	const [showHomeMenu, setShowHomeMenu] = useState(false);

	const links = [
		{
			name: "Dashboard",
			icon: "Category",
			link: "/",
			badge: 0,
		},
		{
			name: "Orders",
			icon: "Bag",
			link: "/orders",
			badge: 3,
		},
		{
			name: "Customers",
			icon: "TwoUsers",
			link: "/customers",
			badge: 0,
		},
		{
			name: "Inventory",
			icon: "Folder",
			badge: 0,
			link: "/inventory",
		},
		{
			name: "Conversations",
			icon: "Chat",
			link: "/conversations",
			badge: 16,
		},
		{
			name: "settings",
			icon: "Setting",
			badge: 0,
			link: "/settings",
		},
	];

	return (
		<div className={twMerge(
				`bg-bg-main w-[296px]  z-[5000] hidden h-screen flex-col justify-between px-10 py-8 md:flex ${className}`
			)}>
			<div className={`flex items-center justify-between gap-2 ${minimizeSidebar ? "flex-col" : "flex-row"}`}>
				<Link to="/" className="flex items-center gap-1 w-fit">
					<Logo />
					<p
						className={`font-poppins font-bold text-3xl text-[#45464E] ${
							minimizeSidebar ? "hidden" : "flex"
						}`}>
						Metrix
					</p>
				</Link>

				<span
					onClick={() => setMinimizeSidebar(!minimizeSidebar)}
					className="bg-accent-primary w-10 h-10 p-2 cursor-pointer rounded-2xl flex items-center justify-center">
					{minimizeSidebar ? <ChevronRight /> : <ChevronLeft />}
				</span>
			</div>

			<div className="h-fit ">
				{links.map((link, index) => (
					<div key={index} className="my-3">
						<Link to={link.link}>
							<div
								className={twMerge(
									`group flex ${
										minimizeSidebar ? "w-fit" : "w-full px-6"
									} gap-4 justify-center items-center rounded-2xl p-4 transition duration-500 hover:bg-black hover:bg-opacity-20 ${
										link.link === pathname &&
										"bg-primary text-white hover:bg-primary-dark hover:bg-opacity-100"
									}`
								)}>
								<span className={`w-8 transition duration-500`}>
									<Iconly
										name={link.icon}
										set={link.link === pathname ? "bulk" : "light"}
										primaryColor={link.link === pathname ? "#fff" : COLORS.icon.dark}
									/>
								</span>

								<div className={`${minimizeSidebar ? "hidden" : "flex"} justify-between w-full`}>
									<p
										className={twMerge(
											`w-full items-center capitalize ${
												link.link === pathname ? "text-white" : "text-gray-500"
											}`
										)}>
										{link.name}
									</p>
									{link.badge > 0 && (
										<span className="rounded-full w-8 h-8 p-1 text-sm items-center justify-center flex aspect-square bg-secondary text-black">
											{link.badge}
										</span>
									)}
								</div>
							</div>
						</Link>
					</div>
				))}
			</div>

			<div className="flex flex-col gap-6">
				<div className={`rounded-2xl cursor-pointer items-center w-fit p-4 bg-accent-primary flex gap-4`}>
					<Headphones />
					<p className={`${minimizeSidebar ? "hidden" : "flex"}`}>Contact Support</p>
				</div>

				<div className="rounded-2xl cursor-pointer w-fit p-4 bg-accent-secondary flex flex-col gap-2">
					<div className="flex gap-4 items-center">
						<Gift />
						<p className={`${minimizeSidebar ? "hidden" : "flex"}`}>Contact Support</p>
					</div>
					<div className={`text-gray-500 items-center gap-6 flex ${minimizeSidebar ? "hidden" : "flex"}`}>
						<p>Upgrade your account</p>
						<ChevronRight size={"small"} />
					</div>
				</div>

				<div
					className={`flex cursor-pointer ${minimizeSidebar && "justify-center"} items-center gap-2`}
					onClick={() => setShowHomeMenu(true)}>
					<Logout set={"bulk"} primaryColor={COLORS.status.error} secondaryColor={COLORS.status.error} />
					<p className={`text-status-error ${minimizeSidebar ? "hidden" : "flex"}`}>Logout</p>
				</div>

				<LogoutConfirmModal show={showHomeMenu} setShow={setShowHomeMenu} />
			</div>
		</div>
	);
};

export default SidebarLayout;
