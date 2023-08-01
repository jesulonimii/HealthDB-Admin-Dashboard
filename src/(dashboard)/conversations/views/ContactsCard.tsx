import CardLayout from "@ui/CardLayout.tsx";
import FormInput from "@ui/forms/FormInput.tsx";
import {Search} from "react-iconly";
import AvatarImage from "@ui/AvatarImage.tsx";
import {twMerge} from "tailwind-merge";
import moment from "moment";

function ContactsCard({chats_list, className=""}) {



	return (
		<CardLayout className={twMerge(`gap-4 p-0 ${className}`)}>
			<div className="p-5 gap-4 flex flex-col">
				<div className="flex items-center justify-between">
					<p className="font-semibold text-xl text-black font-poppins">Contacts</p>
					<p className="text-gray-500 font-poppins text-xl">34</p>
				</div>

				<FormInput
					className=""
					placeholder="Search"
					startIcon={<Search size={"small"} primaryColor={"#000"} />}
				/>
			</div>

			<div>
				{chats_list.map((chat, index) => {
					const {messages} = chat;

					const last_message_index = chat?.messages.length - 1;
					const last_message_object = messages[last_message_index];

					return (
						<div
							key={index}
							className={`cursor-pointer px-4 py-3 h-24 items-center flex border-r-primary hover:bg-bg-50 ${
								chat.active && "bg-bg-50 border-l  border-r-4"
							}`}>
							<div className="w-[12%]">
								<AvatarImage src={chat.image} status_indicator={{online: chat.online}} />
							</div>
							<div className="w-[68%] px-4 py-3 justify-between h-full flex flex-col">
								<p className="font-poppins font-medium">{chat.name}</p>
								<p className="w-full text-gray-400 text-sm line-clamp-1 text-ellipsis">
									{last_message_object?.message}
								</p>
							</div>
							<div className="w-[20%] items-end py-2 justify-between h-full flex flex-col">
								{chat.new ? (
									<p className="capitalize text-sm flex items-center justify-center bg-accent-secondary rounded-lg px-4">
										new
									</p>
								) : (
									<>
										{chat.badge ? (
											<p className="capitalize w-6 aspect-square text-xs flex items-center justify-center rounded-full bg-secondary">
												{chat.badge}
											</p>
										) : (
											<p className="capitalize text-sm flex items-center justify-center bg-accent-secondary rounded-lg px-4"></p>
										)}
									</>
								)}
								<p className="w-fit text-gray-400 text-sm">{moment(last_message_object?.time).format("HH:MM a")}</p>
							</div>
						</div>
					);
				})}
			</div>
		</CardLayout>
	);
}

export default ContactsCard;