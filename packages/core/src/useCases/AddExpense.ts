import { Expense } from '../domain/Expense'
import { NewExpense } from '../domain/NewExpense'
import { ExpenseRepository } from '../domain/ExpenseRepository'

interface AddExpenseUseCase {
    execute: (newExpense: NewExpense) => Promise<Expense>
}

export class AddExpense implements AddExpenseUseCase {
    constructor(private expenseRepository: ExpenseRepository) { }

    async execute(newExpense: NewExpense) {
        return this.expenseRepository.addExpense(newExpense)
    }
}