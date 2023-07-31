import {twMerge} from "tailwind-merge";

type AvatarImageProps = {
	src: string,
	className?: string,
	alt? : string,
	status_indicator?: {online: boolean}  ,
};

function AvatarImage({src = "", className = "", alt = "", status_indicator = null, ...rest}: AvatarImageProps) {


	const status_color = {
		true : "bg-primary",
		false: "bg-gray-400"
	}

	return (
		<div className="relative">
			{status_indicator && (
				<span
					className={twMerge(`w-4 h-4 bg-gray-400 ${typeof status_indicator !== "boolean" &&  status_color[String(status_indicator?.online)] } border-2 border-white absolute rounded-full -right-1 -top-1`)}></span>
			)}
			<img
				src={src}
				className={twMerge(`rounded-lg w-full aspect-square bg-center bg-cover ${className}`)}
				alt={alt}
				{...rest}
			/>
		</div>
	);
}

export default AvatarImage;
