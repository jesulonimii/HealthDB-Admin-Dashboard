import React from "react";
import CardLayout from "@ui/CardLayout.tsx";

const GeneralProfileCard = () => {
	return (
		<CardLayout title="Personal Information" className="p-8">

			<div className="grid grid-cols-4 gap-10 w-full mb-5">
                <div className="flex w-full flex-col gap-1">
                    <h1 className="text-gray-400">First Name</h1>
                    <p className="font-semibold">Janet</p>
                </div>
				<div className="flex w-full flex-col gap-1">
					<h1 className="text-gray-400">Last Name</h1>
					<p className="font-semibold">Jones</p>
				</div>
				<div className="flex w-full flex-col gap-1">
					<h1 className="text-gray-400">Age</h1>
					<p className="font-semibold">20</p>
				</div>
				<div className="flex w-full flex-col gap-1">
					<h1 className="text-gray-400">Birthday</h1>
					<p className="font-semibold">12/12/2001</p>
				</div>

                {/*Info Group 2*/}
                <div className="flex w-full flex-col  gap-1">
                    <h1 className="text-gray-400">Matric No</h1>
                    <p className="font-semibold">CSC/2030/001</p>
                </div>
                <div className="flex w-full flex-col gap-1">
                    <h1 className="text-gray-400">Faculty</h1>
                    <p className="font-semibold">Technology</p>
                </div>
                <div className="flex w-full flex-col gap-1">
                    <h1 className="text-gray-400">Department</h1>
                    <p className="font-semibold">Computer Science and Engineering</p>
                </div>
                <div className="flex w-full flex-col gap-1">
                    <h1 className="text-gray-400">Level</h1>
                    <p className="font-semibold">200</p>
                </div>

                {/*Info Group 3*/}
                <div className="flex w-full flex-col gap-1">
                    <h1 className="text-gray-400">Email</h1>
                    <p className="font-semibold">adedokunfemi14@gmail.com</p>
                </div>
                <div className="flex w-full flex-col gap-1">
                    <h1 className="text-gray-400">Phone Number</h1>
                    <p className="font-semibold">09023643820</p>
                </div>
                <div className="flex w-full flex-col  gap-1">
                    <h1 className="text-gray-400">Address</h1>
                    <p className="font-semibold">Room 102, Moremi Hall, OAU, Ile-Ife</p>
                </div>


			</div>
		</CardLayout>
	);
};

export default GeneralProfileCard;
