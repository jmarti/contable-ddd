import { describe, expect, test } from 'vitest'
import ExpenseDataSourceImpl from './ExpenseDataSourceImpl'


describe(`getExpenses method:`, async () => {
    const expenseDataSource = new ExpenseDataSourceImpl()
    const expenses = await expenseDataSource.getExpenses()
    
    test(`All returned expenses have a string 'id'.`, () => {
        expect(expenses.some(expense => typeof expense.id !== 'string')).toBe(false)
    })

    test(`All returned expenses have a string 'description'.`, () => {
        expect(expenses.some(expense => typeof expense.description !== 'string')).toBe(false)
    })

    test(`All returned expenses have a number 'amount'.`, () => {
        expect(expenses.some(expense => typeof expense.amount !== 'number')).toBe(false)
    })

    test(`All returned expenses have a date 'date'.`, () => {
        expect(expenses.some(expense => expense.date instanceof Date)).toBe(true)
    })

    test(`All returned expenses have a string 'category'.`, () => {
        expect(expenses.some(expense => typeof expense.category !== 'string')).toBe(false)
    })
})