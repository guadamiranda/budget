import { useState, type FormEvent } from "react";
import 'react-date-picker/dist/DatePicker.css';
import type { DraftExpense } from "../types";
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css';
import { categories } from "../db/db";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const ExpenseForm = () => {
    const [expense, setExpense] = useState<DraftExpense>({
        expenseName: '',
        amount: 0,
        category: '',
        date: new Date()
    }) 

    const [value, onChange] = useState<Value>(new Date());

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return(
        <form className="space-y-5" onSubmit={handleSubmit}>
            <legend className="text-center text-xl text-blue-400 border-b-2 border-blue-100">Nuevo Gasto</legend>

            <div className="flex flex-col gap-2"> 
                <label htmlFor="expenseName" className="text-md"> Nombre del Gasto: </label>
                <input 
                    id="expenseName" 
                    type="text" 
                    placeholder="Comida, Regalo, etc." 
                    className="p-2 bg-slate-100"
                    name="expenseName"
                    value={expense.expenseName}
                />
            </div>

            <div className="flex flex-col gap-2"> 
                <label htmlFor="amount" className="text-md"> Costo: </label>
                <input 
                    id="amount" 
                    type="number" 
                    placeholder="Añade el Costo del gasto. Ej. 300" 
                    className="p-2 bg-slate-100"
                    name="amount"
                    value={expense.amount}
                />
            </div>

            <div className="flex flex-col gap-2"> 
                <label htmlFor="category" className="text-md"> Categoría: </label>
                <select 
                    id="category"  
                    className="p-2 bg-slate-100"
                    name="category"
                    value={expense.category}
                >
                    <option value="">--- Seleccione una opción ---</option>
                    {categories.map((category) => <option value={category.id} key={category.id}>{category.name}</option>)}
                </select>
            </div>

            <div className="flex flex-col gap-2"> 
                <label htmlFor="expenseDate" className="text-md"> Fecha del gasto: </label>
                <DatePicker 
                    id="expenseDate" 
                    name="expenseDate" 
                    className="p-2 bg-slate-100" 
                    onChange={onChange}
                    value={expense.date} />
            </div>

            <input
                type="submit"
                value="Guardar gasto" 
                className="bg-blue-400 hover:bg-blue-500 cursor-pointer px-5 py-2 rounded-lg w-full text-white disabled:bg-gray-300 disabled:cursor-default"
            />
        </form>
    )
}

export default ExpenseForm