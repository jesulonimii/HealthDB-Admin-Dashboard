import * as React from "react";
import { useEffect, useState } from "react";
import CardLayout from "@ui/CardLayout.tsx";
import FormInput from "@ui/forms/FormInput.tsx";
import CustomButton from "@ui/forms/CustomButton.tsx";
import Logo from "@ui/Logo.tsx";
import { AtSymbolIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import { useAuth, useLocalStorage } from "@hooks";
import { router } from "@shared/router";
import { QUERY_KEYS } from "@utils";

export default function LoginScreen() {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const { getFromStorage } = useLocalStorage()

	const loggedIn = getFromStorage(QUERY_KEYS.user_data) || null

	const { Login, setUser } = useAuth();

	if (loggedIn) {
		setUser(loggedIn);
		window.location.href = "/"
	}


	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		setIsLoading(true);

		const email = data.email.toLowerCase().trim();
		const password = data.password.trim();

		Login(email, password).then((error) => {
			setIsLoading(false);
			if (error) {
				console.log(error.toString());
				setError(error.toString());
			}
		});
	};

	return (
		<CardLayout className="w-[35%] h-fit min-h-[50vh] items-center justify-center gap-1 p-12">
			<Logo className="w-24 my-4" />
			<h3 className="text-2xl w-[80%] text-center font-outfit font-semibold">
				OAU Health Centre Database System
			</h3>

			<h3 className="text-center mt-8 mb-4 text-gray-700">
				Enter your staff credentials to login to the dashboard.
			</h3>

			{/* @ts-ignore */}
			{error && <p className="bg-red-100 text-center text-red-500 p-4 rounded-lg">{error}</p>}

			<form className="w-full" onSubmit={handleSubmit(onSubmit)}>
				<FormInput
					startIcon={<AtSymbolIcon />}
					placeholder="Enter staff email"
					register={register("email")}
					type="email" />

				<FormInput
					startIcon={<LockClosedIcon />}
					placeholder="Enter Password"
					register={register("password")}
					type="password" />

				<CustomButton loading={isLoading} className="w-full py-4 mt-4">
					{" "}
					Login{" "}
				</CustomButton>
			</form>
		</CardLayout>
	);
}
