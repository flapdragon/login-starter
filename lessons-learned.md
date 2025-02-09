express-session is only for SSR, server side rendering, like handlerbars, but not MERN
express-session is required though, for passport, regardless if you actually
JWT is the most common and least annoying way to handle authentication in MERN/React
We use local strategy for users in our own database
We use jwt strategy once a user is logged in, to verify them
We use passport.authenticate("jwt", { session: false }) middleware for the routes we want to protect
  Example: userRouter.post("/", passport.authenticate("jwt", { session: false }), userCreate)
On the frontend, we include the token in the request header for API calls that require authentication
  Example:
    const response = await axios.get(
      `${import.meta.env.VITE_API_SERVER_URL}/auth/status`,
      { withCredentials: true, headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }}
    )
In React protected or private routes, you can't use async. React will thrown an error and also you could get an infinite loop. To verify login, use a state manager or other library, outside of the private route. The private route just waits on the state.
To have more control over the password and username fields, don't use the passport-local-mongoose plugin.