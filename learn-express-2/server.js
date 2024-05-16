require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const executeTbl = require("./config/index");
const path = require("path");

const loggerMiddleware = require("./middleware/logger");
const handlerError = require("./middleware/handlingError");
const routerAPI = require("./routes/index");

executeTbl();
app.use(express.json()).use(express.urlencoded({ extended: true }));
app.use("/public", express.static(path.join(__dirname, "public")));

app.use(loggerMiddleware);
app.use(routerAPI);
app.use(handlerError);

app.listen(PORT, () => {
	console.log(`Server has been running in http://localhost:${PORT}`);
});
