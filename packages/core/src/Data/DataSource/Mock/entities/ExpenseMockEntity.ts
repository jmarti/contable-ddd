import { CategoryId } from "./CategoryMockEntity"

export type ExpenseDescription = string

export interface ExpenseMockEntity {
    description: string
    amount: AmountCents
    date: DateString
    categoryId: CategoryId
}