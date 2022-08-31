const express = require("express");
const dotenv = require("dotenv")
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const app = express();

if ( process.env.NODE_ENV == undefined ) process.env.NODE_ENV = 'prod';
dotenv.config({ path: path.join(__dirname, `./config/envs/${process.env.NODE_ENV}.env`) });
dotenv.config({ path: path.join(__dirname, "./config/envs/common.env") });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use("/static", express.static( __dirname + "/static"));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
}))

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