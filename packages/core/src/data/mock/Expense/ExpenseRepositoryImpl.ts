import { Expense } from "domain/Expense/Expense"
import { ExpenseRepository } from "domain/Expense/ExpenseRepository"
import { NewExpense } from "domain/Expense/NewExpense"
import { expenses, addExpense } from "./db"

export default class ExpenseRepositoryImpl implements ExpenseRepository {
    async getExpenses(): Promise<Expense[]> {
        return expenses.map(item => ({
            id: item.id,
            description: item.description,
            amount: item.amount,
            date: item.date,
            category: item.categoryId
        }))
    }

    async addExpense(newExpense: NewExpense): Promise<Expense> {
        const newExpenseId = addExpense({
            description: newExpense.description,
            amount: newExpense.amount,
            date: newExpense.date,
            categoryId: newExpense.category
        })
        return (await this.getExpenses()).find(expense => expense.id === newExpenseId)!
    }
}