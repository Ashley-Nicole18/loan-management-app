import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"


const API_URL = import.meta.env.VITE_API_URL 

export default function Login() {
    const { login } = useAuth()
    const navigate = useNavigate()

    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [error, setError] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        setError("")

        try {
            const response = await fetch(`${API_URL}/login`, {
                method: "Post",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({username, password})
            }) 

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || "Invalid Login")
                setIsLoading(false)
                return
            }

            login(data.username, data.token)
            navigate('/dashboard')

        } catch(err) {
            console.error(err)
            setIsLoading(false)
        }
    }
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
            <form 
            onSubmit={handleLogin} 
            className="bg-white w-full max-w-sm p-8 rounded-xl shadow-lg flex flex-col gap-6"
            >
                <h2 className="text-2xl font-bold text-center text-gray-800">Welcome Back</h2>
                <div className="flex flex-col gap-4">
                    {/* username */}
                    <div className="border-2 border-gray-400 rounded-2xl p-3 focus-within:border-blue-500 transition">
                    <input 
                        className="outline-none w-full text-gray-700"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        required
                    />
                    </div>
                    {/* password */}
                    <div className="border-2 border-gray-400 rounded-2xl p-3 focus-within:border-blue-500 transition flex items-center justify-between">
                        <input 
                        className="outline-none w-full text-gray-700"
                        type={showPassword ? "text" : "password"} 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        />
                        {/* Eye icon button */}
                        <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-gray-500 hover:text-gray-700 focus: outline-none ml-2"
                        >
                            {!showPassword ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>): (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                )}
                        </button>
                    </div>
                </div>
                    {/* button */}
                        <button 
                            className={`
                                bg-blue-500 w-full py-3 rounded-lg text-white font-semibold transition
                                flex justify-center items-center gap-2`}
                            type="submit"
                            disabled={isLoading}
                        >
                        {isLoading ? (
                        <>
                            {/* SPINNER SVG */}
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Processing...</span>
                        </>
                    ) : (
                        "Login"
                    )}
                        </button>
                {(error) && <p className="text-red-500 text-center mt-4">{error}</p>}
            </form>
        </div>
    )
}


