export type CategoryId = UniqueId
export type CategoryName = string
export enum CategoryType {
    Expense = 'EXPENSE',
    Income = 'INCOME'
}

export class Category {
    static DEFAULT_CATEGORY: CategoryId = "4a2468ca-9932-4bb7-ac07-54200502daeb";

    constructor(public id: CategoryId, public name: CategoryName, public type: CategoryType) { }
}