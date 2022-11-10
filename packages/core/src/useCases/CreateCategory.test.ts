import { Category, CategoryType } from '../domain/Category'
import { expect, test } from 'vitest'
import { CreateCategory } from './CreateCategory'
import { InMemoryCategoryRepository } from '../infrastructure/mock/InMemoryCategoryRepository'

test(`saves the new category`, async () => {
    const repo = new InMemoryCategoryRepository();
    const createCategory = new CreateCategory(repo);

    createCategory.execute('1', 'Food', CategoryType.Expense);
    
    expect(await repo.getCategories()).toEqual([
        new Category('1', 'Food', CategoryType.Expense)
    ])
})