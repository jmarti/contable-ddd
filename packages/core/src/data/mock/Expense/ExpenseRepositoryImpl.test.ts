import { NewExpense } from 'domain/NewExpense'
import { describe, expect, test } from 'vitest'

import ExpenseDataSourceImpl from './ExpenseRepositoryImpl'

const expenseDataSource = new ExpenseDataSourceImpl()

describe(`getExpenses method:`, async () => {

    const expenses = await expenseDataSource.getExpenses()
    
    test(`all returned expenses have a string 'id'.`, () => {
        expect(expenses.some(e => typeof e.id !== 'string')).toBe(false)
    })

    test(`all returned expenses have a string 'description'.`, () => {
        expect(expenses.some(e => typeof e.description !== 'string')).toBe(false)
    })

    test(`all returned expenses have a number 'amount'.`, () => {
        expect(expenses.some(e => typeof e.amount !== 'number')).toBe(false)
    })

    test(`all returned expenses have a string 'date'.`, () => {
        expect(expenses.some(e => typeof e.date !== 'string')).toBe(false)
    })

    test(`all returned expenses have a string 'category'.`, () => {
        expect(expenses.some(e => typeof e.category !== 'string')).toBe(false)
    })
})

describe(`addExpense method:`,async () => {
    const newExpense: NewExpense = {
        description: 'New expense description',
        amount: 10,
        date: '2000-01-01',
        category: 'c1'
    }

    const expensesBefore = await expenseDataSource.getExpenses()
    const addedExpense = await expenseDataSource.addExpense(newExpense)
    const expensesAfter = await expenseDataSource.getExpenses()

    test(`expense is added on the list`, () => {
        expect(expensesAfter.find(e => e.id === addedExpense.id)).toBeDefined()
    })

    test(`expense list grown one item`, () => {
        expect(expensesBefore.length + 1).toBe(expensesAfter.length)
    })
})