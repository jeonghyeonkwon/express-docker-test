"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const user_1 = require("../models/user");
const router = express.Router();
router.get("/user", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userList = yield user_1.default.findAll();
    return res.status(200).send(userList);
}));
router.post("/user", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, userName } = req.body;
    console.log("userId ", userId, "userName", userName);
    const createUser = yield user_1.default.create({
        userId: userId,
        userName: userName,
    });
    return res.status(201).send(createUser);
}));
exports.default = router;
