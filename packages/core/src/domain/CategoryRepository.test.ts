import { describe, expect, test } from 'vitest'
import { InMemoryCategoryRepository } from 'infrastructure/mock/InMemoryCategoryRepository'
import { Category, CategoryType } from './Category'

describe.each([
    new InMemoryCategoryRepository()
])(`test category repositories`, (repo) => {
    test(`can save and retrieve category`, async () => {
        const theCategory = new Category('1', 'Food', CategoryType.Expense)
        
        repo.save(theCategory)

        expect(await repo.list()).toEqual([theCategory]) // WRN: Esto solo sirve para la implementación del InMemoryCategoryRepository
    })
})