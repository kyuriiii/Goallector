const { User, UserInfo } = require("../model");
const crypto = require("crypto");

exports.get_login = (req,res) => {
    res.render("user/login");
}
exports.post_login = async (req,res) => {
    let user = await User.findOne({where: {nickname: req.body.nickname}});
    if ( user != null ) {
        let pw = crypto.createHash("sha512").update(req.body.password + user.salt).digest("hex");
        if ( user.password == pw ) {
            req.session.user_id = user.id;
            res.send({return: true, user: user });
            return true;
        } 
    }
    res.send({return: false, msg: process.env.ERR_MSG_LOGIN_FAIL});
}
exports.get_register = (req,res) => {
    res.render("user/register");
}
exports.post_register = async (req,res) => {
    let user = await User.findOne({where: {nickname: req.body.nickname}});
    if ( user != null ) res.send({return: false, msg: process.env.ERR_MSG_DUPLICATED});

    let salt = Math.round((new Date().valueOf() * Math.random())) + "";
    let newUser = {
        nickname: req.body.nickname,
        password: crypto.createHash("sha512").update(req.body.password + salt).digest("hex"),
        gender: req.body.gender,
        salt
    }
    await User.create(newUser)
        .then((user) => { req.session.user_id = user.id; res.send({return: true, user: user}); });   
}

exports.get_user_info = async (req, res) => {
    let user = await User.findOne({
        where: { id: req.session.user_id },
        include: [{ model: UserInfo }],
        group: [ `${process.env.DB_TABLE_USER}.ID` ],
        required: false
    });

    res.render("user/info", user);
}
exports.patch_user_info = async (req,res) => {
    let info = await UserInfo.findOne({where: {user_id: req.session.user_id}});

    if ( info == null ){
        
    }
}