import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Menu from "./components/Menu";

import Home from "./pages/Home";
import Withdraw from "./pages/Withdraw";
import Deposit from "./pages/Deposit";
import CreateAccount from "./pages/CreateAccount";
import CreateUser from "./pages/CreateUser";
import Login from "./pages/Login";
import AllData from "./pages/Profile";

import PopUp from "./components/PopUp";

import useUsers from "./store/users";

function App() {
	const users = useUsers((state) => state.users);
	const loadUsers = useUsers((state) => state.loadUsers);

	const [popUp, setPopUp] = useState(false);

	useEffect(() => {
		const users = JSON.parse(localStorage.getItem("Users"));
		if (users) {
			loadUsers(users);
			return;
		}
		loadUsers([{ name: "admin", email: "admin.t@com", password: "123" }]);
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		localStorage.setItem("Users", JSON.stringify(users));
	}, [users]);

	return (
		<Router>
			{popUp && (
				<PopUp
					setPopUp={setPopUp}
					title={popUp.title}
					message={popUp.message}
				/>
			)}
			<div className="container mx-auto">
				<Menu />
				<Switch>
					<Route path="/withdraw">
						<Withdraw />
					</Route>
					<Route path="/deposit">
						<Deposit />
					</Route>
					<Route path="/register">
						<CreateUser setPopUp={setPopUp} />
					</Route>
					<Route path="/new-account">
						<CreateAccount setPopUp={setPopUp} />
					</Route>
					<Route path="/login" component={Login} />
					<Route path="/profile">
						<AllData />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
