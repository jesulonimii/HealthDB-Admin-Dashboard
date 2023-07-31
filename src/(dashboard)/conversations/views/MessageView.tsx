import AvatarImage from "@ui/AvatarImage.tsx";
import {twMerge} from "tailwind-merge";
import {Bag} from "react-iconly";
import CardLayout from "@ui/CardLayout.tsx";

function MessageView({chats_list, current_chat, className}) {

	const status_color = {
		true: "bg-primary",
		false: "bg-gray-400",
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
						<Bag />
						<p className="text-gray-500">0 Orders</p>
					</span>
				</div>
			</div>

			<div className="h-[80%] overflow-y-auto"></div>

			<div className="h-[10%] -mx-5 border-t"></div>
		</CardLayout>
	);
}

export default MessageView;