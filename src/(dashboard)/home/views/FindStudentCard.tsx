import CardLayout from "@ui/CardLayout.tsx";
import FormInput from "@ui/forms/FormInput.tsx";
import CustomButton from "@ui/forms/CustomButton.tsx";
import {Search} from "react-iconly";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {GetUserInfo} from "@shared/api";
import AvatarImage from "@ui/AvatarImage.tsx";
import {Link} from "react-router-dom";

function FindStudentCard({}) {
	const [loading, setLoading] = useState(false);

	const {
		register,
		handleSubmit,
		watch,
		control,
		formState: {errors},
	} = useForm();

	const [student, setStudent] = useState(null);
	const [error, setError] = useState(null);

	const findStudent = (data) => {
		setLoading(true);

		console.log(data);
		GetUserInfo(data?.matric_number)
			.then((res) => {
				console.log(res);
				res.error ? setError(res.error) : setStudent(res);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				alert(err);
				setError(err);
				setLoading(false);
			});
	};

	return (
		<CardLayout className="w-full h-full p-36 gap-2 items-center">
			<p className="text-2xl font-outfit font-bold">Find Student</p>

			<p className="w-full text-center text-gray-500">
				Retrieve the details of a student from the database by entering their Matric Number:
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
		};
	};
};

const StudentCard = ({studentData}: StudentCardProps) => {
	const {user_id, student, personal_info} = studentData || {};

	return (
		<div className="flex flex-col gap-2 w-full">
			<p>Found Student:</p>
			<Link to={`/students?search=${user_id}`}>
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
