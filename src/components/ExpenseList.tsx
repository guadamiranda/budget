import { useBudget } from "../hooks/useBudget";
import ExpenseDetail from "./ExpenseDetail";
import { useMemo } from "react";

const ExpenseList = () => {
    const { state } = useBudget()
    const { expenses } = state

    const filteredExpenses = useMemo(() => 
        expenses.filter(expense => state.filterCategoryId === '' ? expense.category : expense.category === state.filterCategoryId), [state.filterCategoryId]
    )

    const isEmpty = useMemo(() => expenses.length === 0 || filteredExpenses.length === 0, [expenses, state.filterCategoryId])

    return (
        <>
            {isEmpty ? 
                <p className="text-center text-gray-400 text-3xl">No hay gastos</p> : 
                <>
                    <p className="text-center text-blue-400 text-3xl border-b pb-2 border-blue-400 my-5">Lista de gastos</p>
                    {filteredExpenses.map((expense) => <ExpenseDetail key={expense.id} expense={expense}/>)}
                </> 
            } 
        </>  
    )
}   

export default ExpenseList