import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "@src/(dashboard)/home";
import ConversationPage from "@src/(dashboard)/conversations";
import Students from "@/src/(dashboard)/students";
import Login from "@src/(auth)/login";
import Profile from "@/src/(dashboard)/profile";
import Notification from "@/src/(dashboard)/orders";

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
		path: "/conversations",
		component: <ConversationPage />,
	},
	{
		path: "/students",
		component: <Students />,
	},
	{
		path: "/login",
		component: <Login />,
	},
	{
		path: "/profile",
		component: <Profile />,
	},
	{
		path: "/orders",
		component: <Notification />,
	},
];

export const router = {
	push: (path: string) => {
		navigate(path);
	},
};

export default RouterView;