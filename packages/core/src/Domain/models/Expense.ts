import { CategoryId } from "./Category"

export type ExpenseDescription = string

export interface Expense {
    id: UniqueId
    description: ExpenseDescription
    amount: AmountCents
    date: DateString
    category: CategoryId
}