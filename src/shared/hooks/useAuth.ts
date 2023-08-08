import { UserContext } from "@context";
import { useContext } from "react";
import { Login as LoginUser, Signup as SignupUser } from "../api";
import { QUERY_KEYS } from "@utils";
import useLocalStorage from "./useLocalStorage";
import { router } from "@shared/router";


const useAuth = () => {
	const { user , setUser }  = useContext(UserContext);
	const { saveToStorage, removeFromStorage } = useLocalStorage();

	const Login = async (email: string, password: string) => {
		return LoginUser(email, password).then((r) => {
			if (!r.error) {
				delete r.password
				setUser(r);
				saveToStorage(QUERY_KEYS.user_data, r)
					.then((res) => {
						router.push("/");
					})
					.catch((e) => {
						alert("An error occurred while saving to storage");
						console.log("error-saving-to-storage", e);
					});
			} else {
				console.log(r.error);
				return new Error(r.error);
			}
		});
	};

	const Signup = async (data: { password: string; first_name: string; last_name: string; matric_number: string }) => {
		return SignupUser(data).then((r) => {
			if (!r.error) {
				setUser(r);
				saveToStorage(QUERY_KEYS.user_data, r).then((r) => {
					router.push("/complete-registration");
				});
			} else {
				//TODO: Display error with toast
				console.log(r.error);
			}
		});
	};

	const loggingOut = () => {

		removeFromStorage(QUERY_KEYS.user_data)
		setUser(null);
		//router.push("/login");
		window.location.replace("/login");
		//TODO: Display logout success with toast

	};

	const Logout = (options: { confirm?: boolean } = { confirm: true }) => {
		if (options?.confirm) {
			confirm("Are you sure you want to logout?") == true ? loggingOut() : console.log("Logout cancelled!");
		} else loggingOut();
	};

	return {
		Login,
		Logout,
		Signup,
		user,
		setUser,
	};
};

export default useAuth;
