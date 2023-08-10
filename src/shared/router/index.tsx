import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "@src/(dashboard)/home";
import Students from "@/src/(dashboard)/students";
import Login from "@src/(auth)/login";
import Profile from "@/src/(dashboard)/profile";
import Appointments from "@src/(dashboard)/appointments";
import Pharmacy from "@/src/(dashboard)/pharmacy";

let navigate = (path: string) => {};

function RouterView() {

	navigate = useNavigate();

	return (
		<Routes>
			{routes.map((route, index) => {
				return <Route key={index} path={route.path} element={route.component} />;
			})}
		</Routes>
	);
}

const routes = [
	{
		path: "/",
		component: <Home />,
	},
	{
		path: "/pharmacy",
		component: <Pharmacy />,
	},
	{
		path: "/students",
		component: <Students />,
	},
	// {
	// 	path: "/appointments",
	// 	component: <Appointments />,
	// },
	{
		path: "/login",
		component: <Login />,
	},
	{
		path: "/profile",
		component: <Profile />,
	},
	// {
	// 	path: "/orders",
	// 	component: <Notification />,
	// },
];

export const router = {
	push: (path: string) => {
		navigate(path);
	},
};

export default RouterView;