import React, { useEffect, useState } from "react";
import ReactJson from "react-json-view";
import useUsers from "../store/users";

export default function AllData() {
	const [userProfile, setUserProfile] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				let profile = await fetch(`${process.env.REACT_APP_API_URL}/profile`, {
					headers: {
						jwt: localStorage.getItem("token"),
					},
				});
				profile = await profile.json();
				console.log('user-pp===>>', profile)
				setUserProfile(profile);
			} catch (err) {
				console.log('an error==>>', err);
			}
		})();
	}, []);

	//const users = useUsers((state) => state.users);
	const deleteAll = useUsers((state) => state.deleteAllUsers);

	return (
		<div>
			<ReactJson src={userProfile} displayDataTypes={false} />
			<button onClick={deleteAll} className="rounded bg-orange-100 p-2">
				Delete All Data
			</button>
		</div>
	);
}
