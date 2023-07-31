import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "@src/(dashboard)/home";
import ConversationPage from "@src/(dashboard)/conversations";

function RouterView() {
	return (
		<Routes>

			{
				routes.map((route, index) => {
					return <Route key={index} path={route.path} element={route.component}/>
				})
			}

		</Routes>
	);
}

const routes = [
	{
		path: '/',
		component: <Home/>
	},
	{
		path: '/conversations',
		component: <ConversationPage/>
	},
]



export default RouterView;