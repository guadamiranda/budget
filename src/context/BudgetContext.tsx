import { budgetReducer, initialState, type BudgetActions, type BudgetState } from "../reducers/budget-reducer";
import { useReducer, createContext, type ReactNode, type Dispatch, useMemo } from "react";

type BudgetContextProps = {
    state: BudgetState,
    dispatch: Dispatch<BudgetActions>,
    availableBudget: number
}

type BudgetProviderProps = {
    children: ReactNode
}

export const BudgetContext = createContext<BudgetContextProps>(null!)

export const BudgetProvider = ({children}: BudgetProviderProps) => {

    const [state, dispatch] = useReducer(budgetReducer, initialState)

    const availableBudget = useMemo(() => {
        return state.expenses.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0)
    }, [state.expenses])

    return (
        <BudgetContext.Provider value={{state, dispatch, availableBudget}}>
            {children}
        </BudgetContext.Provider>
    )
        
}