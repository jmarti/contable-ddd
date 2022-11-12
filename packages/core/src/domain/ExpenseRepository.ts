import { Expense } from './Expense'

export interface ExpenseRepository {
    list(): Promise<Expense[]>
    add(expense: Expense): void
}