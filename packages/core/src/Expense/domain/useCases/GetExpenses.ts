import { Expense } from "../Expense"
import { ExpenseRepository } from "../ExpenseRepository"


interface GetExpensesUseCase {
    execute: () => Promise<Expense[]>
}

export class GetExpenses implements GetExpensesUseCase {
    constructor(private expenseRepository: ExpenseRepository) { }

    async execute() {
        return this.expenseRepository.getExpenses()
    }
}