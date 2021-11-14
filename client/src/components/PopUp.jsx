import React, { useState } from "react";
import { Redirect } from "react-router";

export default function PopUp({ setPopUp, title, message }) {
	const [redirect, setRedirect] = useState(false);

	const handleYes = () => {
		setPopUp(false);
	};

	const handleNo = async () => {
		await setRedirect(true);
		setPopUp(false);
	};

	return (
		<div className="absolute w-full h-full border-2 flex justify-center items-center">
			<div className="flex flex-col py-4 h-auto w-1/4 text-center border-4 border-black bg-white">
				<h2 className="text-3xl font-bold">{title}</h2>
				<span>{message}</span>
				<div className="flex justify-center space-x-4">
					<button
						onClick={handleNo}
						className="p-2 font-light w-1/5 text-white bg-cyan-700"
					>
						No
					</button>
					<button
						onClick={handleYes}
						className="p-2 font-light w-1/5 text-white bg-cyan-700"
					>
						Yes
					</button>
				</div>
			</div>
			{redirect && <Redirect to="/" />}
		</div>
	);
}
