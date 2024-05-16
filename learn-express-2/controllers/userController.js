const db = require("../config/database");

const test = (req, res) => {
	res.send("Hello World");
};

const getAllUsers = async (req, res, next) => {
	try {
		const [results] = await db.query("SELECT * FROM users");

		res.status(200).json({
			payload: {
				message: "berhasil mengambil semua data user",
				datas: results,
			},
		});
	} catch (error) {
		next(error);
	}
};

const addUser = async (req, res) => {
	try {
		const { email, fullname, gender } = req.body;
		const [results] = await db.query(
			`INSERT INTO users (email,fullname, gender) VALUES ('${email}', '${fullname}', '${gender}')`
		);
		console.log(results);

		res.status(201).json({
			payload: {
				message: "berhasil menambah data user",
				datas: {
					id: results.insertId,
					email: email,
					fullname: fullname,
					gender: gender,
				},
			},
		});
	} catch (error) {
		console.log(error);
	}
};

const updateUser = async (req, res) => {
	try {
		const { userId } = req.query;
		const { email, fullname, gender } = req.body;
		const [results] = await db.query(
			`UPDATE users SET email = ?, fullname = ?, gender = ? WHERE id = ?`,
			[email, fullname, gender, userId]
		);
		console.log(results);

		res.status(201).json({
			payload: {
				message: "berhasil mengubah data user dengan id : " + userId,
				datas: {
					id: userId,
					email: email,
					fullname: fullname,
					gender: gender,
				},
			},
		});
	} catch (error) {
		console.log(error);
	}
};

const deleteUser = async (req, res) => {
	try {
		const { userId } = req.params;
		const [results] = await db.query(`DELETE FROM users WHERE id = ?`, [
			userId,
		]);
		console.log(results);

		res.status(200).json({
			payload: {
				message: "berhasil menghapus data user",
			},
		});
	} catch (error) {
		console.log(error);
	}
};

module.exports = { test, getAllUsers, addUser, updateUser, deleteUser };
