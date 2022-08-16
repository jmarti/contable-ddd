import { Expense, NewExpense } from "../models/Expense";

export interface ExpenseRepository {
    getExpenses(): Promise<Expense[]>
    addExpense(newExpense: NewExpense): Promise<Expense>
}