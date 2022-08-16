import { CategoryId } from "Category/domain/Category"

export interface NewExpense {
    description: string
    amount: AmountCents
    date: DateString
    category: CategoryId
}