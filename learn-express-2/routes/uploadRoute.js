const express = require("express");
const router = express();

const { uploadFile } = require("../controllers/uploadController");

router.post("/upload", uploadFile);

module.exports = router;
