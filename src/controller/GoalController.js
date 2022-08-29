const { Goal, GoalRepeat, GoalTemp } = require("../model");

exports.post_goal = (req,res) => {
    let goal = {
        title: req.body.title,
        detail: req.body.detail,
        mode: req.body.mode,
        user_id: req.user.id,
        type: "daily"
    };
    Goal.create(goal)
        .then((goal) => {
            res.send({return: true, goal});
        });
}