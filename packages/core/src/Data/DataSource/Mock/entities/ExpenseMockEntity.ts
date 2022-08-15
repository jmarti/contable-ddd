import { CategoryId } from "./CategoryMockEntity"

export type ExpenseDescription = string
export type ExpenseAmount = number
export type ExpenseDate = string

export interface ExpenseMockEntity {
    description: string
    amount: number
    date: string
    categoryId: CategoryId
}