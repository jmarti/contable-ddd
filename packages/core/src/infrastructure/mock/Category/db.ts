import { CategoryEntity, CategoryType } from './CategoryEntity'

 let counter = 0

export let categories: CategoryEntity[] = new Array(3).fill(undefined).map(() => ({
    id: `e${++counter}`,
    name: `Category ${counter} description`,
    type: CategoryType.Expense
}))