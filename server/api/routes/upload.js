const router = require("express").Router();

const { upload } = require("../../config/multerConf");

const { uploadFile } = require("../controller/upload.controller");

router.post("/upload", upload, uploadFile);

module.exports = router;
