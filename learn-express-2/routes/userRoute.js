const express = require("express");
const router = express();

const {
	test,
	getAllUsers,
	addUser,
	updateUser,
	deleteUser,
} = require("../controllers/userController");

router.get("/", test);
router.get("/users", getAllUsers);
router.post("/users", addUser);
router.put("/users", updateUser);
router.delete("/users/:userId", deleteUser);

module.exports = router;
