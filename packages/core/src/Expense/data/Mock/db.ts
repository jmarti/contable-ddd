import { ExpenseEntity, NewExpenseEntity } from "./ExpenseEntity"

let counter = 0

export let expenses: ExpenseEntity[] = new Array(10).fill(undefined).map(() => ({
    id: `e${++counter}`,
    description: `Expense description ${counter}`,
    amount: Math.floor(Math.random()*1000000),
    date: '2022-08-01',
    categoryId: 'e1'
}))

export function addExpense(newExpense: NewExpenseEntity): UniqueId {
    const newExpenseId = `e${++counter}`
    expenses.push({
        ...newExpense,
        id: newExpenseId
    })
    return newExpenseId
}