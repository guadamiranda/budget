import { useState, type ChangeEvent, type FormEvent } from "react";
import type { DraftExpense, Value } from "../types";
import 'react-date-picker/dist/DatePicker.css';
import { useBudget } from "../hooks/useBudget";
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css';
import ErrorMessage from "./ErrorMessage";
import { categories } from "../db/db";


const ExpenseForm = () => {
    const { state, dispatch } = useBudget()
    const [expense, setExpense] = useState<DraftExpense>({
        expenseName: '',
        amount: 0,
        category: '',
        date: new Date()
    }) 

    const [error, setError] = useState('')

    const handleChangeDate = (value:Value) => {
        setExpense({...expense, date: value})
    }

    const handleAmount = (e:ChangeEvent<HTMLInputElement>) => {
        setExpense({...expense, amount: Number(e.target.value)})
    }

    const handleText = (e:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const {name, value} = e.target
        setExpense({...expense, [name]: value})
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (Object.values(expense).includes('')) {
            setError('Todos los campos son obligatorios')
            return
        }

        setError('')
        dispatch({type: 'new-expense', payload: {expense}})
        dispatch({type: 'close-modal'})

    }

    return(
        <form className="space-y-5" onSubmit={handleSubmit}>
            <legend className="text-center text-xl text-blue-400 border-b-2 border-blue-100">Nuevo Gasto</legend>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <div className="flex flex-col gap-2"> 
                <label htmlFor="expenseName" className="text-md"> Nombre del Gasto: </label>
                <input 
                    id="expenseName" 
                    type="text" 
                    placeholder="Comida, Regalo, etc." 
                    className="p-2 bg-slate-100"
                    name="expenseName"
                    value={expense.expenseName}
                    onChange={handleText}
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
                    onChange={handleAmount}
                />
            </div>

            <div className="flex flex-col gap-2"> 
                <label htmlFor="category" className="text-md"> Categoría: </label>
                <select 
                    id="category"  
                    className="p-2 bg-slate-100"
                    name="category"
                    value={expense.category}
                    onChange={handleText}
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
                    onChange={handleChangeDate}
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