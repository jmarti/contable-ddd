import { AppError } from 'domain/AppError'
import { Expense } from 'domain/Expense'
import { ExpenseRepository } from 'domain/ExpenseRepository'

export class AddExpense {
    constructor(private expenseRepository: ExpenseRepository) { }

    async execute(
        id: string,
        description: string,
        amount: number,
        date: string,
        category: string
    ) {
        const existingExpenses = await this.expenseRepository.list()

        if (existingExpenses.some(e => e.id === id)) {
            throw new AppError('An expense with the same id already exists.')
        }

        const expense = new Expense(id, description, amount, date, category)
        this.expenseRepository.add(expense)
    }
}