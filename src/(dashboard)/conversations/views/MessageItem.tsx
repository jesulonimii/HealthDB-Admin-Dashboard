import ProductCard from "@src/(dashboard)/home/views/ProductCard.tsx";
import React from "react";
import moment from "moment/moment";

function MessageItem({message}) {

	const product = {
		name: "iPhone 13",
		pending: (
			<div className="text-gray-500 flex gap-1 text-xs w-full items-center">
				<p className="text-primary font-medium text-xs w-fit">12</p>
				<p className="w-fit">In Stock</p>
			</div>
		),
		image: "/iphone-2.png",
		date: "",
		price: "₦730,000.00",
		qty: 1,
	};


	return (
		<div className="w-full my-2 bg-green-400 ">
			<div className="max-w-[80%] gap-4 ">
				<ProductCard item={product} className="w-[50%]" />

				<MessageBox {...message} type={"sent"} />
			</div>
		</div>
	);
}

type MessageBoxProps = {
	type: "received" | "sent";
	message: string;
	time?: string | Date;
	index?: number;
	delivered?: boolean;
};

const MessageBox = (props: MessageBoxProps) => {

	const {
		type = "sent",
		message = "hello",
		time = new Date(),
		index = null,
		delivered,
		...rest
	} = props

	if (type === "received") {
		return (
			<div className="w-full justify-end">
				<div className="my-2 w-fit max-w-[80%] flex flex-col ">
					<div className="flex items-center gap-2 my-1">
						<div className={`w-fit rounded-xl bg-primary p-3 py-2 text-white `}>{message}</div>
					</div>
					<p className="text-xs float-right w-full text-black dark:text-gray-500 pl-12 mt-1">
						{moment(time).format("HH:MM a")}
					</p>
				</div>
			</div>
		);
	}

	if (type === "sent") {
		return (
			<div className="w-full justify-end">
				<div className="my-2 w-fit max-w-[80%] flex flex-col">
					<div className="flex items-center gap-2 my-1">
						<div className={`w-fit rounded-xl bg-secondary p-3 py-2 text-black`}>{message}</div>
					</div>
					<p className="text-xs float-right w-full text-black dark:text-gray-500 pr-12 mt-1">
						{moment(time).format("HH:MM a")}
					</p>
				</div>
			</div>
		);
	}

	return <></>;
};

export default MessageItem;