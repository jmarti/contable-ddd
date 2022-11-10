import { CategoryId } from 'infrastructure/mock/Category/CategoryEntity'

export interface NewExpenseEntity {
    description: string
    amount: AmountCents
    date: DateString
    categoryId: CategoryId   
}