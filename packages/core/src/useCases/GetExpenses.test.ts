import { expect, test } from 'vitest'
import ExpenseRepositoryImpl from '../data/mock/Expense/ExpenseRepositoryImpl'
import { GetExpenses } from './GetExpenses'


const expenseAttributes = [ 'id', 'description', 'amount', 'date', 'category' ]
    
test(`returns a list of expenses with 'id', 'description, 'amount', 'date' and 'category' attributes.`, async () => {
    const useCase = new GetExpenses(new ExpenseRepositoryImpl())
    const expenses = await useCase.execute()
    expect(
        expenses.some(expense =>
            Object.keys(expense).some(attr =>
                !expenseAttributes.includes(attr)
            )
        )
    ).toBe(false)
})