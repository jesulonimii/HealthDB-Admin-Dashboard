// @ts-nocheck

import DashboardLayout from "@layouts/Dashboard.layout";
import RouterView from "@shared/router";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IconlyProvider } from "react-iconly";
import { COLORS } from "@utils";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();



function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<IconlyProvider
				set="light"
				stroke="regular"
				primaryColor={COLORS.icon.dark}
				secondaryColor={COLORS.accent.secondary}>
				<BrowserRouter>
					<DashboardLayout>
						<RouterView />
					</DashboardLayout>
				</BrowserRouter>
			</IconlyProvider>
		</QueryClientProvider>
	);
}

export default App;
