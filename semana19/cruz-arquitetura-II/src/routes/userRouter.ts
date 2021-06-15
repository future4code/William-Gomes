import express from "express";
import {signup} from '../controller/user/signup'
import {login} from '../controller/user/login'

export const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);