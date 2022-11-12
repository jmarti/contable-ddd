import { expect, test } from 'vitest'
import { Category, CategoryType } from 'domain/Category'
import { InMemoryCategoryRepository } from 'infrastructure/mock/InMemoryCategoryRepository'
import { CreateCategory } from './CreateCategory'

test(`saves the new category`, async () => {
    const repo = new InMemoryCategoryRepository()
    const createCategory = new CreateCategory(repo)

    await createCategory.execute('1', 'Food', CategoryType.Expense)
    
    expect(await repo.getCategories()).toEqual([
        new Category('1', 'Food', CategoryType.Expense)
    ])
})

test(`can't duplicate a category with the same name and type`, async () => {
    const repo = new InMemoryCategoryRepository()
    const createCategory = new CreateCategory(repo)
    const theCategoryRepeatedData = { name: 'Food', type: CategoryType.Expense }
    const theCategory = { ...theCategoryRepeatedData, id: '1'}
    const repeatedCategory = { ...theCategoryRepeatedData, id: '2'}
    await createCategory.execute(theCategory.id, theCategory.name, theCategory.type)

    async function createSameCategory() {
        await createCategory.execute(repeatedCategory.id, repeatedCategory.name, repeatedCategory.type)
    }

    await expect(createSameCategory).rejects.toThrow('The category already exist.')
    expect(await repo.getCategories()).toEqual([
        new Category(theCategory.id, theCategory.name, theCategory.type)
    ])
})