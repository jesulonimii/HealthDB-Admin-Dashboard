// @ts-nocheck

import DashboardLayout from "@layouts/Dashboard.layout";
import RouterView from "@shared/router";
import {BrowserRouter} from "react-router-dom";
import {IconlyProvider} from "react-iconly";
import {COLORS} from "@utils";

function App() {
	return (
		<IconlyProvider
			set="light"
			primaryColor={COLORS.icon.dark}
			secondaryColor={COLORS["accent-secondary"]}
			stroke="regular">

			<BrowserRouter>
				<DashboardLayout>
					<RouterView />
				</DashboardLayout>
			</BrowserRouter>

		</IconlyProvider>
	);
}

export default App;
