import { Expense } from "../../models/Expense";
import { ExpenseRepository } from "../../repositories/ExpenseRepository";

interface GetExpensesUseCase {
    invoke: () => Promise<Expense[]>
}

export class GetExpenses implements GetExpensesUseCase {
    constructor(private expenseRepository: ExpenseRepository) { }

    async invoke() {
        return this.expenseRepository.getExpenses()
    }
}