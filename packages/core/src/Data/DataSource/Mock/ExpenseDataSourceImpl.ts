import { Expense } from "../../../Domain/models/Expense"
import ExpenseDataSource from "../ExpenseDataSource"

const expenses = [
    {
        description: 'Alquier',
        amount: 2900000,
        date: '2022-08-01',
        categoryId: 'e1'
    }
]

export default class ExpenseDataSourceImpl implements ExpenseDataSource {
    async getExpenses(): Promise<Expense[]> {
        return expenses.map((item, i) => ({
            id: `expense-${i}`,
            description: item.description,
            amount: item.amount,
            date: new Date(item.date),
            category: item.categoryId
        }))
    }
}