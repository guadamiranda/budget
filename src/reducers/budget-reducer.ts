import type { DraftExpense, Expense } from "../types";
import { v4 as uuidv4 } from 'uuid';

export type BudgetActions = 
    { type: 'add-budget', payload: {budget: number}} |
    { type: 'show-modal'} |
    { type: 'close-modal'} | 
    { type: 'new-expense', payload: {expense: DraftExpense}}

export type BudgetState = {
    budget: number,
    openModal: boolean,
    expenses: Expense[]
}

export const initialState : BudgetState = {
    budget: 0,
    openModal: false,
    expenses: []
}

const createExpense = (expense: DraftExpense) : Expense => {
    return {
        ...expense,
        id: uuidv4()
    }
}

export const budgetReducer = (
        state: BudgetState = initialState,
        action: BudgetActions
    ) => {

    if (action.type === 'add-budget') {
        return {
            ...state,
            budget: action.payload.budget
        }
    }

    if(action.type === 'show-modal') {
        return {
            ...state,
            openModal: true
        }
    }

    if(action.type === 'close-modal') {
        return {
            ...state,
            openModal: false
        }
    }

    if(action.type === 'new-expense') {
        
        return {
            ...state,
            expenses: [...state.expenses, createExpense(action.payload.expense)]
        }
    }
    
    return state 

}