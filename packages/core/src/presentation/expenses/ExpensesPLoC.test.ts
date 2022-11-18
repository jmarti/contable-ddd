import { describe, expect, test } from 'vitest'
import { Expense } from 'domain/Expense'
import ExpenseRepositoryImpl from 'infrastructure/mock/Expense/ExpenseRepositoryImpl'
import { ListExpenses } from 'useCases/ListExpenses'
import { AddExpense } from 'useCases/AddExpense'
import ExpensesPLoC from './ExpensesPLoC'
import { ExpensesStatus } from './ExpensesState'

const mockDataRepo = new ExpenseRepositoryImpl()
const expensesPLoC = new ExpensesPLoC(new ListExpenses(mockDataRepo), new AddExpense(mockDataRepo))

describe.skip(`statues`, () => {
    test(`'loading' at init`, () => {
        let status
        const listener = (s: any) => status = s.status
        
        expensesPLoC.subscribe(listener)

        expect(status).toBe(ExpensesStatus.Loading)
    })


    test(`'loaded' when expenses are listed`, async () => {
        let status
        const listener = (s: any) => status = s.status
        
        expensesPLoC.subscribe(listener)
        await expensesPLoC.list()

        expect(status).toBe(ExpensesStatus.Loaded)
    })

    test(`'error' when trying to create an uncompleted expense`, async () => {
        let currentState: any
        const listener = (s: any) => currentState = s
        const incorrectExpense = { } as Expense

        expensesPLoC.subscribe(listener)
        await expensesPLoC.add(incorrectExpense)
        
        expect(currentState.status).toBe(ExpensesStatus.Error)
    })
})
