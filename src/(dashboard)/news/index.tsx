import FindStudentCard from "@src/(dashboard)/home/views/FindStudentCard.tsx";
import React, { useState } from "react";
import CardLayout from "@ui/CardLayout.tsx";
import FormInput from "@ui/forms/FormInput.tsx";
import FormTextArea from "@ui/forms/FormTextArea.tsx";
import CustomButton from "@ui/forms/CustomButton.tsx";
import { useForm } from "react-hook-form";
import { useAuth } from "@hooks";
import { SendNotification } from "@api";
import toast from "react-hot-toast";
import { PublishNews } from "@shared/api/Admin.api.ts";

function Index({}) {

	const {register, reset, handleSubmit} = useForm()
	const {user}= useAuth()
	const [isLoading, setIsLoading] = useState(false)


	function onSubmit(data: any) {
		setIsLoading(true)

		if (data.image === "") delete data.image

		PublishNews(data).then((res) => {
			setIsLoading(false)
			if (!res?.error){
				console.log(res);
				toast.success("News Published successfully")
				reset()
				setIsLoading(false)
			}
			else alert(res?.error)


		}).catch((err) => {
			console.log(err);
		})

	}

	return (
		<div className="p-12">
			<CardLayout title={`Create News Article`} className="p-8">
				<form onSubmit={handleSubmit(onSubmit)}>
					<FormInput register={register("title")} required placeholder="News Title..." />

					<FormInput type="url" required={false} register={register("image")} placeholder="Image link (not required)" />

					<FormTextArea
						register={register("content")}
						required
						className="h-[40vh]"
						placeholder="Type news details here..."
					/>

					<div className="flex w-full justify-end">
						<CustomButton loading={isLoading} className="mt-2 w-full md:w-[20%] float-right">Publish News</CustomButton>
					</div>
				</form>
			</CardLayout>
		</div>
	)
}

export default Index;