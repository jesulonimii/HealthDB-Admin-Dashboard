import CardLayout from "@ui/CardLayout.tsx";
import React from "react";

function RecentOrdersCard({}) {

	const products = [
		{
			name: "iPhone 13",
			pending: true,
			image: "/iphone-1.png",
			date: "12 Sept 2022",
			price: "₦730,000.00",
			qty: 1,
		},
		{
			name: "iPhone 13",
			pending: false,
			image: "/iphone-2.png",
			date: "12 Sept 2022",
			price: "₦730,000.00",
			qty: 1,
		},
		{
			name: "iPhone 13",
			pending: true,
			image: "/iphone-1.png",
			date: "12 Sept 2022",
			price: "₦730,000.00",
			qty: 1,
		},
		{
			name: "iPhone 13",
			pending: false,
			image: "/iphone-2.png",
			date: "12 Sept 2022",
			price: "₦730,000.00",
			qty: 1,
		},
		{
			name: "iPhone 13",
			pending: false,
			image: "/iphone-2.png",
			date: "12 Sept 2022",
			price: "₦730,000.00",
			qty: 1,
		},
		{
			name: "iPhone 13",
			pending: false,
			image: "/iphone-2.png",
			date: "12 Sept 2022",
			price: "₦730,000.00",
			qty: 1,
		},
		{
			name: "iPhone 13",
			pending: true,
			image: "/iphone-1.png",
			date: "12 Sept 2022",
			price: "₦730,000.00",
			qty: 1,
		},
		{
			name: "iPhone 13",
			pending: true,
			image: "/iphone-1.png",
			date: "12 Sept 2022",
			price: "₦730,000.00",
			qty: 1,
		},
		{
			name: "iPhone 13",
			pending: true,
			image: "/iphone-1.png",
			date: "12 Sept 2022",
			price: "₦730,000.00",
			qty: 1,
		},
	];


	return (
		<CardLayout className="w-full h-fit p-5">
			<div className="flex justify-between">
				<p className="font-poppins font-medium">Recent Orders</p>
			</div>

			<div className="flex flex-col gap-2 mt-4">
				{products.map((item, index) => {
					return (
						<div key={index} className="flex gap-4 border-b py-3 justify-between">
							<img src={item.image} className="w-[10%]" alt={"product-image"} />

							<div className="w-[70%] gap-2 justify-center flex flex-col">
								<p className="">{item.name}</p>
								<p className="font-medium">
									{item.price} x {item.qty}
								</p>
							</div>

							<div className="w-[20%] gap-2 justify-center flex flex-col items-end">
								<p className="text-sm text-gray-500">{item.date}</p>
								<p
									className={`font-medium bg-opacity-20 px-3 w-fit flex justify-center rounded-lg ${
										item.pending
											? "text-status-error bg-status-error"
											: "text-status-success bg-status-success"
									}`}>
									{item.pending ? "Pending" : "Completed"}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</CardLayout>
	);
}

export default RecentOrdersCard;