const { User } = require("../model");
exports.checkSession = async (req,res,next) => {
    if ( req.session.userId == undefined || req.session.userId == "" ) {
        req.user = null;
        next();
    } else {
        let user = await User.findOne({where: {id: req.session.userId}});
        req.user = await {
            id: user.id,
            nickname: user.nickname,
            gender: user.gender
        };
        await next();
    }
}