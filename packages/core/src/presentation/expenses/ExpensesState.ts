import { Expense } from 'domain/Expense/Expense'

export enum ExpensesStatus {
    Loading = 'LoadingExpenses',
    Loaded = 'LoadedExpenses',
    Error = 'ErrorExpenses'
}

// interface CommonExpensesState {
//     searchTerm: string
// }

export interface LoadingExpensesState {
    status: ExpensesStatus.Loading
}

export interface LoadedExpensesState {
    status: ExpensesStatus.Loaded
    expenses: Expense[]
}

export interface ErrorExpensesState {
    status: ExpensesStatus.Error,
    message: string,
    error: Error
}

export type ExpensesState = /*CommonExpensesState & */
    (LoadingExpensesState | LoadedExpensesState | LoadedExpensesState | ErrorExpensesState)

export const expensesInitialState: ExpensesState = {
    status: ExpensesStatus.Loading,
    // searchTerm: ''
}