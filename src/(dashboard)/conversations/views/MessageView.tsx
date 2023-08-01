import AvatarImage from "@ui/AvatarImage.tsx";
import {twMerge} from "tailwind-merge";
import {Bag, Plus, Send} from "react-iconly";
import CardLayout from "@ui/CardLayout.tsx";
import FormInput from "@ui/forms/FormInput.tsx";
import React from "react";
import {COLORS} from "@utils";
import CustomButton from "@ui/forms/CustomButton.tsx";
import {FaceSmileIcon} from "@heroicons/react/24/outline";
import MessageDateGroupIndicator from "@src/(dashboard)/conversations/views/MessageDateGroupIndicator.tsx";
import ProductCard from "@src/(dashboard)/home/views/ProductCard.tsx";
import moment from "moment";
import MessageItem from "@src/(dashboard)/conversations/views/MessageItem.tsx";

function MessageView({chats_list, current_chat, className}) {
	const status_color = {
		true: "bg-primary",
		false: "bg-gray-400",
	};

	const {messages} = current_chat;

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
		<CardLayout className={twMerge(`overflow-clip ${className}`)}>
			<div className="flex -mx-5 p-5 py-8 h-[10%] border-b gap-6 items-center justify-between">
				<div className="flex gap-6">
					<AvatarImage className="w-12" src={current_chat.image} />

					<div className="flex flex-col gap-2">
						<p className="font-poppins font-medium">Jane Doe</p>
						<div className="flex gap-4">
							<span className="flex gap-2 items-center">
								<span
									className={twMerge(
										`w-4 h-4 bg-gray-400 ${
											status_color[String(current_chat.online)]
										} border-2 border-blue-50 rounded-full -right-1 -top-1`,
									)}></span>

								<p className="text-gray-400">Online</p>
							</span>
							<p>12:55 am</p>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-2 h-full justify-center items-end">
					<span className="flex gap-4">
						<p className="capitalize flex items-center justify-center bg-accent-secondary rounded-lg px-4">
							New Customer
						</p>
						<p className="text-primary">View Profile</p>
					</span>
					<span className="flex items-center gap-4">
						<Bag />
						<p className="text-gray-500">0 Orders</p>
					</span>
				</div>
			</div>

			<div className="h-[80%] overflow-y-auto flex flex-col py-4 items-center">
				<MessageDateGroupIndicator date={"12 August 2022"} />

				<MessageItem message={messages[0]} />
			</div>

			{/*Input Field*/}
			<div className="h-[10%] -mx-5 px-5 items-center flex border-t">
				<FormInput
					placeholder="Your message"
					className="items-center flex"
					startIcon={
						<span className="w-full cursor-pointer -ml-2">
							<Plus set="bulk" secondaryColor={COLORS.accent.secondary} primaryColor={COLORS.icon.dark} />
						</span>
					}
					endIconClassName="w-fit"
					endIcon={
						<span className="w-full cursor-pointer flex items-center gap-4">
							<FaceSmileIcon className="text-primary w-8" />
							<CustomButton
								className="w-fit bg-accent-secondary text-black"
								endIcon={<Send primaryColor={"#000"} size={"small"} set={"bold"} />}>
								Send
							</CustomButton>
						</span>
					}
				/>
			</div>
		</CardLayout>
	);
}

export default MessageView;
