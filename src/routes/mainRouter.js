const express = require("express");
const ctr = require("../controller/mainController");
const router = express.Router();

router.get("/", ctr.index);
router.get("/2", ctr.index2);

module.exports = router;