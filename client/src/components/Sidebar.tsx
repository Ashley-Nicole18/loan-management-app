import { NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <aside
        className="w-60 bg-gray-900 text-white min-h-screen p-5 flex flex-col gap6"
        >
            {/* App Name */}
            <h2 className="flex justify-center text-2xl font-extrabold m-3">Loan Manager</h2>

            {/* Navigation Links */}
            <nav className="flex flex-col items-center gap-10 mt-5  ">
                <NavLink
                to="/dashboard/overview"
                className={({ isActive }) => 
                `text-white ${isActive ? "font-bold text-blue-400" : "opacity-80"}`
                }
                >
                    Overview
                </NavLink>

                                <NavLink
                to="/dashboard/loans"
                className={({ isActive }) => 
                `text-white ${ isActive ? 'font-bold text-blue-400' : 'opacity-80'}`
                }
                >
                    Transactions
                </NavLink>

                <NavLink
                to="/dashboard/borrowers"
                className={({ isActive }) => 
                `text-white ${isActive ? 'font-bold text-blue-400' : 'opacity-80'}`
                }
                >
                    History
                </NavLink>
            </nav>
        </aside>
    )
}