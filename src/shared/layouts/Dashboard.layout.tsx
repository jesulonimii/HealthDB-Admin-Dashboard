import SidebarLayout from "@layouts/Sidebar.layout";
import Header from "@layouts/Header.layout.tsx";

const DashboardLayout = ({children}) => {
	return (
		<main className="flex w-full bg-red-400 justify-between">
			<SidebarLayout className="fixed w-[20%]" />

			<div className="ml-0 w-full bg-bg-50 min-h-screen h-fit md:ml-[20%] flex flex-col">
				<Header/>

				<div className="">
					{children}
				</div>

			</div>
		</main>
	);
};

export default DashboardLayout;