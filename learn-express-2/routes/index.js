// menampung semua router yang ada
const express = require("express");
const app = express();
const userRoutes = require("./userRoute");
const uploadRoutes = require("./uploadRoute");

const API = "/api/v1";

app.use(API, userRoutes);
app.use(API, uploadRoutes);

module.exports = app;
