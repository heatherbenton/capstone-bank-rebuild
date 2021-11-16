import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import useUsers from "../store/users";

export default function CreateAccount({ setPopUp }) {
	const addUser = useUsers((state) => state.addUser);
	const history = useHistory();

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		onSubmit: async (values) => {
			try {
				const { email, password } = values;
				console.log("vals==>>", values);
				let token = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
					method: "post",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ email, password }),
				});
				token = await token.json();
				localStorage.setItem("token", token);
				addUser({
					email,
					password,
				});
				formik.setValues({
					email: "",
					password: "",
				});
				console.log("tok==>>>", token);
				let userAccounts = await fetch(
					`${process.env.REACT_APP_API_URL}/account/count`,
					{
						headers: {
							jwt: token// `Bearer ${token}`,
						},
					}
				);
				userAccounts = await userAccounts.json();
				if (userAccounts.accountsOpened) {
					history.push("/deposit");
				} else {
					history.push("/account");
				}
			} catch (err) {
				console.log("an errr==>>", err);
			}
		},
	});

	const [disabled, setDisabled] = useState(true);

	useEffect(() => {
		if (formik.values.email && formik.values.password) setDisabled(false);
		else setDisabled(true);
	}, [formik.values]);

	return (
		<div className="flex justify-center">
			<form
				onSubmit={formik.handleSubmit}
				className="flex flex-col space-y-1 bg-orange-100 rounded-lg p-6 m-12"
			>
				<h3 className=" flex flex-col space-y-1 bg-orange-100 rounded-lg p-6text-lg font-semibold">
					Login to your Account
				</h3>
				<div className="flex flex-col">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						onChange={formik.handleChange}
						value={formik.values.email}
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						name="password"
						onChange={formik.handleChange}
						value={formik.values.password}
					/>
				</div>
				<button
					type="submit"
					disabled={disabled}
					className={`rounded bg-cyan-700 py-2 font-semibold ${
						disabled && "text-gray-50"
					}`}
				>
					Login!
				</button>
			</form>
		</div>
	);
}
