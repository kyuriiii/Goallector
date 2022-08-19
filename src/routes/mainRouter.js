const express = require("express");
const ctr = require("../controller/mainController");
const router = express.Router();

router.get("/", ctr.index);

module.exports = router;