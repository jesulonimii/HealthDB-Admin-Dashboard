import React from "react";
import {twMerge} from "tailwind-merge";
import AvatarImage from "@ui/AvatarImage.tsx";

type productCardProps = {
	item: {
		name: string,
		pending: boolean | string | React.JSX.Element,
		image: string,
		date: string,
		price: string,
		qty : number,
	};
	className? : string
};

function ProductCard({ item, className }: productCardProps) {
	return (
		<div className={twMerge(`flex gap-4 border-b py-3 justify-between items-center ${className}`)}>
			<AvatarImage src={item.image} className="" />

			<div className="w-[70%] gap-2 justify-center flex flex-col">
				<p className="">{item.name}</p>
				<p className="font-medium">
					{item.price} x {item.qty}
				</p>
			</div>

			<div className={`${typeof item.pending !== "boolean" && typeof item.pending !== "string" ? 'w-[40%]': 'w-[20%]' }  h-full gap-2 justify-center flex flex-col items-end`}>
				<p className="text-sm text-gray-500 text-end min-h-[2vh] h-[50%]">{item.date}</p>
				<span
					className={`h-[50%] font-medium bg-opacity-20 px-3 w-fit flex justify-center rounded-lg ${
						typeof item.pending === "string"
							? "text-gray-500"
							: typeof item.pending === "boolean"
							? item.pending
								? "text-status-error bg-status-error"
								: "text-status-success bg-status-success"
							: "text-black w-full"
					}`}>
					{typeof item.pending === "string"
						? item.pending
						: typeof item.pending === "boolean"
						? item.pending
							? "Pending"
							: "Completed"
						: item.pending}
				</span>
			</div>
		</div>
	);
}

export default ProductCard;
