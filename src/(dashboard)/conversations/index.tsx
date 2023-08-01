import CustomButton from "@ui/forms/CustomButton.tsx";
import CardLayout from "@ui/CardLayout.tsx";
import ContactsCard from "@src/(dashboard)/conversations/views/ContactsCard.tsx";
import AvatarImage from "@ui/AvatarImage.tsx";
import {twMerge} from "tailwind-merge";
import {Bag} from "react-iconly";
import MessageView from "@src/(dashboard)/conversations/views/MessageView.tsx";
import React from "react";

function ConversationPage({}) {
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

	const chats_list = [
		{
			active: true,
			name: "Jane Doe",
			image: "/jane.png",
			messages: [
				{
					type: "received",
					time: "2023-07-27T00:55:00.000Z",
					attachments: {
						productInfo : product,
					},
					message: "Hello, I want to make enquiries about your product",
				},
				{
					type: "sent",
					time: "2023-07-27T00:57:00.000Z",
					message: "Hello Janet, thank you for reaching out",
				},
				{
					type: "sent",
					time: "2023-07-27T00:57:00.000Z",
					message: "What do you need to know?",
				},
				{
					type: "received",
					time: "2023-07-27T00:55:00.000Z",
					message: "I want to know if the price is negotiable, i need about 2 Units.",
				},
			],
			badge: 2,
			new: true,
			online: true,
		},
		{
			active: false,
			name: "Janet Adebayo",
			image: "/janet.png",
			messages: [
				{
					type: "received",
					time: "2023-07-27T00:55:00.000Z",
					message: "Hello!",
				},
				{
					type: "sent",
					time: "2023-07-27T00:55:00.000Z",
					message: "How are you?",
				},
				{
					type: "received",
					time: "2023-07-27T00:55:00.000Z",
					message: "Hi, i want make enquiries about your business.",
				},
			],
			badge: 2,
			new: true,
			online: false,
		},
		{
			active: false,
			name: "Kunle Adekunle",
			image: "/kunle.png",
			messages: [
				{
					type: "received",
					time: "2023-07-27T00:55:00.000Z",
					message: "Hello!",
				},
				{
					type: "sent",
					time: "2023-07-27T00:55:00.000Z",
					message: "How are you?",
				},
				{
					type: "received",
					time: "2023-07-27T00:55:00.000Z",
					message: "Hi, i want make enquiries about your business.",
				},
			],
			badge: 2,
			new: true,
			online: true,
		},
		{
			active: false,
			name: "Jane Doe",
			image: "/jane.png",
			messages: [
				{
					type: "received",
					time: "2023-07-27T00:55:00.000Z",
					message: "Hello!",
				},
				{
					type: "sent",
					time: "2023-07-27T00:55:00.000Z",
					message: "How are you?",
				},
				{
					type: "received",
					time: "2023-07-27T00:55:00.000Z",
					message: "Hi, i want make enquiries about your business.",
				},
			],
			badge: 2,
			new: false,
			online: true,
		},
		{
			active: false,
			name: "Janet Adebayo",
			image: "/janet.png",
			messages: [
				{
					type: "received",
					time: "2023-07-27T00:55:00.000Z",
					message: "Hello!",
				},
				{
					type: "sent",
					time: "2023-07-27T00:55:00.000Z",
					message: "How are you?",
				},
				{
					type: "received",
					time: "2023-07-27T00:55:00.000Z",
					message: "Hi, i want make enquiries about your business.",
				},
			],
			badge: 2,
			new: false,
			online: true,
		},
		{
			active: false,
			name: "Kunle Adekunle",
			image: "/kunle.png",
			messages: [
				{
					type: "received",
					time: "2023-07-27T00:55:00.000Z",
					message: "Hello!",
				},
				{
					type: "sent",
					time: "2023-07-27T00:55:00.000Z",
					message: "How are you?",
				},
				{
					type: "received",
					time: "2023-07-27T00:55:00.000Z",
					message: "Hi, i want make enquiries about your business.",
				},
			],
			badge: 0,
			new: false,
			online: true,
		},
		{
			active: false,
			name: "Jane Doe",
			image: "/jane.png",
			messages: [
				{
					type: "received",
					time: "2023-07-27T00:55:00.000Z",
					message: "Hello!",
				},
				{
					type: "sent",
					time: "2023-07-27T00:55:00.000Z",
					message: "How are you?",
				},
				{
					type: "received",
					time: "2023-07-27T00:55:00.000Z",
					message: "Hi, i want make enquiries about your business.",
				},
			],
			badge: 0,
			new: false,
			online: false,
		},
		{
			active: false,
			name: "Janet Adebayo",
			image: "/janet.png",
			messages: [
				{
					type: "received",
					time: "2023-07-27T00:55:00.000Z",
					message: "Hello!",
				},
				{
					type: "sent",
					time: "2023-07-27T00:55:00.000Z",
					message: "How are you?",
				},
				{
					type: "received",
					time: "2023-07-27T00:55:00.000Z",
					message: "Hi, i want make enquiries about your business.",
				},
			],
			badge: 0,
			new: false,
			online: false,
		},
		{
			active: false,
			name: "Kunle Adekunle",
			image: "/kunle.png",
			messages: [
				{
					type: "received",
					time: "2023-07-27T00:55:00.000Z",
					message: "Hello!",
				},
				{
					type: "sent",
					time: "2023-07-27T00:55:00.000Z",
					message: "How are you?",
				},
				{
					type: "received",
					time: "2023-07-27T00:55:00.000Z",
					message: "Hi, i want make enquiries about your business.",
				},
			],
			badge: 0,
			new: false,
			online: false,
		},
	];

	const current_chat = chats_list[0];

	const status_color = {
		true: "bg-primary",
		false: "bg-gray-400",
	};

	return (
		<div className={"flex w-full p-8 md:p-4 h-fit pb-18 min-h-[100vh] flex-col gap-6"}>
			<section className="flex mt-4 justify-between">
				<p className="">Conversations with customers</p>

				<CustomButton>New Message</CustomButton>
			</section>

			<section className="w-full h-full gap-4 flex relative">
				<ContactsCard className="w-[33%]" chats_list={chats_list} />

				<MessageView
					className="h-[80vh] sticky w-[66%] right-0 top-[18%]"
					chats_list={chats_list}
					current_chat={current_chat}
				/>
			</section>
		</div>
	);
}

export default ConversationPage;
