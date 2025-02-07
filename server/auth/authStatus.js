const authStatus = (req, res) => {
  console.log("req.user", req.user)
  if (!req.user) {
    res.status(401).json({ message: "Not authenticated." })
  }
  else {
    res.status(200).json({ message: "You did it!" })
  }
}

export default authStatus