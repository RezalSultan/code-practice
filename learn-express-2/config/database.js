require("dotenv").config();
const mysql = require("mysql2/promise");

const db = mysql.createPool({
	host: `${process.env.HOST}`,
	user: `${process.env.USER}`,
	password: `${process.env.PASS}`,
	database: `${process.env.DATABASE}`,
	port: process.env.PORTDB,
});

db.getConnection()
	.then(() => console.log("Database connected successfully"))
	.catch((err) => console.log("Database connection failed : " + err));

module.exports = db;
