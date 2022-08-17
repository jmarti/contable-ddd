import { Expense } from "./Expense"
import { NewExpense } from "./NewExpense"

export interface ExpenseRepository {
    getExpenses(): Promise<Expense[]>
    addExpense(newExpense: NewExpense): Promise<Expense>
}