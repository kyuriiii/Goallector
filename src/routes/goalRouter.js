const express = require("express");
const ctr = require("../controller/goalController");
const router = express.Router();

router.post("/write", ctr.post_goal);

module.exports = router;