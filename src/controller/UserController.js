const { User, UserInfo } = require("../model");

exports.get_login = (req,res) => {
    res.render("/user/login");
}
exports.post_login = async (req,res) => {
    let user = await User.findOne({where: {nickname: req.body.nickname}});
    if ( user != null ) res.send({return: false, msg:ERR_MSG_DUPLICATED});

    let newUser = req.body;
    await User.create(newUser)
        .then((user) => { res.send({return: true, user: user}); });
    
}
exports.get_register = (req,res) => {
    res.render("/user/register");
}
exports.post_register = (req,res) => {
    
}