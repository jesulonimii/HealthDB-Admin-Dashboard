import AppointmentInfoCard from "@src/(dashboard)/home/views/AppointmentInfoCard.tsx";
import React from "react";
import moment from "moment/moment";

function MessageItem({message}) {


	const {attachments} = message || null



	return (
		<div className={`w-full my-4 ${message.type==="sent" && "float-right" }`}>
			<div className={`w-full gap-4 flex flex-col ${message.type === "sent" && "items-end"}`}>
				{
					attachments?.productInfo && <AppointmentInfoCard item={attachments?.productInfo} className="w-[50%]" />
				}

				<MessageBox {...message} type={message.type} />
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
			<div className="w-fit justify-end max-w-[40%]">
				<div className="my-2 w-full flex flex-col ">
					<div className={`w-fit rounded-t-xl rounded-br-xl bg-primary p-3 py-3 text-white `}>{message}</div>
					<p className="text-xs float-right w-full text-black dark:text-gray-500 mt-1">
						{moment(time).format("HH:MM a")}
					</p>
				</div>
			</div>
		);
	}

	if (type === "sent") {
		return (
			<div className="w-fit justify-end">
				<div className="my-2 w-full flex flex-col items-end">
					<div className={`w-fit rounded-t-xl rounded-bl-xl bg-secondary-50 p-3 py-3 text-black`}>{message}</div>
					<p className="text-xs w-fit text-black dark:text-gray-500 mt-1">
						{moment(time).format("HH:MM a")}
					</p>
				</div>
			</div>
		);
	}

	return <></>;
};

export default MessageItem;