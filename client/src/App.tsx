import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import LandingPage from "./pages/LandingPage"

export default function App() {
  return (
      <Routes>
        <Route path="/login" element={ <Login />} />
        <Route path="/dashboard" element={ <Dashboard />} />
        <Route path="/" element={ <LandingPage />} />
      </Routes>
  )
}