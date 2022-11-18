import { describe, expect, test } from 'vitest'
import CategoryRepositoryImpl from 'infrastructure/mock/Category/CategoryRepositoryImpl'
import { ListCategories } from 'useCases/ListCategories'

import { CategoriesPLoC } from './CategoriesPLoC'
import { CategoriesStatus } from './CategoriesState'

const mockDataRepo = new CategoryRepositoryImpl()
const categoriesPLoC = new CategoriesPLoC(new ListCategories(mockDataRepo))

describe.skip(`statues`, () => {
    test(`'loading' at init`, () => {
        let status
        const listener = (s: any) => status = s.status
        
        categoriesPLoC.subscribe(listener)

        expect(status).toBe(CategoriesStatus.Loading)
    })


    test(`'loaded' when expenses are listed`, async () => {
        let status
        const listener = (s: any) => status = s.status
        
        categoriesPLoC.subscribe(listener)
        await categoriesPLoC.list()

        expect(status).toBe(CategoriesStatus.Loaded)
    })
})