export type CategoryId = UniqueId
export type CategoryName = string
export enum CategoryType {
    Expense = "EXPENSE"
}

export interface Category {
    id: CategoryId
    name: CategoryName,
    type: CategoryType
}