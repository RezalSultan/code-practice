const { usersTbl } = require("../models/userModel");

const executeTbl = async () => {
	try {
		await usersTbl();
	} catch (error) {
		console.log("Execute table failed : " + error);
	}
};

module.exports = executeTbl;
