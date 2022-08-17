export type CategoryId = string
export type CategoryName = string
export enum CategoryType {
    Expense = "EXPENSE"
}

export interface CategoryMockEntity {
    id: CategoryId
    name: CategoryName,
    type: CategoryType
}