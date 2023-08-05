import React from "react";
import * as Icons from "@heroicons/react/24/outline";
import * as Iconly from "react-iconly";
import {HEX2RGBA} from "@utils";

type IconStyledProps = {
	icon: string | React.ReactNode;
	color?: string;
	bgColor?: string;
	className?: string;
};

const StyledIcon = ({icon = "home", color = "#d54b05", bgColor = "#d31616", className}: IconStyledProps) => {
	const getIcon = (icon: string) => {
		const heroPack = Icons[icon];
		const iconlyPack = Iconly[icon];

		return heroPack ? heroPack : iconlyPack ? iconlyPack : Icons.ExclamationTriangleIcon;
	};
	const IconTag = typeof icon === "string" ? getIcon(icon) : (null as keyof JSX.IntrinsicElements);

	return (
		<div
			className={`my-1 rounded-xl p-2 w-10 h-10 flex items-center justify-center ${className}`}
			style={{
				backgroundColor: HEX2RGBA(color || bgColor, 0.2),
			}}>
			{/* @ts-ignore */}

			{typeof icon === "string" ? (
				<IconTag
					primaryColor={color}
					style={{
						color: HEX2RGBA(color || bgColor),
					}}
				/>
			) : (
				icon
			)}
		</div>
	);
};

export default StyledIcon;
