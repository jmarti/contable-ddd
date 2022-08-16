import { CategoryId } from "Category/data/Mock/CategoryEntity"

export interface NewExpenseEntity {
    description: string
    amount: AmountCents
    date: DateString
    categoryId: CategoryId   
}