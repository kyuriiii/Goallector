const { User, UserInfo } = require("../model");

exports.get_login = (req,res) => {
    res.render("user/login");
}
exports.post_login = (req,res) => {

}
exports.get_register = (req,res) => {
    res.render("user/register");
}
exports.post_register = (req,res) => {
    
}