// Cara Callback
// const mysql = require("mysql2");

// const db = mysql.createConnection({
// 	host: "localhost",
// 	user: "root",
// 	port: "4306",
// 	database: "pt_sejahtera",
// 	password: "",
// });

// db.connect((err) => {
// 	if (err) {
// 		console.log(err);
// 		return;
// 	}
// 	console.log("Connect to Database with ID" + db.threadId);
// });

// Cara Promise
const mysql = require("mysql2/promise");

const db = mysql.createPool({
	host: "localhost",
	user: "root",
	port: "4306",
	database: "pt_sejahtera",
	password: "",
});

db.getConnection()
	.then(() => console.log("Database connected successfully"))
	.catch((err) => console.error("Database connection failed:" + err));

module.exports = db;
