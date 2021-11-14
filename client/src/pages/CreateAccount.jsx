import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import useUsers from "../store/users";

export default function CreateAccount({ setPopUp }) {
	const addUser = useUsers((state) => state.addUser);

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
		},
		onSubmit: (values) => {
			addUser({
				name: values.name,
				email: values.email,
				password: values.password,
			});
			setPopUp({
				title: "Success!",
				message: "Would you like to add an additional account?",
			});
			formik.setValues({
				email: "",
				name: "",
				password: "",
			});
		},
	});

	const [disabled, setDisabled] = useState(true);

	useEffect(() => {
		if (formik.values.name && formik.values.name && formik.values.password)
			setDisabled(false);
		else setDisabled(true);
	}, [formik.values]);

	return (
		<div className="flex justify-center">
			<form
				onSubmit={formik.handleSubmit}
				className="flex flex-col space-y-1 bg-orange-100 rounded-lg p-6 m-12"
			>
				<h3 className=" flex flex-col space-y-1 bg-orange-100 rounded-lg p-6text-lg font-semibold">
					Create a New Account
				</h3>

				<div className="flex flex-col">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						id="name"
						name="name"
						onChange={formik.handleChange}
						value={formik.values.name}
					/>
				</div>
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
					Sign up!
				</button>
			</form>
		</div>
	);
}
