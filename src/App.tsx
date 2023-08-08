// @ts-nocheck

import DashboardLayout from "@layouts/Dashboard.layout";
import RouterView, { router } from "@shared/router";
import { BrowserRouter, useLocation } from "react-router-dom";
import { IconlyProvider } from "react-iconly";
import { COLORS, QUERY_KEYS } from "@utils";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAuth } from "./shared/hooks";
import { useEffect, useState } from "react";
import { UserContext } from "@context";
import { useLocalStorage } from "@hooks";

const queryClient = new QueryClient();

function App() {

	const { getFromStorage } = useLocalStorage()
	const [user, setUser] = useState( getFromStorage(QUERY_KEYS.user_data) || null);

	const pathname = window.location.pathname.split("/")[1].trim();

	useEffect(() => {

		console.log("user details", user);


		if (user) {
			setUser(user);
		} else if (!user && pathname !== "login") {
			window.location.href = "/login"
		}
	}, [])


	return (
		<QueryClientProvider client={queryClient}>
			<IconlyProvider
				set="light"
				stroke="regular"
				primaryColor={COLORS.icon.dark}
				secondaryColor={COLORS.accent.secondary}>
				<BrowserRouter>
					<UserContext.Provider value={{ user, setUser }}>
						{/* TODO: remove the '!' after setting up login  */}
						{(pathname !== "login" ) ? (
							<DashboardLayout>
								<RouterView />
							</DashboardLayout>
						) : (
							<div className="bg-bg-50 min-h-screen flex flex-col items-center justify-center">
								<RouterView />
							</div>
						)}
					</UserContext.Provider>
				</BrowserRouter>
			</IconlyProvider>
		</QueryClientProvider>
	);
}

export default App;
