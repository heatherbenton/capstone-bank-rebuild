import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
	return (
		<navbar>
			<h2 className="text-left text-cyan-700 p-2">Third Coast Bank</h2>
			<div className="flex flex-row items-stretch justify-around bg-cyan-700 font-light text-white mb-3">
				<NavLink
					to="/"
					className="p-2 hover:bg-cyan-400"
					exact
					activeClassName="bg-cyan-600"
				>
					Home
				</NavLink>

				<NavLink
					to="/register"
					className="p-2 hover:bg-cyan-400"
					exact
					activeClassName="bg-cyan-600"
				>
					Register
				</NavLink>

				<NavLink
					to="/deposit"
					className="p-2 hover:bg-cyan-400"
					exact
					activeClassName="bg-cyan-600"
				>
					Deposit
				</NavLink>

				<NavLink
					to="/withdraw"
					className="p-2 hover:bg-cyan-400"
					exact
					activeClassName="bg-cyan-600"
				>
					Withdraw
				</NavLink>

				<NavLink
					to="/all-data"
					className="p-2 hover:bg-cyan-400"
					exact
					activeClassName="bg-cyan-600"
				>
					All Data
				</NavLink>
			</div>
		</navbar>
	);
}
