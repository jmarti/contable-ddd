import { CategoryId } from 'domain/Category/Category'

export interface ExpenseBase {
    description: string
    amount: AmountCents
    date: DateString
    category: CategoryId
}