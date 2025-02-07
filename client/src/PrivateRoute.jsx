import { useState } from "react"
import { Navigate, Outlet } from "react-router"

const PrivateRoute = () => {
  const [ loading, setLoading ] = useState(false)
  // const dispatch = useDispatch()

  // const token = sessionStorage.getItem("token")
  const token = null

  // If auth is pending and state is loading
  if (loading) {
    return <div>Loading ...</div>
  }

  // If user is logged in
  if (token) {
    return <Outlet />
  }
  // If user is not logged in, navigate to login
  else {
    return <Navigate to="/login" />
  }
}

export default PrivateRoute
