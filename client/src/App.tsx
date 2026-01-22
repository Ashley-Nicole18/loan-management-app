import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import LandingPage from "./pages/LandingPage"
import ProtectedRoute from "./context/ProtectedRoute"
import DashboardLayout from "./layouts/DashboardLayout"
import OverviewPage from "./pages/OverviewPage"
import HistoryPage from "./pages/HistoryPage"
import TransactionPage from "./pages/TransactionPage"

export default function App() {
  return (
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={ <Login />} />
        <Route path="/" element={ <LandingPage />} />


        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
        {/* Dashboard Layout */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            {/* Dashboard inner pages */}
            <Route path="overview" element={<OverviewPage />} />
            <Route path="loans" element={<TransactionPage />} />
            <Route path="borrowers" element={<HistoryPage />} />
          </Route>
        </Route>
      </Routes>
  )
}