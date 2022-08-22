const express = require("express");
const ctr = require("../controller/userController");
const router = express.Router();

router.get('/register', ctr.get_register);
router.post('/register', ctr.post_register);
router.get('/login', ctr.get_login);
router.post('/login', ctr.post_login);

module.exports = router;