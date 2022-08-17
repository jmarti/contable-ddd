import ExpenseRepositoryImpl from '../../data/mock/Expense/ExpenseRepositoryImpl'
import { GetExpenses } from '../../domain/Expense/useCases/GetExpenses'
import { AddExpense } from '../../domain/Expense/useCases/AddExpense'
import { expect, test } from 'vitest'
import ExpensesPLoC from './ExpensesPLoC'
import { ExpensesStatus } from './ExpensesState'
import { NewExpense } from 'domain/Expense/NewExpense'

const mockDataRepo = new ExpenseRepositoryImpl()
const expensesPLoC = new ExpensesPLoC(new GetExpenses(mockDataRepo), new AddExpense(mockDataRepo))

test(`get loading status at init`, () => {
    let status
    const listener = (s: any) => status = s.status
    
    expensesPLoC.subscribe(listener)

    expect(status).toBe(ExpensesStatus.Loading)
})


test(`get loaded status when expenses are listed`, async () => {
    let status
    const listener = (s: any) => status = s.status
    
    expensesPLoC.subscribe(listener)
    await expensesPLoC.list()

    expect(status).toBe(ExpensesStatus.Loaded)
})

test(`get error status when trying to create an uncompleted expense`, async () => {
    let currentState: any
    const listener = (s: any) => currentState = s
    const incorrectNewExpense = { } as NewExpense

    expensesPLoC.subscribe(listener)
    await expensesPLoC.add(incorrectNewExpense)
    
    expect(currentState.status).toBe(ExpensesStatus.Error)
})
