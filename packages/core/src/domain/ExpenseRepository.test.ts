import { describe, expect, test } from 'vitest'
import { InMemoryExpenseRepository } from 'infrastructure/mock/InMemoryExpenseRepository'
import { Expense } from './Expense'

describe.each([
    new InMemoryExpenseRepository()
])(`test expense repositories`, (repo) => {
    test(`can save and retrieve category`, async () => {
        const theExpense = new Expense('1', 'Expense description', 12323, '2022-01-01', '1')
        
        repo.add(theExpense)

        expect(await repo.list()).toEqual([theExpense]) // WRN: Esto solo sirve para la implementación del repo InMemory
    })
})