import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplay";
import { useMemo } from "react";

const BudgetTracker = () => {
    const {state, availableBudget} = useBudget()

    const percentage = useMemo(() => Math.round((availableBudget / state.budget) * 100), [availableBudget, state.budget])
    
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex justify-center">
                <CircularProgressbar 
                    value={percentage}
                    styles={buildStyles({pathColor: percentage === 100 ? '#ef4444' : '#3b82f6', textColor: '#3b82f6', trailColor: '#d1d5db', textSize: '8px'})}
                    text={`${percentage}% Gastado `}
                />
                    
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
                    amount= {state.budget - availableBudget}
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