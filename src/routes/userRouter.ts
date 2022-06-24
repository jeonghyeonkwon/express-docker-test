import { Request, Response, NextFunction } from "express";

import * as express from "express";
import User from "../models/user";
const router = express.Router();
router.get("/user", async (req: Request, res: Response, next: NextFunction) => {
  const userList = await User.findAll();
  return res.status(200).send(userList);
});
router.post(
  "/user",
  async (req: Request, res: Response, next: NextFunction) => {
    const { userId, userName } = req.body;
    console.log("userId ", userId, "userName", userName);
    const createUser = await User.create({
      userId: userId,
      userName: userName,
    });
    return res.status(201).send(createUser);
  }
);
export default router;
