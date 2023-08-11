import DoctorPrescribtionCard from "./views/StudentInforCard";
import StudentInfoCard from "./views/StudentInfoCard";


function Pharmacy({}) {
	return (
		<div className="flex w-full p-8 md:p-4 h-fit pb-16 min-h-[80vh] flex-col gap-6 flex-grow">
			<section className="w-full gap-6 flex flex-col md:flex-row h-full ">
				<div className="w-full md:w-[30%] h-fit gap-6 flex flex-col">
					<DoctorPrescribtionCard />
				</div>

				<div className="w-full md:w-[70%] flex flex-grow min-h-full">
					<StudentInfoCard />
				</div>
			</section>
		</div>
	);
}

export default Pharmacy;