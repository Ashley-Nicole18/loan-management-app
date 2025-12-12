import { useNavigate } from "react-router-dom";

export default function LandingPage () {
    const Navigate = useNavigate()
    const handleClick = () => {
        Navigate('/login')
    }
    return (
        <div className="flex justify-center mt-50">
            <button
            type="button"
            onClick={handleClick}
            >Join Now!</button>
        </div>
    )
}