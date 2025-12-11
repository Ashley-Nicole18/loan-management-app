import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }: { children: React.ReactElement }) => {
    const { token } = useAuth();

    if (!token) return <Navigate to="/login" replace />;

    return children
};

export default ProtectedRoute