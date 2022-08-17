import { NewExpense } from './NewExpense'

export interface Expense extends NewExpense {
    id: UniqueId
}