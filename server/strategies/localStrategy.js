import passport from "passport"
import { Strategy } from "passport-local"

export default passport.use(
  new Strategy({ usernameField: "email" }, (username, password, done) => {
    console.log("username", username, "password", password)
    try {
      // const findUser = userModel.findOne({ email: username })
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