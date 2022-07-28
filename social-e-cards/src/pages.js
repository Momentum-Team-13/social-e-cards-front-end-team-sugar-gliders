import { Routes, Route } from "react-router-dom"
import Home from "./components/home"
import LogIn from "./components/logIn"
import NewUser from "./components/newUser"

function Pages() {
  return (
    <Routes>
      <Route path="/home/" element={<Home />} />
      <Route path="/newUser/" element={<NewUser />} />
      <Route path="/logIn/" element={<LogIn />} />
    </Routes>
  )
}

export default Pages