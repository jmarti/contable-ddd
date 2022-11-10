import { expect, test } from 'vitest'
import ExpenseRepositoryImpl from '../infrastructure/mock/Expense/ExpenseRepositoryImpl'
import { NewExpense } from '../domain/NewExpense'
import { AddExpense } from './AddExpense'


test(`returns the the same new expense with and 'id'.`, async () => {
    const newExpense: NewExpense = {
        description: 'New expense description',
        amount: 10,
        date: '2000-01-01',
        category: 'c1'
    }
    const useCase = new AddExpense(new ExpenseRepositoryImpl())
    
    const returnedExpense = await useCase.execute(newExpense)

    expect(returnedExpense).toStrictEqual({ ...newExpense, id: returnedExpense.id })
})