import { CategoryId } from 'domain/Category'

export interface ExpenseBase {
    description: string
    amount: AmountCents
    date: DateString
    category: CategoryId
}