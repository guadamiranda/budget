import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions} from 'react-swipeable-list';
import { TrashIcon, PencilSquareIcon} from "@heroicons/react/24/solid";
import { formatCurrency, formatDate } from "../helpers";
import { useBudget } from '../hooks/useBudget';
import "react-swipeable-list/dist/styles.css";
import type { Expense } from "../types";
import { categories } from "../db/db";
import { useMemo } from "react";

type ExpenseProps = {
    expense: Expense
}

const ExpenseDetail = ({expense} : ExpenseProps) => {
    const { dispatch } = useBudget()

    const categoryInfo = useMemo(() => categories.find((category) => category.id === expense.category), [expense])

    const deleteExpense = (id: string) => (
        dispatch({type: 'delete-expense', payload: {id}})
    )

    const editExpense = (id: string) => (
        dispatch({type: 'get-expense-by-id', payload: {id}}),
        dispatch({type: 'show-modal'})
    ) 

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => editExpense(expense.id)}><PencilSquareIcon className='w-8 h-8'/> </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction onClick={() => deleteExpense(expense.id)} destructive={true}> <TrashIcon className='w-8 h-8' /> </SwipeAction>
        </TrailingActions>
    )

    return(
        <SwipeableList>
            <SwipeableListItem 
                maxSwipe={1} 
                leadingActions={leadingActions()} 
                trailingActions={trailingActions()}
            >
                    <div className="bg-white shadow-lg p-7 w-full flex justify-between items-center">
                        <div className="flex items-center gap-5">
                            <img className="w-18" src={`icono_${categoryInfo!.icon}.svg`} alt="Icono del gasto"/>
                            <div className="gap-2">
                                <p className="text-slate-400 uppercase text-md">{categoryInfo!.name}</p>
                                <p className="text-2xl text-blue-400">{expense.expenseName}</p>
                                <p className="text-slate-400 text-sm">{formatDate(expense.date!.toString())}</p>
                            </div>
                        </div>
                        
                        <p className="flex justify-end text-2xl text-slate-400">{formatCurrency(expense.amount)}</p>
                    </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default ExpenseDetail
