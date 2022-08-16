import { CategoryId } from "Category/data/Mock/CategoryEntity"


export interface ExpenseEntity {
    id: UniqueId
    description: string
    amount: AmountCents
    date: DateString
    categoryId: CategoryId
}

export interface NewExpenseEntity {
    description: string
    amount: AmountCents
    date: DateString
    categoryId: CategoryId   
}