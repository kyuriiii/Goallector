const express = require("express");
const ctr = require("../controller/mainController");
const util = require("../util/utilTools");
const router = express.Router();

router.use("*", util.checkSession);
router.get("/", ctr.index);
router.get("/2", ctr.index2);

module.exports = router;