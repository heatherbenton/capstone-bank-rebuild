const { Router } = require("express");
const { verifyUser } = require('../middlewares/jwt');
const {
	account_post,
	account_deposit,
	account_withdraw,
	account_close,
	account_get_all,
	account_get_count
} = require("../controllers/account");

const router = Router();

router.get("/account/all", verifyUser, account_get_all);

router.get("/account/count", verifyUser, account_get_count);

router.post("/account/open", verifyUser, account_post);

router.post("/account/deposit", verifyUser, account_deposit);

router.post("/account/withdraw", verifyUser, account_withdraw);

router.post("/account/close", verifyUser, account_close);

module.exports = router;
