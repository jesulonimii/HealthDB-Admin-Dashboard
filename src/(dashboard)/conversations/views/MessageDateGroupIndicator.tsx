import React from "react";

function MessageDateGroupIndicator({date = "Today"}) {
	return (
		<p className="h-8 capitalize text-sm flex items-center justify-center bg-accent-primary rounded-lg px-4">
			{date}
		</p>
	);
}

export default MessageDateGroupIndicator;