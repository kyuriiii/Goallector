const express = require("express");
const dotenv = require("dotenv")
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({extended: true}));
app.use( bodyParser.json() );

dotenv.config({ path: path.join(__dirname, "./config/envs/common.env") });
dotenv.config({ path: path.join(__dirname, `./config/envs/${process.env.NODE_ENV}.env`) });

const router = require("./routes");
const userRouter = require("./routes/userRouter");
const mainRouter = require("./routes/mainRouter");
const goalRouter = require("./routes/goalRouter");
app.use(router.MAIN, mainRouter);
app.use(router.USER, userRouter);
app.use(router.GOAL, goalRouter);

app.listen(process.env.PORT, ()=>{
    console.log( "Server Port : ", process.env.PORT );
});