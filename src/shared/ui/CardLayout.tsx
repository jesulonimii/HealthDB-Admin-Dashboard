import { twMerge } from "tailwind-merge";
import React from "react";

type CardLayoutProps = {
	className?: string;
	title?: string;
	children?: React.ReactNode;
};

const CardLayout = ({ className, title, children }: CardLayoutProps) => {
	return (
		<div className={twMerge(`rounded-2xl p-5 w-full min-h-24 bg-white flex flex-col ${className} `)}>
			{
				title && <h2 className="text-primary font-medium font-outfit text-xl mb-8">{title}</h2>
			}

			{ children && children }
		</div>
	);
};

export default CardLayout;
