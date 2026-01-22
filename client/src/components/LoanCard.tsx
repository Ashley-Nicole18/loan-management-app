import { useState } from "react"

const API_URL = import.meta.env.VITE_API_URL;

interface TransactionData {
    name: string,
    amount: number,
    date: Date,
}

interface LoanCardProp {
    onClose: () => void;
}

export default function LoanCard ({ onClose }: LoanCardProp) {
    const [transaction, setTransaction] = useState<TransactionData>({
        name: "",
        amount: 0,
        date: new Date()
    })

    const [message, setMessage] = useState<string>("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const key = e.target.name;
        const value = e.target.value

        setTransaction({
            ...transaction,
            [key]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await fetch(`${API_URL}/transactions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(transaction),
        })

        if (!response.ok) {
            setMessage("Server error. Transaction not saved.")
        }

        setMessage("✅ Transaction created successfully")
        onClose()
    };;

    return <div>
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center">
            <form 
            className="bg-gray-300 p-5 w-2xl h-90 rounded-2xl flex flex-col justify-center items-center gap-15"
            onSubmit={handleSubmit}>
                <input
                className="appearance-none border-2 px-20 py-3 rounded-2xl w-120"
                type="text"
                name="name"
                value={transaction.name}
                placeholder="Enter name"
                onChange={handleChange}
                required/>

                <div className="flex justify-between">
                    <input
                className="border-2 p-5  rounded-2xl no-spinner w-50"
                type="number"
                name="amount"
                value={transaction.amount}
                placeholder="Enter amount"
                onChange={handleChange}
                required/>

                <input
                className="p-5 border-2 rounded-2xl w-50" 
                type="date"
                name="date"
                value={transaction.date.toISOString().split('T')[0]}
                placeholder="Date"
                onChange={handleChange}
                required/>
                </div>

                <button
                className="border-2 p-4 w-35 rounded-2xl"
                type="submit">Save</button>

                {message && <p>{message}</p>}
            </form>
        </div>
    </div>
}