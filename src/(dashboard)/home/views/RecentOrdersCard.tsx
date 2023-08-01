import CardLayout from "@ui/CardLayout.tsx";
import React from "react";
import ProductCard from "@src/(dashboard)/home/views/ProductCard.tsx";

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
					return <ProductCard item={item} key={index} />
				})}
			</div>
		</CardLayout>
	);
}

export default RecentOrdersCard;