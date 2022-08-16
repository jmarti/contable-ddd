import { ExpenseMockEntity, NewExpenseMockEntity } from "./entities/ExpenseMockEntity"

let counter = 0

export let expenses: ExpenseMockEntity[] = [
    {
        id: `e${++counter}`,
        description: 'Alquier',
        amount: 2900000,
        date: '2022-08-01',
        categoryId: 'e1'
    }
]

export function addExpense(newExpense: NewExpenseMockEntity): UniqueId {
    const newExpenseId = `e${++counter}`
    expenses.push({
        ...newExpense,
        id: newExpenseId
    })
    return newExpenseId
}