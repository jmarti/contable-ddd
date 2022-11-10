export type CategoryId = UniqueId
export type CategoryName = string
export enum CategoryType {
    Expense = 'EXPENSE'
}

export class Category {
    constructor(public id: CategoryId, public name: CategoryName, public type: CategoryType) {
    }
}