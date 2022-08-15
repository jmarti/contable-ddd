import { CategoryId } from "./Category"

export type ExpenseId = string
export type ExpenseDescription = string
export type ExpenseAmount = number
export type ExpenseDate = Date

export interface Expense {
    id: ExpenseId
    description: ExpenseDescription
    amount: ExpenseAmount
    date: ExpenseDate
    category: CategoryId
}