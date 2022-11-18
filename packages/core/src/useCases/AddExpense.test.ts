import { expect, test } from 'vitest'
import { Expense } from 'domain/Expense'
import { InMemoryExpenseRepository } from 'infrastructure/mock/InMemoryExpenseRepository'
import { AddExpense } from './AddExpense'

test(`adds the new expense`, async () => {
    const repo = new InMemoryExpenseRepository()
    const addExpense = new AddExpense(repo)
    const theExpense: Expense = {
        id: '1',
        description: 'Expense description',
        amount: 10,
        date: '2022-01-01',
        category: '1'
    }
    
    addExpense.execute(
        theExpense.id,
        theExpense.description,
        theExpense.amount,
        theExpense.date,
        theExpense.category
    )

    expect(await repo.list()).toEqual([
        new Expense(
            theExpense.id,
            theExpense.description,
            theExpense.amount,
            theExpense.date,
            theExpense.category
        )
    ])
})


test(`can't add a category with the same id`, async () => {
    const repo = new InMemoryExpenseRepository()
    const addExpense = new AddExpense(repo)
    const theExpenseRepeatedData = { id: '1' }
    const theExpense = {
        description: 'Expense description',
        amount: 10,
        date: '2022-01-01',
        category: '1',
        ...theExpenseRepeatedData
    }
    const expenseWithSameId = {
        description: 'Expense with same id',
        amount: 16,
        date: '2022-01-02',
        category: '2',
        ...theExpenseRepeatedData
    }
    
    addExpense.execute(
        theExpense.id,
        theExpense.description,
        theExpense.amount,
        theExpense.date,
        theExpense.category
    )
    async function addSameIdExpense() {
        await addExpense.execute(
            expenseWithSameId.id,
            expenseWithSameId.description,
            expenseWithSameId.amount,
            expenseWithSameId.date,
            expenseWithSameId.category
        )
    }

    await expect(addSameIdExpense).rejects.toThrow('An expense with the same id already exists.')
    expect(await repo.list()).toEqual([
        new Expense(
            theExpense.id,
            theExpense.description,
            theExpense.amount,
            theExpense.date,
            theExpense.category)
    ])
})