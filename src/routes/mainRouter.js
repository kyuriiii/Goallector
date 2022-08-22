const express = require("express");
const ctr = require("../controller/mainController");
const util = require("../util/utilTools");
const router = express.Router();

router.use("*", util.checkSession);
router.get("/", ctr.index);

module.exports = router;