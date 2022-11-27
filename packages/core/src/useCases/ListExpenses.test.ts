import { expect, test } from 'vitest'
import { Expense } from 'domain/Expense'
import { InMemoryExpenseRepository } from 'infrastructure/mock/InMemoryExpenseRepository'
import { ListExpenses } from './ListExpenses'

test(`list expenses`, async () => {
    const repo = new InMemoryExpenseRepository()
    const getExpenses = new ListExpenses(repo)
    const anyExpense: Expense = {
        id: '1',
        description: 'Expense description',
        amount: 10,
        date: '2022-01-01',
        category: '1'
    }
    repo.add(anyExpense)
    
    const expenses = await getExpenses.execute()
    
    expect(expenses).toStrictEqual([anyExpense])
})