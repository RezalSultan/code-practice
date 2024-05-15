const express = require("express");
const app = express();
const port = 8000;
const db = require("./config/database");

app.use(express.json()).use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.send("Hello Worl");
});

app.get("/users", (req, res) => {
	res.send("Read!");
});

app.post("/users", (req, res) => {
	console.log(req.body);
	if (req.body.name) {
		console.log("Berhasil mendapatkan nama : " + req.body.name);
	}
	res.send("Create!");
});

app.put("/users", (req, res) => {
	res.send("Update!");
});

app.delete("/users", (req, res) => {
	res.send("Delete!");
});

// cara callback
// app.get("/data", (req, res) => {
// 	db.query("SELECT * FROM employee", (err, results) => {
// 		console.log(results);
// 	});
// });

// cara promise
app.get("/data", async (req, res) => {
	try {
		const [results, fields] = await db.query("SELECT * FROM employee");

		console.log(results);
		console.log(fields);
		res.json(results);
	} catch (error) {
		console.log(error);
	}
});

app.listen(port, () => {
	console.log(`Server has been running in  http://localhost:${port}`);
});
