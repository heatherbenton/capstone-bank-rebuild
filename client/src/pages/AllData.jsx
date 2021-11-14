import React from "react";
import ReactJson from "react-json-view";
import useUsers from "../store/users";

export default function AllData() {
	const users = useUsers((state) => state.users);
	const deleteAll = useUsers((state) => state.deleteAllUsers);

	return (
		<div>
			<ReactJson src={users} displayDataTypes={false} />
			<button onClick={deleteAll} className="rounded bg-orange-100 p-2">
				Delete All Data
			</button>
		</div>
	);
}
