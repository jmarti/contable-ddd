import { Expense } from 'domain/Expense'
import { ExpenseRepository } from 'domain/ExpenseRepository'


interface ListExpensesUseCase {
    execute: () => Promise<Expense[]>
}

export class ListExpenses implements ListExpensesUseCase {
    constructor(private expenseRepository: ExpenseRepository) { }

    async execute() {
        return this.expenseRepository.list()
    }
}