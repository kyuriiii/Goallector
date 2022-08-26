const { Goal } = require("../model");

exports.index = async (req,res) => {
    const json = {user: req.user};
    if ( req.user != null ) {
        const daily = await Goal.findAll({where: {user_id: req.user.id}});
        json["daily"] = daily;
    }
    await res.render("main/main", json);
}
exports.calendar = (req,res) => {
    res.render("design/calendar1");
}
exports.calendar2 = (req,res) => {
    res.render("design/calendar2");
}