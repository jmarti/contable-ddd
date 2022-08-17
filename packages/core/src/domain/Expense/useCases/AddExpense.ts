import { Expense } from "../Expense"
import { NewExpense } from "../NewExpense"
import { ExpenseRepository } from "../ExpenseRepository"

interface AddExpenseUseCase {
    execute: (newExpense: NewExpense) => Promise<Expense>
}

export class AddExpense implements AddExpenseUseCase {
    constructor(private expenseRepository: ExpenseRepository) { }

    async execute(newExpense: NewExpense) {
        return this.expenseRepository.addExpense(newExpense)
    }
}