const express = require("express");
const ctr = require("../controller/MainController");
const util = require("../util/utilTools");
const router = express.Router();

router.use("*", util.verifySession);
router.get("/", ctr.index);
router.get("/calendar", ctr.calendar);
router.get("/calendar2", ctr.calendar2);

module.exports = router;