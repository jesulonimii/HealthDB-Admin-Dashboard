import SidebarLayout from "@layouts/Sidebar.layout";
import Header from "@layouts/Header.layout.tsx";
import {useState} from "react";

const DashboardLayout = ({children}) => {

	const [minimizeSidebar, setMinimizeSidebar] = useState(true);

	const collapseSidebar = () =>{
		minimizeSidebar && setMinimizeSidebar(false)
	}

	const expandSidebar = () =>{
		!minimizeSidebar && setMinimizeSidebar(true)
	}

	return (
		<main className="flex w-full bg-primary-dark justify-between">
			<SidebarLayout
				onHover={expandSidebar}
				onHoverLeave={collapseSidebar}
				className={`fixed ${minimizeSidebar ? "w-[8%]" : "w-[20%]"}`}
				minimizeSidebar={minimizeSidebar}
				setMinimizeSidebar={setMinimizeSidebar}
			/>

			<div className={`ml-0 w-full bg-bg-50 min-h-screen h-fit ${minimizeSidebar ? "md:ml-[8%]" : "md:ml-[20%]"} flex flex-col`}>
				<Header />

				<div className="">{children}</div>
			</div>
		</main>
	);
};

export default DashboardLayout;