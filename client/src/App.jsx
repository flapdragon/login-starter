import { useState } from "react"
import { Routes, Route } from "react-router"
import PrivateRoute from "./PrivateRoute"
import Home from "./Home"
import Dashboard from "./Dashboard"
import Login from "./Login"
import NoMatch from "./NoMatch"
import "./App.css"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default App
