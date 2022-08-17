import { Expense } from 'domain/Expense/Expense'

// interface CommonExpensesState {
//     searchTerm: string
// }

export interface LoadingExpensesState {
    kind: 'LoadingExpensesState'
}

export interface LoadedExpensesState {
    kind: 'LoadedExpensesState'
    expenses: Expense[]
}

export interface ErrorExpensesState {
    kind: 'ErrorExpensesState',
    error: string
}

export type ExpensesState = /*CommonExpensesState & */
    (LoadingExpensesState | LoadedExpensesState | LoadedExpensesState | ErrorExpensesState)

export const expensesInitialState: ExpensesState = {
    kind: 'LoadingExpensesState',
    // searchTerm: ''
}