import { Expense } from '../domain/Expense'
import { ExpenseRepository } from '../domain/ExpenseRepository'


interface GetExpensesUseCase {
    execute: () => Promise<Expense[]>
}

export class GetExpenses implements GetExpensesUseCase {
    constructor(private expenseRepository: ExpenseRepository) { }

    async execute() {
        return this.expenseRepository.getExpenses()
    }
}