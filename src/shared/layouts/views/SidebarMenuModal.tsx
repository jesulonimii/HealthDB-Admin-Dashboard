

import CustomButton from "@shared/ui/forms/CustomButton";
import {useRef, useState} from "react";
import {twMerge} from "tailwind-merge"
import {Link, useLocation, useNavigate} from "react-router-dom";
import useClickOutside from "@shared/hooks/useClickOutside";
import {Bag, Category, Chat, Folder, Setting, TwoUsers} from "react-iconly";

const SidebarMenuModal = ({className = "", show, setShow}) => {
	const [isLoading, setIsLoading] = useState(false);

	const router = useNavigate();

	const pathname = useLocation().pathname

	const closeModal = () => {
		setShow(false);
	};

	const popover = useRef();
	useClickOutside(popover, closeModal);

	const links = [
		{
			name: "Dashboard",
			icon: <Category />,
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
			ref={popover}
			className={twMerge(
				`${
					show ? `translate-x-0` : `-translate-x-[150%]`
				} dark:bg-bg-dark absolute top-24 left-8  z-[6000] flex h-fit w-fit min-w-[20vw] flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white px-2 py-4 drop-shadow-xl transition duration-500 dark:border-gray-800`
			)}>
			<div className="flex w-full flex-col gap-2">
				{links.map((link, index) => (
					<div key={index}>
						<Link to={link.link}>
							<div
								className={twMerge(
									`group gap-4 flex w-full items-center rounded-2xl p-2 px-6 transition duration-500 hover:bg-black hover:bg-opacity-20 ${
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
									<span className="rounded-full w-5 h-5 text-sm items-center justify-center flex aspect-square p-2 bg-secondary">
										{link.badge}
									</span>
								)}
							</div>
						</Link>
					</div>
				))}

			</div>
		</div>
	);
};

export default SidebarMenuModal;
