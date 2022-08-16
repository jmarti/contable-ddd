import { describe, expect, test } from 'vitest'
import { ExpenseRepositoryImpl } from './ExpenseRepositoryImpl'

const expenses = [
    {
        id: 'expense-1',
        description: 'Alquier',
        amount: 2900000,
        date: '2022-08-01',
        category: 'e1'
    }
]

class ExpenseTestDataSourceImpl {
    async getExpenses() {
        return expenses
    }
}


describe(`ExpenseRespository implementation`, () => {
    // @ts-ignore
    const expenseRepo = new ExpenseRepositoryImpl(new ExpenseTestDataSourceImpl())
    test(`getting expenses list via repo implementation.`, async () => {
        expect(await expenseRepo.getExpenses()).toBe(expenses)
    })
})