import Sidebar from "../components/Sidebar.jsx";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
    return (
        <div className="flex">
            {/* Left navigation panel */}
            <Sidebar />

            {/* Right side content area */}
            <main className="flex-1 bg-gray-100 min-h-screen p-6">
                <Outlet />
            </main>
        </div>
    )
}