import {twMerge} from "tailwind-merge";

type CardLayoutProps = {
	className? : string,
	children? : React.ReactNode
}

const CardLayout = ({className, children}:CardLayoutProps) => {
	return <div className={twMerge(`rounded-2xl p-5 w-full min-h-24 bg-white flex flex-col ${className} `)}>
		{children}
	</div>;
};

export default CardLayout;
