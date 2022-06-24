import * as express from "express";
import * as dotenv from "dotenv";
import * as morgan from "morgan";
import userRouter from "./routes/userRouter";
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
app.use("/", userRouter);
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
