import { describe, expect, test } from 'vitest'
import ExpenseDataSource from '../../../Data/DataSource/ExpenseDataSource'
import { GetExpenses } from './GetExpenses'

const expenses = [
    {
        id: 'expense-1',
        description: 'Alquier',
        amount: 2900000,
        date: new Date('2022-08-01'),
        category: 'e1'
    }
]

class ExpenseTestDataSourceImpl {
    async getExpenses() {
        return expenses
    }
}

export class ExpenseTestRepositoryImpl {

    constructor(public dataSource: ExpenseDataSource) { }

    async getExpenses() {
        return this.dataSource.getExpenses()
    }
}

describe(`GetExpenses useCase:`, async () => {
    const useCase = new GetExpenses(new ExpenseTestRepositoryImpl(new ExpenseTestDataSourceImpl()))

    test(`Return expenses when calling invoke method.`, async () => {
        const res = await useCase.invoke()
        expect(res).toStrictEqual(expenses)
    })
})