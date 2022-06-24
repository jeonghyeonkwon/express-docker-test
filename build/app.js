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
})
    .catch(() => {
    console.log("에러");
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", userRouter_1.default);
app.listen(port, () => {
    console.log(`http://localhost:${port} NODE-ENV ${process.env.NODE_ENV} MYSQL ${process.env.MYSQL_DATABASE} ${process.env.MYSQL_PASSWORD} `);
});
