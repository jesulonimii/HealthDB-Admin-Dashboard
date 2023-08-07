// @ts-nocheck

import DashboardLayout from "@layouts/Dashboard.layout";
import RouterView from "@shared/router";
import { BrowserRouter } from "react-router-dom";
import { IconlyProvider } from "react-iconly";
import { COLORS } from "@utils";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAuth } from "./shared/hooks";
import { useState } from "react";
import { UserContext } from "@context";

const queryClient = new QueryClient();

function App() {
	const { user: loggedIn } = useAuth();
	const [user, setUser] = useState(null);

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
						{!loggedIn ? (
							<DashboardLayout>
								<RouterView />
							</DashboardLayout>
						) : (
							<div className="bg-bg-50 min-h-screen flex flex-col">
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
