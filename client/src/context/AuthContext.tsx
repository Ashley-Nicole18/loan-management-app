import { createContext, useContext, useState } from "react";

interface AuthContextType {
    user: string | null;
    token: string | null;
    login: (user: string, token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children } : {children: React.ReactNode}) => {
    const [user, setUser] = useState<string | null>(null);
    const [token, setToken] = useState<string | null>(null);

    const login = (user: string, token: string) => {
        setUser(user);
        setToken(token);

        localStorage.setItem("auth_user", user);
        localStorage.setItem("auth_token", token);
    };

    const logout = () => {
        setUser(null);
        setToken(null);

        localStorage.removeItem("auth_user");
        localStorage.removeItem("auth_token");
    };

    return (
        <AuthContext.Provider value={{user, token, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be inside AuthProvider")
        return ctx;
}