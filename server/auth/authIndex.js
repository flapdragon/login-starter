import { Router } from "express"
import passport from "passport"
import authLogin from "./authLogin.js"
import authStatus from "./authStatus.js"
import authLogout from "./authLogout.js"

const authRouter = Router()

authRouter.post("/login", passport.authenticate("local"), authLogin)
authRouter.get("/status", authStatus)
authRouter.post("/logout", authLogout)

export default authRouter