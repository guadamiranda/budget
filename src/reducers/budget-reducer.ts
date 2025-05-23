
export type BudgetActions = 
    { type: 'add-budget', payload: {budget: number}} |
    { type: 'show-modal'} |
    { type: 'close-modal'} 

export type BudgetState = {
    budget: number,
    openModal: boolean
}

export const initialState : BudgetState = {
    budget: 0,
    openModal: false
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
    
    return state 

}