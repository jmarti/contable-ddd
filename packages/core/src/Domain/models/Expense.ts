import { CategoryId } from "./Category"

export interface NewExpense {
    description: string
    amount: AmountCents
    date: DateString
    category: CategoryId
}

export interface Expense extends NewExpense {
    id: UniqueId
}