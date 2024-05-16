const upload = require("../middleware/multer");

const uploadFile = (req, res) => {
	upload(req, res, (err) => {
		if (err) {
			return res.status(400).send({ message: err.message });
		}
		res.status(201).json({
			payload: {
				message: "Berhasil mengupload file",
				file: req.file,
			},
		});
	});
};

module.exports = {
	uploadFile,
};
