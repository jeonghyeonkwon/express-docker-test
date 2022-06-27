"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const userRouter_1 = require("./routes/userRouter");
dotenv.config();
const app = express();
const { sequelize } = require("./models");
const port = process.env.PORT;
app.use(morgan("dev"));
sequelize
    .sync({ force: true })
    .then(() => {
    console.log("연결 성공");
    console.log(process.env.MYSQL_HOST);
})
    .catch((e) => {
    console.log("에러");
    console.log(process.env.MYSQL_HOST);
    console.log("---------");
    console.error(e);
    process.exit(1);
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", userRouter_1.default);
app.listen(port, () => {
    console.log(`http://localhost:${port} `);
});
