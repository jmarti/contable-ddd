import { ExpenseBase } from './ExpenseBase'

export interface Expense extends ExpenseBase {
    id: UniqueId
}