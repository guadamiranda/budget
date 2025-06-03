import type { DraftExpense, Expense } from "../types";
import { v4 as uuidv4 } from 'uuid';

export type BudgetActions = 
    { type: 'add-budget', payload: {budget: number}} |
    { type: 'show-modal'} |
    { type: 'close-modal'} | 
    { type: 'new-expense', payload: {expense: DraftExpense}} |
    { type: 'delete-expense', payload: {id: string}} | 
    { type: 'get-expense-by-id', payload: {id: string}} |
    { type: 'edit-expense', payload: {expense: DraftExpense, id: string}} | 
    { type: 'reset-app' } |
    { type: 'filter-category', payload: {filterCategoryId: string} }

export type BudgetState = {
    budget: number,
    openModal: boolean,
    expenses: Expense[],
    editingId: string,
    filterCategoryId: string
}

const initialBudget = () : number => {
    const localStorageBudget = localStorage.getItem('budget')
    return localStorageBudget ? Number(localStorageBudget) : 0
}

const initiaExpenses = () : Expense[] => {
    const localStorageExpenses = localStorage.getItem('expenses')
    return localStorageExpenses ? JSON.parse(localStorageExpenses) : []
}

export const initialState : BudgetState = {
    budget: initialBudget(),
    openModal: false,
    expenses: initiaExpenses(),
    editingId: '',
    filterCategoryId: ''
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
            openModal: false,
            editingId: ''
        }
    }

    if(action.type === 'new-expense') {   
        return {
            ...state,
            editingId: '',
            expenses: [...state.expenses, createExpense(action.payload.expense)]
        }
    }

    if(action.type === 'delete-expense') {
        return {
            ...state,
            expenses: state.expenses.filter(expense => expense.id !== action.payload.id)
        }
    }

    if(action.type === 'get-expense-by-id') {
        return {
            ...state,
            editingId: action.payload.id
        }
    }

    if(action.type === 'edit-expense') {
        return {
            ...state,
            editingId: '',
            expenses: state.expenses.map(expense => expense.id === action.payload.id ? {...expense, ...action.payload.expense} : expense)
        }
    }

    if(action.type === 'reset-app') {
        return {
            ...state,
            budget: 0,
            expenses: [],
            filterCategoryId: ''
        }
    }

    if(action.type === 'filter-category') {
        return {
            ...state,
            filterCategoryId: action.payload.filterCategoryId
        }
    }
    
    return state 

}