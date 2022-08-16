import { CategoryId } from "./CategoryMockEntity"


export interface ExpenseMockEntity {
    id: UniqueId
    description: string
    amount: AmountCents
    date: DateString
    categoryId: CategoryId
}

export interface NewExpenseMockEntity {
    description: string
    amount: AmountCents
    date: DateString
    categoryId: CategoryId   
}