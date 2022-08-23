const express = require("express");
const ctr = require("../controller/mainController");
const router = express.Router();

router.get("/", ctr.index);
router.get("/calendar", ctr.calendar);
router.get("/calendar2", ctr.calendar2);

module.exports = router;