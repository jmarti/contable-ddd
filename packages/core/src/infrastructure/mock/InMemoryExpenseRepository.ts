import { Expense } from 'domain/Expense'
import { ExpenseRepository } from 'domain/ExpenseRepository'

export class InMemoryExpenseRepository implements ExpenseRepository {
    private expenses: Expense[] = []
    async list(): Promise<Expense[]> {
        return this.expenses
    }
    add(expense: Expense): void {
        this.expenses.push(expense)
    }

}