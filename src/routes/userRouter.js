const express = require("express");
const ctr = require("../controller/userController");
const util = require("../util/utilTools");
const router = express.Router();

router.get('/register', ctr.get_register);
router.post('/register', ctr.post_register);
router.get('/login', ctr.get_login);
router.post('/login', ctr.post_login);

router.use("*", util.checkSession);
router.get('/info',  ctr.get_user_info);
router.patch("/info", ctr.patch_user_info);
router.get('/logout', ctr.logout);

module.exports = router;