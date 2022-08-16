import { expect, test } from 'vitest'
import ExpenseDataSourceImpl from '../../../Data/DataSource/Mock/ExpenseDataSourceImpl'
import { ExpenseRepositoryImpl } from '../../../Data/Repository/ExpenseRepositoryImpl'
import { GetExpenses } from './GetExpenses'


const expenseAttributes = [ 'id', 'description', 'amount', 'date', 'category' ]
    
test(`returns a list of expenses with 'id', 'description, 'amount', 'date' and 'category' attributes.`, async () => {
    const useCase = new GetExpenses(new ExpenseRepositoryImpl(new ExpenseDataSourceImpl()))
    const expenses = await useCase.invoke()
    expect(
        expenses.some(expense =>
            Object.keys(expense).some(attr =>
                !expenseAttributes.includes(attr)
            )
        )
    ).toBe(false)
})