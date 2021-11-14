import create from "zustand";

const changeBalanceVoid = (users, userEmail, amount, isWithdraw) => {
	let negative = isWithdraw ? -1 : 1;
	let localUsers = [...users];

	for (let i in localUsers) {
		if (localUsers[i].email === userEmail) {
			console.log(localUsers[i]);
			localUsers[i].balance += amount * negative;
		}
	}
	return localUsers;
};

const useUsers = create((set) => ({
	users: [],
	loadUsers: (users) => set((state) => ({ users: users })),
	addUser: (user) =>
		set((state) => ({ users: [...state.users, { ...user, balance: 0 }] })),
	changeBalance: (userEmail, amount, isWithdraw) =>
		set((state) => ({
			users: changeBalanceVoid(state.users, userEmail, amount, isWithdraw),
		})),
	deleteAllUsers: () => set((state) => ({ users: [] })),
}));

export default useUsers;
