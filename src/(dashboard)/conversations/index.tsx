import CustomButton from "@ui/forms/CustomButton.tsx";
import CardLayout from "@ui/CardLayout.tsx";
import ContactsCard from "@src/(dashboard)/conversations/views/ContactsCard.tsx";
import AvatarImage from "@ui/AvatarImage.tsx";
import {twMerge} from "tailwind-merge";
import {Bag} from "react-iconly";

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

				<CardLayout className="h-[80vh] sticky w-[66%] right-0 top-[18%] overflow-clip">
					<div className="flex -mx-5 p-5 py-8 h-[10%] border-b gap-6 items-center justify-between">
						<div className="flex gap-6">
							<AvatarImage className="w-12" src={chats_list[0].image} />

							<div className="flex flex-col gap-2">
								<p className="font-poppins font-medium">Jane Doe</p>
								<div className="flex gap-4">
								<span className="flex gap-2 items-center">
									<span
										className={twMerge(
											`w-4 h-4 bg-gray-400 ${
												status_color[String(current_chat.online)]
											} border-2 border-blue-50 rounded-full -right-1 -top-1`
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
								<Bag/>
								<p className="text-gray-500">
									0 Orders
								</p>
							</span>
						</div>
					</div>

					<div className="h-[80%] overflow-y-auto"></div>

					<div className="h-[10%] -mx-5 border-t"></div>

				</CardLayout>
			</section>
		</div>
	);
}

export default ConversationPage;
