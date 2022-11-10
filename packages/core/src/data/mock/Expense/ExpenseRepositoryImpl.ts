import { Expense } from 'domain/Expense'
import { ExpenseRepository } from 'domain/ExpenseRepository'
import { NewExpense } from 'domain/NewExpense'
import { expenses, addExpense } from './db'

const REQUIRED_NEW_EXPENSE_PROPS = ['description', 'amount', 'date', 'category']

export default class ExpenseRepositoryImpl implements ExpenseRepository {
    async getExpenses(): Promise<Expense[]> {
        return expenses.map(item => ({
            id: item.id,
            description: item.description,
            amount: item.amount,
            date: item.date,
            category: item.categoryId
        }))
    }

    async addExpense(newExpense: NewExpense): Promise<Expense> {
        this.checkNewExpense(newExpense)

        const newExpenseId = addExpense({
            description: newExpense.description,
            amount: newExpense.amount,
            date: newExpense.date,
            categoryId: newExpense.category
        })
        return (await this.getExpenses()).find(expense => expense.id === newExpenseId)!
    }

    private checkNewExpense(newExpense: any) {
        const missingProps = REQUIRED_NEW_EXPENSE_PROPS.filter(prop => !newExpense.hasOwnProperty(prop))

        if (missingProps.length) throw new Error(`[${missingProps.join(', ')}] are required.`)
    }
}