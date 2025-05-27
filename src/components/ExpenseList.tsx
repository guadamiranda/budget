import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"

const ExpenseList = () => {
    const { state } = useBudget()
    const { expenses } = state

    const isEmpty = useMemo(() => expenses.length === 0, [expenses])

    return (
        <>
            {isEmpty ? 
                <p className="text-center text-gray-400 text-3xl">No hay gastos</p> : 
                <>
                    <p className="text-center text-blue-400 text-3xl border-b pb-2 border-blue-400">Lista de gastos</p>
                    {expenses.map(() => <div>ExpenseList</div>)}
                </> 
            } 
        </>  
    )
}   

export default ExpenseList