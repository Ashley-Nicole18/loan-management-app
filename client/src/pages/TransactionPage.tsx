import { useState } from "react"
import LoanCard from "../components/LoanCard"

export default function TransactionPage() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    
    return <div>
        <div className="flex justify-between m-5">
            <h1 className="font-bold text-4xl ">Transactions</h1>
            <button 
            className="bg-blue-600 px-6 py-3 rounded-2xl text-amber-50"
            onClick={() => setIsModalOpen(true)}
            >
                + Add New
            </button>

            {isModalOpen && (
                <LoanCard onClose={() => setIsModalOpen(false)} />
            )}
        </div>

    </div>
}