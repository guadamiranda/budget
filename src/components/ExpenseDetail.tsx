import { useEffect, useMemo } from "react";
import { categories } from "../db/db";
import { formatCurrency, formatDate } from "../helpers";
import type { Expense } from "../types";

type ExpenseProps = {
    expense: Expense
}

const ExpenseDetail = ({expense} : ExpenseProps) => {

    const categoryInfo = useMemo(() => categories.find((category) => category.id === expense.category), [expense])

    return(
        <div className="bg-white shadow-lg p-10 w-full my-4 rounded-lg">
            <div className="flex items-center gap-5">
                <img className="w-20" src={`icono_${categoryInfo!.icon}.svg`} alt="Icono del gasto"/>
                <div className="gap-2">
                    <p className="text-slate-400 uppercase text-md">{categoryInfo!.name}</p>
                    <p className="text-2xl text-blue-400">{expense.expenseName}</p>
                    <p className="text-slate-400 text-sm">{formatDate(expense.date!.toString())}</p>
                </div>
            </div>
            
            <p className="flex justify-end text-2xl text-slate-400">{formatCurrency(expense.amount)}</p>
        </div>
    )
}

export default ExpenseDetail
