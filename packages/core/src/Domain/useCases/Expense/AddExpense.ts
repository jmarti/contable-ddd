import { Expense, NewExpense } from "../../models/Expense";
import { ExpenseRepository } from "../../repositories/ExpenseRepository";

interface AddExpenseUseCase {
    invoke: (newExpense: NewExpense) => Promise<Expense>
}

export class AddExpense implements AddExpenseUseCase {
    constructor(private expenseRepository: ExpenseRepository) { }

    async invoke(newExpense: NewExpense) {
        return this.expenseRepository.addExpense(newExpense)
    }
}