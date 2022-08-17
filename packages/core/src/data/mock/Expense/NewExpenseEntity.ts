import { CategoryId } from "data/mock/Category/CategoryEntity"

export interface NewExpenseEntity {
    description: string
    amount: AmountCents
    date: DateString
    categoryId: CategoryId   
}