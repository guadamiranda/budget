import { useState, type ChangeEvent, type FormEvent } from "react"
import { useBudget } from "../hooks/useBudget"

const BudgetForm = () => {
    const [budget, setBudget] = useState(0)
    const { dispatch } = useBudget()

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setBudget(e.target.valueAsNumber)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch({type: 'add-budget', payload: {budget}})

    }

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-5">
                <label htmlFor="budget" className="text-4xl text-blue-400 font-bold text-center">
                    Definir Presupuesto
                </label>
                <input 
                    id="budget"
                    type="number" 
                    className="w-full bg-white border border-gray-200 p-2" 
                    placeholder="Define tu presupuesto" 
                    name="budget"
                    value={budget}
                    onChange={handleChange}
                    />
            </div>

            <input 
                type="submit"
                value="Definir Presupuesto" 
                className="bg-blue-400 hover:bg-blue-500 cursor-pointer px-5 py-2 rounded-lg w-full text-white disabled:bg-gray-300 disabled:cursor-default"
                disabled={!budget}/>
        </form>
    )
}

export default BudgetForm