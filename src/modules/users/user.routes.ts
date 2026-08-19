import express from "express"
import { getUser } from "./user.controller"

export const userRouter = express.Router()

userRouter.get('/',getUser)