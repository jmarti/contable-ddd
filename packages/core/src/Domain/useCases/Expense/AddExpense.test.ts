import { expect, test } from 'vitest'
import ExpenseDataSourceImpl from '../../../Data/DataSource/Mock/ExpenseDataSourceImpl'
import { ExpenseRepositoryImpl } from '../../../Data/Repository/ExpenseRepositoryImpl'
import { NewExpense } from '../../models/Expense'
import { AddExpense } from './AddExpense'


test(`returns the the same new expense with and 'id'.`, async () => {
    const newExpense: NewExpense = {
        description: 'New expense description',
        amount: 10,
        date: '2000-01-01',
        category: 'c1'
    }
    
    const useCase = new AddExpense(new ExpenseRepositoryImpl(new ExpenseDataSourceImpl()))
    const returnedExpense = await useCase.invoke(newExpense)

    expect(returnedExpense).toStrictEqual({
        ...newExpense,
        id: returnedExpense.id
    })
})