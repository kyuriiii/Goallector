const { User, UserInfo } = require("../model");
const crypto = require("crypto");

exports.get_login = (req,res) => {
    res.render("user/login");
}
exports.post_login = async (req,res) => {
    let user = await User.findOne({where: {nickname: req.body.nickname}});
    if ( user != null ) {
        const verifyPassword = (password, salt, userPassword) => {
            const hashed = crypto.pbkdf2Sync(password, salt, 10, 64, 'sha512').toString('base64');
        
            if ( hashed === userPassword ) return true;
            return false;
        }
        if ( verifyPassword(req.body.password, user.salt, user.password) ) {
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

    const createHashedPassword = (password) => {
        const salt = crypto.randomBytes(64).toString('base64');
        const hashed = crypto.pbkdf2Sync(password, salt, 10, 64, 'sha512').toString('base64');
    
        return { hashed, salt };
    }
    let result = createHashedPassword(req.body.password);
    let newUser = {
        nickname: req.body.nickname,
        password: result.hashed,
        gender: req.body.gender,
        salt: result.salt
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
exports.patch_user_info = (req,res) => {
    let obj = {
        birth: req.body.birth,
        user_id: req.session.user_id,
        contact: req.body.contact,
        address: req.body.address,
        job: req.body.job
    };
    UserInfo.findOrCreate({
        obj,
        where: {user_id: req.session.user_id},
        defaults: obj
    }).then((info) => {
        if ( info[1] ) res.send({return: true, info: info[0]});
        else res.send({return:false, msg: process.env.ERR_MSG_RELOGIN });
    });
}
exports.logout = (req,res) => {
    if ( req.session.user ) {
        req.session.destroy( function(err){
            if ( err ) console.log( err );
            else res.send( true );
        });
    }
}