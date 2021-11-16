// Import the User model
const User = require("../models/user");
//const handleErrors = require("../to-be-deleted");
const { createToken } = require("../middlewares/jwt");

// we've got a fresh new account signup!
const signup_get = (req, res) => {
	res.status(200).json({ message: "Sign up!" });
};

const signup_post = async (req, res) => {
	const { email, password, name } = req.body;
	const totalBalance = 0;

	try {
		// create new user account
		const user = await User.create({ email, password, name, totalBalance });
		console.log("...", user);

		// new user secret token
		const token = await createToken(user._id);

		// final response to front end
		res.status(200).json(user);
	} catch (err) {
// 		const errors = handleErrors(err);
		console.log("backend", err);
		res
			.status(400)
			.json({ message: "You may have already signed up with us!" });
	}
};

// user login
const login_get = (req, res) => {
	res.status(200).json({ messaage: "login here" });
};

const login_post = async (req, res) => {
	const { email, password } = req.body;

	try {
		// uses the static function login() to locate user in database and return it
		const user = await User.login(email, password);

		if (user.message === "invalid credentials") {
			res.status(400).json(user);
		}

		// create a token with jwt
		const token = await createToken(user["_id"]);

		// final response to front end
		res.status(200).json(user);
	} catch (err) {
		// const errors = handleErrors(err);
		res.status(400).json({ errors: err });
	}
};

// logout
const logout_get = (req, res) => {
	res.cookie("jwt", "", { maxAge: 1 });
	res.status(200).json({ message: "you are now logged out" });
};

module.exports = {
	signup_get,
	signup_post,
	login_get,
	login_post,
	logout_get,
};
