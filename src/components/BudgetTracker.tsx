import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplay";

const BudgetTracker = () => {
    const {state} = useBudget()

    const availableBudget = useMemo(() => {
        return state.expenses.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0)
    }, [state.expenses])
    
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex justify-center">
                <img src="/grafico.jpg" alt="Gráfico de Gastos"></img>
            </div>

            <div className="flex flex-col justify-center items-enter gap-8">
                <button
                    type="button"
                    className="bg-orange-200 w-full py-2 cursor-pointer hover:bg-orange-300"
                >
                    Resetear App
                </button>

                <AmountDisplay 
                    label="Presupuesto"
                    amount= {state.budget}
                />

                <AmountDisplay 
                    label="Disponible"
                    amount= {state.budget -availableBudget}
                />

                <AmountDisplay 
                    label="Gastado"
                    amount= {availableBudget}
                />
            </div>
        </div>
    )
}

export default BudgetTracker