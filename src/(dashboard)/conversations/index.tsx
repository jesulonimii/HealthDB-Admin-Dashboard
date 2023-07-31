import CustomButton from "@ui/forms/CustomButton.tsx";
import CardLayout from "@ui/CardLayout.tsx";
import ContactsCard from "@src/(dashboard)/conversations/views/ContactsCard.tsx";
import AvatarImage from "@ui/AvatarImage.tsx";
import {twMerge} from "tailwind-merge";
import {Bag} from "react-iconly";
import MessageView from "@src/(dashboard)/conversations/views/MessageView.tsx";

function ConversationPage({}) {
	const chats_list = [
		{
			active: true,
			name: "Jane Doe",
			image: "/jane.png",
			messages: [
				{
					type: "from",
					time: "1:00 PM",
					message: "Hello!",
				},
				{
					type: "to",
					time: "1:00 PM",
					message: "How are you?",
				},
				{
					type: "from",
					time: "1:00 PM",
					message: "Hi, i want make enquiries about your business.",
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
					type: "from",
					time: "1:00 PM",
					message: "Hello!",
				},
				{
					type: "to",
					time: "1:00 PM",
					message: "How are you?",
				},
				{
					type: "from",
					time: "1:00 PM",
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
					type: "from",
					time: "1:00 PM",
					message: "Hello!",
				},
				{
					type: "to",
					time: "1:00 PM",
					message: "How are you?",
				},
				{
					type: "from",
					time: "1:00 PM",
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
					type: "from",
					time: "1:00 PM",
					message: "Hello!",
				},
				{
					type: "to",
					time: "1:00 PM",
					message: "How are you?",
				},
				{
					type: "from",
					time: "1:00 PM",
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
					type: "from",
					time: "1:00 PM",
					message: "Hello!",
				},
				{
					type: "to",
					time: "1:00 PM",
					message: "How are you?",
				},
				{
					type: "from",
					time: "1:00 PM",
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
					type: "from",
					time: "1:00 PM",
					message: "Hello!",
				},
				{
					type: "to",
					time: "1:00 PM",
					message: "How are you?",
				},
				{
					type: "from",
					time: "1:00 PM",
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
					type: "from",
					time: "1:00 PM",
					message: "Hello!",
				},
				{
					type: "to",
					time: "1:00 PM",
					message: "How are you?",
				},
				{
					type: "from",
					time: "1:00 PM",
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
					type: "from",
					time: "1:00 PM",
					message: "Hello!",
				},
				{
					type: "to",
					time: "1:00 PM",
					message: "How are you?",
				},
				{
					type: "from",
					time: "1:00 PM",
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
					type: "from",
					time: "1:00 PM",
					message: "Hello!",
				},
				{
					type: "to",
					time: "1:00 PM",
					message: "How are you?",
				},
				{
					type: "from",
					time: "1:00 PM",
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
