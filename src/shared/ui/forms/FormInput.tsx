import {twMerge} from "tailwind-merge";
import React from "react";

type FormInputProps = React.ComponentProps<"input"> & {
	className?: string;
	register?: any;
	startIcon?: any;
	endIcon?: any;
	iconClick?: any;
	label?: any;
	description?: string;
};

const FormInput = (props: FormInputProps) => {
	const {className = "", startIcon, endIcon, iconClick, label, register, description, ...rest} = props;

	const textFieldClass = `bg-bg-main text-black dark:text-gray-400 my-2 dark:autofill:bg-gray-900 autofill:bg-gray-500 p-3 ${
		startIcon && "pl-12"
	} ${
		endIcon && "pr-12"
	} outline-0 focus:ring-2 border border-gray-200 dark:border-0 ring-primary transition-200 font-poppins bg-opacity-20 rounded-lg w-full`;



	if (label)
		return (
			<div className="my-4 w-full">
				<div className="flex gap-2">
					<p className="font-poppins font-medium text-black dark:text-gray-500">{label}</p>
					{description && <em className="font-poppins text-gray-500 dark:text-gray-700">(*{description})</em>}
				</div>
				<div className="relative flex w-full items-center">
					<div
						className={`absolute left-4 h-6 w-6 text-gray-400 ${
							iconClick && "hover:text-primary cursor-pointer"
						}`}
						onClick={iconClick}>
						{startIcon}
					</div>
					<input
						type="text"
						{...rest}
						{...register}
						required
						className={twMerge(`${textFieldClass} ${className}`)}
					/>
					<div
						className={`absolute right-4 h-6 w-6 text-gray-400 transition ${
							iconClick && "hover:text-primary cursor-pointer"
						}`}
						onClick={iconClick}>
						{endIcon}
					</div>
				</div>
			</div>
		);
	else
		return (
			<div className="relative flex w-full items-center">
				<div
					className={`absolute left-4 h-6 w-6 text-gray-400 ${
						iconClick && "hover:text-primary cursor-pointer"
					}`}
					onClick={iconClick}>
					{startIcon}
				</div>
				<input
					type="text"
					{...rest}
					{...register}
					required
					className={twMerge(`${textFieldClass} ${className}`)}
				/>
				<div
					className={`absolute right-4 h-6 w-6 text-gray-400 transition ${
						iconClick && "hover:text-primary cursor-pointer"
					}`}
					onClick={iconClick}>
					{endIcon}
				</div>
			</div>
		);
};

export default FormInput;
