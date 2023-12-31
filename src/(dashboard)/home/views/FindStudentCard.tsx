import CardLayout from "@ui/CardLayout.tsx";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { GetStudentInfo } from "@api";
import AvatarImage from "@ui/AvatarImage.tsx";
import { Link } from "react-router-dom";
import FormInput from "@ui/forms/FormInput.tsx";
import {Search} from "react-iconly";
import CustomButton from "@ui/forms/CustomButton.tsx";
import IconStyled from "@ui/IconStyled.tsx";
import {COLORS} from "@utils";

function FindStudentCard({}) {
	const [loading, setLoading] = useState(false);

	const {
		register,
		handleSubmit,
		watch,
		control,
		formState: { errors },
	} = useForm();

	const [student, setStudent] = useState(null);
	const [error, setError] = useState(null);

	const findStudent = (data) => {
		setLoading(true);

		//console.log(data);
		GetStudentInfo(data?.matric_number)
			.then((res) => {
				console.log(res);
				res.error ? setError(res.error) : setStudent(res);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setError(err);
				setLoading(false);
			});
	};

	return (
		<CardLayout className="w-full h-full justify-between">

			<div className="flex justify-between">

				<IconStyled icon={"MagnifyingGlassIcon"} color={COLORS.secondary} />

			</div>

			<div className="flex flex-col gap-2 py-12 md:px-36 w-full items-center">

				<p className="text-2xl md:text-center font-outfit font-bold">
					Find Student Health Centre Information
				</p>

				<p className="w-full md:text-center text-gray-500">
					Retrieve the health centre details of a student from the database by entering their Matric Number:
				</p>

				<form onSubmit={handleSubmit(findStudent)} className="max-w-[389px] my-8 w-full gap-2 flex flex-col">
					<FormInput
						register={register("matric_number")}
						startIcon={<Search />}
						placeholder="Find Student by matric number"
					/>

					<CustomButton loading={loading} className="w-full py-3">
						Find Student
					</CustomButton>
				</form>

				{student && <StudentCard studentData={student} />}
			</div>
		</CardLayout>
	);
}

type StudentCardProps = {
	studentData: {
		user_id: string;
		student: any;
		personal_info: {
			profile_image: string;
			first_name: string;
			last_name: string;
			gender? : string;
			date_of_birth? : string;
		};
	};
};

const StudentCard = ({ studentData }: StudentCardProps) => {
	const { user_id, student, personal_info } = studentData || {};

	return (
		<div className="flex flex-col gap-2 w-full">
			<p>Found Student:</p>
			<Link to={`/students?matric_number=${user_id}`}>
				<div className="w-full h-[10vh] border border-bg-50 transition duration-300 hover:border-primary bg-bg-50 rounded-lg p-4 gap-2 flex">
					<AvatarImage src={personal_info?.profile_image} className="h-full" />
					<div className="w-[80%] gap-2 flex-col">
						<p className="font-outfit text-xl font-medium">
							{personal_info?.first_name} {personal_info?.last_name}
						</p>
						<span className="flex gap-2">
							<p className="text-gray-500 text-sm">{user_id.toUpperCase()}</p>
							<p className="text-gray-500 text-sm">{student?.department}</p>
						</span>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default FindStudentCard;
