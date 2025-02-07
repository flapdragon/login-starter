import passport from "passport"
import { Strategy } from "passport-local"
import userModel from "../user/userModel.js"

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  try {
    const findUser = await userModel.findOne({ _id: id })
    if (!findUser) {
      throw new Error("Invalid credentials")
    }
    done(null, findUser)
  }
  catch (err) {
    done(err, null)
  }
})

export default passport.use(
  new Strategy({ usernameField: "email" }, async (username, password, done) => {
    try {
      const findUser = await userModel.findOne({ email: username })
      if (!findUser) {
        throw new Error("Invalid credentials")
      }
      if (findUser.password !== password) {
        throw new Error("Invalid credentials")
      }
      done(null, findUser)
    }
    catch (err) {
      done(err, null)
    }
  })
)