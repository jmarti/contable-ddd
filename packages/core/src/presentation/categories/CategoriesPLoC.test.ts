import { describe, expect, test } from 'vitest'
import CategoryRepositoryImpl from '../../data/mock/Category/CategoryRepositoryImpl'
import { GetCategories } from '../../useCases/GetCategories'
import { CategoriesPLoC } from './CategoriesPLoC'
import { CategoriesStatus } from './CategoriesState'

const mockDataRepo = new CategoryRepositoryImpl()
const categoriesPLoC = new CategoriesPLoC(new GetCategories(mockDataRepo))

describe(`statues`, () => {
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