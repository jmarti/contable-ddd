import { Expense } from 'domain/Expense'
import { ExpenseRepository } from '../domain/ExpenseRepository'

interface AddExpenseUseCase {
    execute: (newExpense: Expense) => void
}

export class AddExpense implements AddExpenseUseCase {
    constructor(private expenseRepository: ExpenseRepository) { }

    async execute(newExpense: Expense) {
        return this.expenseRepository.add(newExpense)
    }
}