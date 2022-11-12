import { expect, test } from 'vitest'
import { Expense } from 'domain/Expense'
import { InMemoryExpenseRepository } from 'infrastructure/mock/InMemoryExpenseRepository'
import { AddExpense } from './AddExpense'

test(`adds the new expense`, async () => {
    const repo = new InMemoryExpenseRepository()
    const useCase = new AddExpense(repo)
    const theExpense: Expense = {
        id: '1',
        description: 'Expense description',
        amount: 10,
        date: '2022-01-01',
        category: '1'
    }
    
    useCase.execute(theExpense)

    expect(await repo.list()).toStrictEqual([theExpense])
})