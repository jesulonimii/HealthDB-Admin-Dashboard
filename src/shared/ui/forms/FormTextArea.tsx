import {twMerge} from "tailwind-merge";

const FormTextArea = (props) => {
	const { className = "", label, register } = props;

	const textFieldClass =
		"bg-gray-300 h-32 my-2 border border-gray-400 dark:border-0 autofill:bg-gray-500 p-4 outline-0 focus:ring-2 ring-primary transition-200 font-outfit bg-opacity-20 rounded-lg w-full";

	if (label)
		return (
			<div className="w-full">
				<p className="font-medium font-outfit text-black dark:text-gray-500">{label}</p>
				<textarea {...props} {...register} className={twMerge(`${textFieldClass} ${className}`)} />
			</div>
		);
	else
		return (
			<>
				<textarea {...props} {...register} className={twMerge(`${textFieldClass} ${className}`)} />
			</>
		);
};


export default FormTextArea;