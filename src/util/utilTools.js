const { User } = require("../model");
exports.verifySession = async (req, res,next) => {
    if ( req.session.user_id == undefined || req.session.user_id == "" ) {
        req.user = null;
        next();
    } else {
        let user = await User.findOne({where: {id: req.session.user_id}});
        req.user = await {
            id: user.id,
            nickname: user.nickname,
            gender: user.gender
        };
        await next();
    }
}
exports.checkSession = (req,res,next) => {
    if ( req.session.user_id == undefined || req.session.user_id == "" ) res.redirect("/user/login");
    else this.verifySession(req,res, next);
}