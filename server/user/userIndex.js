import { Router } from "express"
import userCreate from "./userCreate.js"

const userRouter = Router()

userRouter.post("/", userCreate)

export default userRouter