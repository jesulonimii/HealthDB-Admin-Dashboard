

import CustomButton from "@shared/ui/forms/CustomButton";
import {useRef, useState} from "react";
import {twMerge} from "tailwind-merge"
import {useNavigate} from "react-router-dom";
import useClickOutside from "@shared/hooks/useClickOutside";
import {Danger} from "react-iconly";
import {COLORS} from "@utils";

const LogoutConfirmModal = ({className = "", show, setShow}) => {
	const [isLoading, setIsLoading] = useState(false);

	const router = useNavigate();

	const closeModal = () => {
		setShow(false);
	};

	const popover = useRef();
	useClickOutside(popover, closeModal);

	return (
		<div
			ref={popover}
			className={twMerge(
				`${
					show ? `translate-y-0` : `translate-y-[150%]`
				} dark:bg-bg-dark absolute bottom-8 left-8  z-[6000] flex h-fit w-fit min-w-[20vw] flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white px-2 py-4 drop-shadow-xl transition duration-500 dark:border-gray-800`
			)}>
			<div className="flex w-full flex-col gap-4 p-4 justify-center items-center">
				<p className="text-center text-lg font-outfit font-medium">Are you sure you want to log out?</p>

				<div className="bg-status-error bg-opacity-20 w-18 h-18 rounded-full p-4 flex items-center justify-center">
					<Danger primaryColor={COLORS.status.error} size={"xlarge"} />
				</div>

				<CustomButton loading={isLoading} className="bg-status-error w-full mx-1" onClick={() => {}}>
					Log Out
				</CustomButton>
			</div>
		</div>
	);
};

export default LogoutConfirmModal;
